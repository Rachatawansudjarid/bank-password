import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface BankPasswordRow {
  bankCode: string;
  updatedAt: string;
  activeFrom: string;
  activeTo: string;
}

@Component({
  selector: 'app-bank-password-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bank-password-page.component.html',
  styleUrls: ['./bank-password-page.component.scss'],
})
export class BankPasswordPageComponent {
  formModel = {
    bankCode: 'SCB 605',
    username: '',
    password1: '',
    password2: '',
    activeFrom: '',
    activeTo: '',
  };

  readonly bankCodeOptions = [
    'BAY',
    'BBL',
    'KBANK',
    'SCB',
    'SCB 605',
    'SCB 607',
    'SCB 779',
    'KKP',
    'TTB',
    'CIT',
    'UOB',
  ];

  readonly rows: BankPasswordRow[] = [
    { bankCode: 'BAY', updatedAt: '2025/12/20 15:01:01', activeFrom: '2025/02/30', activeTo: '2026/02/30' },
    { bankCode: 'BBL', updatedAt: '2025/12/20 15:01:01', activeFrom: '2025/02/30', activeTo: '2026/02/30' },
    { bankCode: 'KBANK', updatedAt: '2025/12/20 15:01:01', activeFrom: '2025/02/30', activeTo: '2026/02/30' },
    { bankCode: 'SCB', updatedAt: '2025/12/20 15:01:01', activeFrom: '2025/02/30', activeTo: '2026/02/30' },
    { bankCode: 'SCB 607', updatedAt: '2025/12/20 15:01:01', activeFrom: '2025/02/30', activeTo: '2026/02/30' },
    { bankCode: 'SCB 779', updatedAt: '2025/12/20 15:01:01', activeFrom: '2025/02/30', activeTo: '2026/02/30' },
    { bankCode: 'KKP', updatedAt: '2025/12/20 15:01:01', activeFrom: '2025/02/30', activeTo: '2026/02/30' },
    { bankCode: 'TTB', updatedAt: '2025/12/20 15:01:01', activeFrom: '2025/02/30', activeTo: '2026/02/30' },
    { bankCode: 'CIT', updatedAt: '2025/12/20 15:01:01', activeFrom: '2025/02/30', activeTo: '2026/02/30' },
    { bankCode: 'UOB', updatedAt: '2025/12/20 15:01:01', activeFrom: '2025/02/30', activeTo: '2026/02/30' },
  ];

  readonly pageSizeOptions = [10, 20, 50];
  pageSize = 10;
  currentPage = 1;

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.rows.length / this.pageSize));
  }

  get pagedRows(): BankPasswordRow[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.rows.slice(start, start + this.pageSize);
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

  save(): void {
    // UI only.
  }

  clear(): void {
    this.formModel = {
      bankCode: 'SCB 605',
      username: '',
      password1: '',
      password2: '',
      activeFrom: '',
      activeTo: '',
    };
  }
}
