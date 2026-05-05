import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  MOCK_BANK_CODE_CARDS,
  MOCK_BANK_DASHBOARD_SUMMARY,
  MOCK_DOWNLOAD_FILES_FOR_BANK_CODE,
} from './bank-dashboard.mock-data';
import type {
  BankCodeCard,
  BankDashboardQuery,
  BankDashboardSummary,
  DownloadFileRow,
} from './bank-dashboard.models';

/**
 * Single place to plug in HttpClient when backend is ready.
 * Keep method signatures stable so the page component does not need refactors.
 *
 * Replace `of(...)` with `this.http.*` and map responses to the model types in
 * `bank-dashboard.models.ts`. Optional fields (`logoWord`, `accountDisplayLabel`,
 * `downloadUrl`, `fileId`) exist for real payloads.
 */
@Injectable({ providedIn: 'root' })
export class BankDashboardDataService {
  getSummary(_query: BankDashboardQuery): Observable<BankDashboardSummary> {
    void _query;
    return of(
      JSON.parse(JSON.stringify(MOCK_BANK_DASHBOARD_SUMMARY)) as BankDashboardSummary,
    );
  }

  getBankCards(_query: BankDashboardQuery): Observable<BankCodeCard[]> {
    void _query;
    return of(JSON.parse(JSON.stringify(MOCK_BANK_CODE_CARDS)) as BankCodeCard[]);
  }

  getDownloadFilesForBankCode(
    _query: BankDashboardQuery,
    bankCode: string,
  ): Observable<DownloadFileRow[]> {
    void _query;
    return of(MOCK_DOWNLOAD_FILES_FOR_BANK_CODE(bankCode));
  }

  /** Re-fetch / re-run bank download after a card error — swap for POST/PUT to API. */
  retryBankCard(_query: BankDashboardQuery, _bankCode: string): Observable<void> {
    void _query;
    void _bankCode;
    return of(undefined);
  }

  /** Bundle download for all files in the modal — swap for API that returns URL or blob. */
  requestDownloadAllFiles(
    _query: BankDashboardQuery,
    _bankCode: string,
  ): Observable<void> {
    void _query;
    void _bankCode;
    return of(undefined);
  }

  /** Single-file download when `downloadUrl` is not on the row — swap for signed URL or blob. */
  requestDownloadFile(
    _query: BankDashboardQuery,
    _bankCode: string,
    _row: DownloadFileRow,
  ): Observable<void> {
    void _query;
    void _bankCode;
    void _row;
    return of(undefined);
  }
}
