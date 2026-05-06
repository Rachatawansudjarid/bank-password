import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

type ReconcileTone = 'green' | 'yellow' | 'orange' | 'purple';

interface ReconcileRecordRow {
  docNum: string;
  amount: string;
  effDate: string;
  tranDesc: string;
  userProfile: string;
  tranDesc2: string;
  diffRc: string;
  diffAmount: string;
  status: string;
  statusTone: ReconcileTone;
  tranDate: string;
  receiptNo: string;
  receiptAmount: string;
}

interface ReconcileSearchResult {
  dataAsOf: string;
  summary: {
    glTotal: number;
    summaryTotal: number;
    difference: number;
    items: Array<{ label: string; value: number; tone: ReconcileTone }>;
  };
  records: ReconcileRecordRow[];
}

const RECONCILE_MONTHS = ['JANUARY', 'FEBRUARY', 'MARCH'];
const RECONCILE_BANKS = ['KBANK', 'SCB', 'BBL'];

const RECONCILE_MOCK_RESULT: ReconcileSearchResult = {
  dataAsOf: '18 Mar 2026',
  summary: {
    glTotal: 21709000,
    summaryTotal: 21706000,
    difference: 3000,
    items: [
      { label: 'Matched', value: 300, tone: 'green' },
      { label: 'Amount Mismatch', value: 310, tone: 'yellow' },
      { label: 'GL P400', value: 285, tone: 'orange' },
      { label: 'Bank Statement', value: 352, tone: 'purple' },
    ],
  },
  records: [
    {
      docNum: '8136859',
      amount: '99,380.21',
      effDate: '05/01/2026',
      tranDesc: 'Claim Excess/Recovery',
      userProfile: 'SOP4FIN',
      tranDesc2: 'Description 1',
      diffRc: 'RC016000',
      diffAmount: '93,313.45',
      status: 'Bank Statement',
      statusTone: 'purple',
      tranDate: '16/01/2026',
      receiptNo: 'RC018006',
      receiptAmount: '93,313.45',
    },
    {
      docNum: '8136861',
      amount: '54,244.39',
      effDate: '12/01/2026',
      tranDesc: 'Claim Excess/Recovery',
      userProfile: 'SOP4FIN',
      tranDesc2: 'Description 3',
      diffRc: 'RC016003',
      diffAmount: '-54,244.39',
      status: 'GLP400',
      statusTone: 'orange',
      tranDate: '11/01/2026',
      receiptNo: 'RC018006',
      receiptAmount: '21,699.64',
    },
    {
      docNum: '8136662',
      amount: '-',
      effDate: '21/01/2026',
      tranDesc: 'Claim Excess/Recovery',
      userProfile: 'SOP4FIN',
      tranDesc2: 'Description 6',
      diffRc: 'RC016007',
      diffAmount: '74,636.23',
      status: 'Matched',
      statusTone: 'green',
      tranDate: '11/01/2026',
      receiptNo: 'RC018006',
      receiptAmount: '74,636.23',
    },
  ],
};

@Component({
  selector: 'app-reconcile-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reconcile-page.component.html',
  styleUrl: './reconcile-page.component.scss',
})
export class ReconcilePageComponent implements OnInit {
  months: string[] = [];
  banks: string[] = [];
  selectedMonth = '';
  selectedBank = '';

  hasSearched = false;
  result: ReconcileSearchResult | null = null;

  ngOnInit(): void {
    this.months = RECONCILE_MONTHS;
    this.banks = RECONCILE_BANKS;
    this.selectedMonth = this.months[0] ?? '';
    this.selectedBank = this.banks[0] ?? '';
  }

  onSearch(): void {
    void this.selectedMonth;
    void this.selectedBank;
    this.result = RECONCILE_MOCK_RESULT;
    this.hasSearched = true;
  }

  onReset(): void {
    this.hasSearched = false;
    this.result = null;
  }

  rowTrackBy(_index: number, row: ReconcileRecordRow): string {
    return `${row.docNum}-${row.receiptNo}-${row.tranDate}`;
  }
}
