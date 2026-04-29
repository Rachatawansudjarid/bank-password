import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type CardType = 'BILL' | 'NON_BILL';

interface BankCodeCard {
  bankCode: string; // e.g. "BBL_BILL"
  updatedAt: string; // e.g. "Updated : 07/02/24 at 05:10:20 am"
  type: CardType;
  kpi: {
    totalCount: number;
    totalAmount: number;
    failCount: number;
    failAmount: number;
    completedCount: number;
    completedAmount: number;
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
  filterModel = {
    inputBankCode: '',
    date: '2026-01-26',
  };

  readonly summary = {
    title: 'MSIG (รวมทุกธนาคาร)',
    updatedAt: '26/01/2026',
    rows: [
      { label: 'จำนวนรายการ', count: 3_300, amount: 3_300_000.0, color: 'normal' as const },
      { label: 'จำนวนที่ไม่สำเร็จ', count: 110, amount: 110_000.0, color: 'normal' as const },
      { label: 'ยอดที่ไม่สำเร็จ', count: 7_590, amount: 7_590_000.0, color: 'danger' as const },
      { label: 'รวม', count: 11_000, amount: 11_000_000.0, color: 'total' as const },
    ],
  };

  readonly cards: BankCodeCard[] = [
    {
      bankCode: 'BBL_BILL',
      updatedAt: 'Updated : 07/02/10 am',
      type: 'BILL',
      kpi: {
        totalCount: 300,
        totalAmount: 300_000.0,
        completedCount: 10,
        completedAmount: 10_000.0,
        failCount: 690,
        failAmount: 690_000.0,
      },
    },
    {
      bankCode: 'BBL_NON_BILL',
      updatedAt: 'Updated : 07/02/10 am',
      // In the reference UI, BBL cards use the same (blue) icon regardless of BILL/NON_BILL.
      type: 'BILL',
      kpi: {
        totalCount: 300,
        totalAmount: 300_000.0,
        completedCount: 10,
        completedAmount: 10_000.0,
        failCount: 690,
        failAmount: 690_000.0,
      },
    },
    {
      bankCode: 'SCB_605',
      updatedAt: 'Updated : 07/02/10 am',
      type: 'BILL',
      kpi: {
        totalCount: 300,
        totalAmount: 300_000.0,
        completedCount: 10,
        completedAmount: 10_000.0,
        failCount: 690,
        failAmount: 690_000.0,
      },
    },
    {
      bankCode: 'SCB_607',
      updatedAt: 'Updated : 07/02/10 am',
      type: 'NON_BILL',
      kpi: {
        totalCount: 300,
        totalAmount: 300_000.0,
        completedCount: 10,
        completedAmount: 10_000.0,
        failCount: 690,
        failAmount: 690_000.0,
      },
    },
    {
      bankCode: 'KBANK_BILL',
      updatedAt: 'Updated : 07/02/10 am',
      type: 'BILL',
      kpi: {
        totalCount: 300,
        totalAmount: 300_000.0,
        completedCount: 10,
        completedAmount: 10_000.0,
        failCount: 690,
        failAmount: 690_000.0,
      },
    },
    {
      bankCode: 'KBANK_NON_BILL',
      updatedAt: 'Updated : 07/02/10 am',
      type: 'NON_BILL',
      kpi: {
        totalCount: 300,
        totalAmount: 300_000.0,
        completedCount: 10,
        completedAmount: 10_000.0,
        failCount: 690,
        failAmount: 690_000.0,
      },
    },
    {
      bankCode: 'KKP_BILL',
      updatedAt: 'Updated : 07/02/10 am',
      type: 'BILL',
      kpi: {
        totalCount: 300,
        totalAmount: 300_000.0,
        completedCount: 10,
        completedAmount: 10_000.0,
        failCount: 690,
        failAmount: 690_000.0,
      },
    },
    {
      bankCode: 'KKP_NON_BILL',
      updatedAt: 'Updated : 07/02/10 am',
      type: 'NON_BILL',
      kpi: {
        totalCount: 300,
        totalAmount: 300_000.0,
        completedCount: 10,
        completedAmount: 10_000.0,
        failCount: 690,
        failAmount: 690_000.0,
      },
    },
    {
      bankCode: 'TTB_BILL',
      updatedAt: 'Updated : 07/02/10 am',
      type: 'BILL',
      kpi: {
        totalCount: 300,
        totalAmount: 300_000.0,
        completedCount: 10,
        completedAmount: 10_000.0,
        failCount: 690,
        failAmount: 690_000.0,
      },
    },
    {
      bankCode: 'TTB_NON_BILL',
      updatedAt: 'Updated : 07/02/10 am',
      type: 'NON_BILL',
      kpi: {
        totalCount: 300,
        totalAmount: 300_000.0,
        completedCount: 10,
        completedAmount: 10_000.0,
        failCount: 690,
        failAmount: 690_000.0,
      },
    },
    {
      bankCode: 'CIT_BILL',
      updatedAt: 'Updated : 07/02/10 am',
      type: 'BILL',
      kpi: {
        totalCount: 300,
        totalAmount: 300_000.0,
        completedCount: 10,
        completedAmount: 10_000.0,
        failCount: 690,
        failAmount: 690_000.0,
      },
    },
    {
      bankCode: 'CIT_NON_BILL',
      updatedAt: 'Updated : 07/02/10 am',
      type: 'NON_BILL',
      kpi: {
        totalCount: 300,
        totalAmount: 300_000.0,
        completedCount: 10,
        completedAmount: 10_000.0,
        failCount: 690,
        failAmount: 690_000.0,
      },
    },
  ];

  // Same pagination pattern as the previous page.
  readonly pageSizeOptions = [6, 10, 12];
  pageSize = 10;
  currentPage = 1;

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.cards.length / this.pageSize));
  }

  get pagedCards(): BankCodeCard[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.cards.slice(start, start + this.pageSize);
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  onPageSizeChange(): void {
    this.currentPage = 1;
  }

  selectPage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
  }

  formatMoney(value: number): string {
    return value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
}
