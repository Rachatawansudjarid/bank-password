/**
 * Temporary mock data only. Replace usage via `BankDashboardDataService` when
 * your coworker exposes real endpoints (remove or stop importing this file).
 */
import type {
  BankCodeCard,
  BankDashboardSummary,
  DownloadFileRow,
} from './bank-dashboard.models';

export const MOCK_BANK_DASHBOARD_SUMMARY: BankDashboardSummary = {
  title: 'MSIG (รวมทุกธนาคาร)',
  logoWord: 'MSIG',
  rows: [
    { label: 'ยอดทราบที่มา', count: 3_300, amount: 3_300_000.0, variant: 'normal' },
    { label: 'ทำรายการระหว่างวัน', count: 110, amount: 110_000.0, variant: 'normal' },
    { label: 'ยอดไม่ทราบที่มา', count: 7_588, amount: 7_588_000.0, variant: 'danger' },
    { label: 'เกิดข้อผิดพลาด', count: 2, amount: 2_000.0, variant: 'normal' },
  ],
  total: { label: 'รวมทั้งหมด', count: 11_000, amount: 11_000_000.0 },
};

export const MOCK_BANK_CODE_CARDS: BankCodeCard[] = [
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
    accountDisplayLabel: 'SCB 0383073605',
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

/** Mock file list for the “ดูไฟล์ที่ดาวน์โหลดไว้” modal — replace with API per bankCode. */
export function MOCK_DOWNLOAD_FILES_FOR_BANK_CODE(bankCode: string): DownloadFileRow[] {
  const slug = bankCode.replace(/_/g, '');
  const d = '20260116';
  const base = `${d}-${slug}`;
  return [
    {
      fileName: `${base}.zip`,
      kind: 'zip',
      sizeLabel: '1 KB',
      uploadedBy: 'System',
      dateTime: '17/02/2026 07:15:00',
      fileId: `${bankCode}-zip-1`,
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
