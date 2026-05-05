import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

type CardType = 'BILL' | 'NON_BILL';

/** Logo color family for bank circle */
export type BankLogoTheme = 'blue' | 'purple';

interface SummaryRow {
  label: string;
  count: number;
  amount: number;
  variant: 'normal' | 'danger';
}

export type DownloadFileKind = 'zip' | 'csv' | 'pdf';

export interface DownloadFileRow {
  fileName: string;
  kind: DownloadFileKind;
  sizeLabel: string;
  uploadedBy: string;
  dateTime: string;
}

interface BankCodeCard {
  bankCode: string;
  updatedAt: string;
  type: CardType;
  logoTheme: BankLogoTheme;
  logoText: string;
  /** When true (e.g. download/validation failed), card shows error UI (border, Retry, zeros, message). */
  hasIncorrectInfo?: boolean;
  /** Shown below the table when `hasIncorrectInfo`; falls back to default copy in the template. */
  errorMessage?: string;
  kpi: {
    knownCount: number;
    knownAmount: number;
    inProgressCount: number;
    inProgressAmount: number;
    unknownCount: number;
    unknownAmount: number;
  };
}

@Component({
  selector: 'app-bank-password-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bank-password-page.component.html',
  styleUrls: ['./bank-password-page.component.scss'],
})
export class BankPasswordPageComponent {
  /** “ดูไฟล์ที่ดาวน์โหลดไว้” modal */
  filesModalOpen = false;
  filesModalAccountLabel = '';
  filesModalRows: DownloadFileRow[] = [];

  filterModel = {
    inputBankCode: '',
    date: '2026-01-26',
  };

  /** Top MSIG card — matches reference row labels & totals */
  readonly summary = {
    title: 'MSIG (รวมทุกธนาคาร)',
    rows: [
      { label: 'ยอดทราบที่มา', count: 3_300, amount: 3_300_000.0, variant: 'normal' as const },
      { label: 'ทำรายการระหว่างวัน', count: 110, amount: 110_000.0, variant: 'normal' as const },
      { label: 'ยอดไม่ทราบที่มา', count: 7_588, amount: 7_588_000.0, variant: 'danger' as const },
      { label: 'เกิดข้อผิดพลาด', count: 2, amount: 2_000.0, variant: 'normal' as const },
    ] satisfies SummaryRow[],
    total: { label: 'รวมทั้งหมด', count: 11_000, amount: 11_000_000.0 },
  };

