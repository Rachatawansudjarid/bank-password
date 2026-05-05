/** Domain types for the bank dashboard page — align API responses with these shapes. */

export type CardType = 'BILL' | 'NON_BILL';

/** Logo color family for bank circle */
export type BankLogoTheme = 'blue' | 'purple';

export type DownloadFileKind = 'zip' | 'csv' | 'pdf';

export interface SummaryRow {
  label: string;
  count: number;
  amount: number;
  variant: 'normal' | 'danger';
}

/** MSIG / company-wide summary card */
export interface BankDashboardSummary {
  title: string;
  rows: SummaryRow[];
  total: { label: string; count: number; amount: number };
  /** Short label under the summary emblem (e.g. "MSIG"). Omit only if UI uses a fixed asset. */
  logoWord?: string;
}

export interface BankCodeCard {
  bankCode: string;
  updatedAt: string;
  type: CardType;
  logoTheme: BankLogoTheme;
  logoText: string;
  /**
   * Shown in the files modal toolbar (e.g. "SCB 0383073605").
   * If omitted, the UI falls back to a generated label — prefer sending this from API.
   */
  accountDisplayLabel?: string;
  /** When true (e.g. download/validation failed), card shows error UI */
  hasIncorrectInfo?: boolean;
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

export interface DownloadFileRow {
  fileName: string;
  kind: DownloadFileKind;
  sizeLabel: string;
  uploadedBy: string;
  dateTime: string;
  /** Present when backend can return a direct download URL or file id. */
  downloadUrl?: string;
  fileId?: string;
}

/** Query sent to backend when endpoints exist */
export interface BankDashboardQuery {
  companyCode: string;
  /** ISO date string yyyy-mm-dd */
  date: string;
}
