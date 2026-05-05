import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { BankDashboardDataService } from './bank-dashboard.data.service';
import type { BankCodeCard, BankDashboardSummary, DownloadFileRow } from './bank-dashboard.models';

/** Re-export types for templates / other modules that imported from the component before */
export type { BankCodeCard, DownloadFileRow, BankDashboardSummary } from './bank-dashboard.models';
export type { BankLogoTheme, DownloadFileKind } from './bank-dashboard.models';

@Component({
  selector: 'app-bank-password-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bank-password-page.component.html',
  styleUrls: ['./bank-password-page.component.scss'],
})
export class BankPasswordPageComponent implements OnInit {
  private readonly dashboardData = inject(BankDashboardDataService);

  /** “ดูไฟล์ที่ดาวน์โหลดไว้” modal */
  filesModalOpen = false;
  filesModalBankCode: string | null = null;
  filesModalAccountLabel = '';
  filesModalRows: DownloadFileRow[] = [];

  filterModel = {
    inputBankCode: '',
    date: '2026-01-26',
  };

  /** Filled from `BankDashboardDataService` (mock today; HTTP later). */
  summary: BankDashboardSummary | null = null;
  cards: BankCodeCard[] = [];

  ngOnInit(): void {
    this.reloadDashboard();
  }

  /** Call again when filters change (ค้นหา) or after retry. */
  reloadDashboard(): void {
    const query = {
      companyCode: this.filterModel.inputBankCode,
      date: this.filterModel.date,
    };
    forkJoin({
      summary: this.dashboardData.getSummary(query),
      cards: this.dashboardData.getBankCards(query),
    }).subscribe(({ summary, cards }) => {
      this.summary = summary;
      this.cards = cards;
    });
  }

  formatMoney(value: number): string {
    return value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  bankCardTotalCount(item: BankCodeCard): number {
    const k = item.kpi;
    return k.knownCount + k.inProgressCount + k.unknownCount;
  }

  bankCardTotalAmount(item: BankCodeCard): number {
    const k = item.kpi;
    return k.knownAmount + k.inProgressAmount + k.unknownAmount;
  }

  cardMetricCount(item: BankCodeCard, value: number): number {
    return item.hasIncorrectInfo ? 0 : value;
  }

  cardMetricAmount(item: BankCodeCard, value: number): number {
    return item.hasIncorrectInfo ? 0 : value;
  }

  cardTotalCountDisplay(item: BankCodeCard): number {
    return item.hasIncorrectInfo ? 0 : this.bankCardTotalCount(item);
  }

  cardTotalAmountDisplay(item: BankCodeCard): number {
    return item.hasIncorrectInfo ? 0 : this.bankCardTotalAmount(item);
  }

  cardErrorText(item: BankCodeCard): string {
    return (
      item.errorMessage?.trim() ||
      'เกิดข้อผิดพลาด : ไม่สามารถดาวน์โหลดไฟล์จาก ธนาคารได้'
    );
  }

  retryCard(item: BankCodeCard): void {
    const query = {
      companyCode: this.filterModel.inputBankCode,
      date: this.filterModel.date,
    };
    this.dashboardData.retryBankCard(query, item.bankCode).subscribe(() => {
      this.reloadDashboard();
    });
  }

  @HostListener('document:keydown.escape')
  onEscapeCloseModal(): void {
    if (this.filesModalOpen) {
      this.closeFilesModal();
    }
  }

  openFilesModal(item: BankCodeCard): void {
    this.filesModalBankCode = item.bankCode;
    this.filesModalAccountLabel = this.accountLabelForCard(item);
    const query = {
      companyCode: this.filterModel.inputBankCode,
      date: this.filterModel.date,
    };
    this.dashboardData.getDownloadFilesForBankCode(query, item.bankCode).subscribe((rows) => {
      this.filesModalRows = rows;
      this.filesModalOpen = true;
    });
  }

  closeFilesModal(): void {
    this.filesModalOpen = false;
    this.filesModalBankCode = null;
    this.filesModalRows = [];
  }

  downloadAllFiles(): void {
    const bankCode = this.filesModalBankCode;
    if (!bankCode) return;
    const query = {
      companyCode: this.filterModel.inputBankCode,
      date: this.filterModel.date,
    };
    this.dashboardData.requestDownloadAllFiles(query, bankCode).subscribe();
  }

  downloadOneFile(row: DownloadFileRow): void {
    if (row.downloadUrl?.trim()) {
      window.open(row.downloadUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    const bankCode = this.filesModalBankCode;
    if (!bankCode) return;
    const query = {
      companyCode: this.filterModel.inputBankCode,
      date: this.filterModel.date,
    };
    this.dashboardData.requestDownloadFile(query, bankCode, row).subscribe();
  }

  accountLabelForCard(item: BankCodeCard): string {
    const fromApi = item.accountDisplayLabel?.trim();
    if (fromApi) return fromApi;
    let n = 0;
    for (const c of item.bankCode) {
      n = (n * 31 + c.charCodeAt(0)) >>> 0;
    }
    const digits = String(n % 10_000_000_000).padStart(10, '0');
    return `${item.logoText} ${digits}`;
  }
}