  readonly cards: BankCodeCard[] = [
    {
      bankCode: 'BBL_BILL',
      updatedAt: 'Updated : 07:00:10 am',
      type: 'BILL',
      logoTheme: 'blue',
      logoText: 'BBL',
      kpi: {
        knownCount: 300,
        knownAmount: 300_000.0,
        inProgressCount: 10,
        inProgressAmount: 10_000.0,
        unknownCount: 690,
        unknownAmount: 690_000.0,
      },
    },
    {
      bankCode: 'BBL_NON_BILL',
      updatedAt: 'Updated : 07:00:10 am',
      type: 'BILL',
      logoTheme: 'blue',
      logoText: 'BBL',
      hasIncorrectInfo: true,
      errorMessage: 'เกิดข้อผิดพลาด : ไม่สามารถดาวน์โหลดไฟล์จาก ธนาคารได้',
      kpi: {
        knownCount: 300,
        knownAmount: 300_000.0,
        inProgressCount: 10,
        inProgressAmount: 10_000.0,
        unknownCount: 690,
        unknownAmount: 690_000.0,
      },
    },
    {
      bankCode: 'SCB_605',
      updatedAt: 'Updated : 07:00:10 am',
      type: 'BILL',
      logoTheme: 'blue',
      logoText: 'SCB',
      kpi: {
        knownCount: 300,
        knownAmount: 300_000.0,
        inProgressCount: 10,
        inProgressAmount: 10_000.0,
        unknownCount: 690,
        unknownAmount: 690_000.0,
      },
    },
    {
      bankCode: 'SCB_607',
      updatedAt: 'Updated : 07:00:10 am',
      type: 'NON_BILL',
      logoTheme: 'purple',
      logoText: 'SCB',
      hasIncorrectInfo: true,
      errorMessage: 'เกิดข้อผิดพลาด : ไม่สามารถดาวน์โหลดไฟล์จาก ธนาคารได้',
      kpi: {
        knownCount: 300,
        knownAmount: 300_000.0,
        inProgressCount: 10,
        inProgressAmount: 10_000.0,
        unknownCount: 690,
        unknownAmount: 690_000.0,
      },
    },
    {
      bankCode: 'KBANK_BILL',
      updatedAt: 'Updated : 07:00:10 am',
      type: 'BILL',
      logoTheme: 'blue',
      logoText: 'KBANK',
      kpi: {
        knownCount: 300,
        knownAmount: 300_000.0,
        inProgressCount: 10,
        inProgressAmount: 10_000.0,
        unknownCount: 690,
        unknownAmount: 690_000.0,
      },
    },
    {
      bankCode: 'KBANK_NON_BILL',
      updatedAt: 'Updated : 07:00:10 am',
      type: 'NON_BILL',
      logoTheme: 'purple',
      logoText: 'KBANK',
      kpi: {
        knownCount: 300,
        knownAmount: 300_000.0,
        inProgressCount: 10,
        inProgressAmount: 10_000.0,
        unknownCount: 690,
        unknownAmount: 690_000.0,
      },
    },
    {
      bankCode: 'KKP_BILL',
      updatedAt: 'Updated : 07:00:10 am',
      type: 'BILL',
      logoTheme: 'blue',
      logoText: 'KKP',
      hasIncorrectInfo: true,
      errorMessage: 'เกิดข้อผิดพลาด : ไม่สามารถดาวน์โหลดไฟล์จาก ธนาคารได้',
      kpi: {
        knownCount: 300,
        knownAmount: 300_000.0,
        inProgressCount: 10,
        inProgressAmount: 10_000.0,
        unknownCount: 690,
        unknownAmount: 690_000.0,
      },
    },
    {
      bankCode: 'KKP_NON_BILL',
      updatedAt: 'Updated : 07:00:10 am',
      type: 'NON_BILL',
      logoTheme: 'purple',
      logoText: 'KKP',
      kpi: {
        knownCount: 300,
        knownAmount: 300_000.0,
        inProgressCount: 10,
        inProgressAmount: 10_000.0,
        unknownCount: 690,
        unknownAmount: 690_000.0,
      },
    },
    {
      bankCode: 'TTB_BILL',
      updatedAt: 'Updated : 07:00:10 am',
      type: 'BILL',
      logoTheme: 'blue',
      logoText: 'TTB',
      kpi: {
        knownCount: 300,
        knownAmount: 300_000.0,
        inProgressCount: 10,
        inProgressAmount: 10_000.0,
        unknownCount: 690,
        unknownAmount: 690_000.0,
      },
    },
    {
      bankCode: 'TTB_NON_BILL',
      updatedAt: 'Updated : 07:00:10 am',
      type: 'NON_BILL',
      logoTheme: 'purple',
      logoText: 'TTB',
      kpi: {
        knownCount: 300,
        knownAmount: 300_000.0,
        inProgressCount: 10,
        inProgressAmount: 10_000.0,
        unknownCount: 690,
        unknownAmount: 690_000.0,
      },
    },
    {
      bankCode: 'CIT_BILL',
      updatedAt: 'Updated : 07:00:10 am',
      type: 'BILL',
      logoTheme: 'blue',
      logoText: 'CIT',
      kpi: {
        knownCount: 300,
        knownAmount: 300_000.0,
        inProgressCount: 10,
        inProgressAmount: 10_000.0,
        unknownCount: 690,
        unknownAmount: 690_000.0,
      },
    },
    {
      bankCode: 'CIT_NON_BILL',
      updatedAt: 'Updated : 07:00:10 am',
      type: 'NON_BILL',
      logoTheme: 'purple',
      logoText: 'CIT',
      kpi: {
        knownCount: 300,
        knownAmount: 300_000.0,
        inProgressCount: 10,
        inProgressAmount: 10_000.0,
        unknownCount: 690,
        unknownAmount: 690_000.0,
      },
    },
  ];

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

  /** Table shows zeros when the card is in an error state (e.g. failed bank download). */
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
    // Wire to refresh / re-download for this bank code.
    void item;
  }

  @HostListener('document:keydown.escape')
  onEscapeCloseModal(): void {
    if (this.filesModalOpen) {
      this.closeFilesModal();
    }
  }

  openFilesModal(item: BankCodeCard): void {
    this.filesModalAccountLabel = this.accountLabelForCard(item);
    this.filesModalRows = this.mockDownloadFilesForCard(item);
    this.filesModalOpen = true;
  }

  closeFilesModal(): void {
    this.filesModalOpen = false;
    this.filesModalRows = [];
  }

  downloadAllFiles(): void {
    // Wire to API / zip bundle.
  }

  downloadOneFile(row: DownloadFileRow): void {
    void row;
    // Wire to file URL.
  }

  /** e.g. "SCB 0383073605" — deterministic from bank code for demo */
  accountLabelForCard(item: BankCodeCard): string {
    let n = 0;
    for (const c of item.bankCode) {
      n = (n * 31 + c.charCodeAt(0)) >>> 0;
    }
    const digits = String(n % 10_000_000_000).padStart(10, '0');
    return `${item.logoText} ${digits}`;
  }

  private mockDownloadFilesForCard(item: BankCodeCard): DownloadFileRow[] {
    const slug = item.bankCode.replace(/_/g, '');
    const d = '20260116';
    const base = `${d}-${slug}`;
    return [
      {
        fileName: `${base}.zip`,
        kind: 'zip',
        sizeLabel: '1 KB',
        uploadedBy: 'System',
        dateTime: '17/02/2026 07:15:00',
      },
      {
        fileName: `${base}-ST.csv`,
        kind: 'csv',
        sizeLabel: '61 KB',
        uploadedBy: 'System',
        dateTime: '17/02/2026 07:15:00',
      },
      {
        fileName: `${base}-detail.csv`,
        kind: 'csv',
        sizeLabel: '12 KB',
        uploadedBy: 'System',
        dateTime: '17/02/2026 07:14:22',
      },
      {
        fileName: `${base}-report.pdf`,
        kind: 'pdf',
        sizeLabel: '248 KB',
        uploadedBy: 'System',
        dateTime: '16/02/2026 18:02:10',
      },
    ];
  }
}
