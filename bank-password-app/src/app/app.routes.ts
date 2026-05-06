import { Routes } from '@angular/router';
import { BankPasswordPageComponent } from './pages/bank-password-page/bank-password-page.component';
import { ReconcilePageComponent } from './pages/reconcile-page/reconcile-page.component';

export const routes: Routes = [
  { path: '', component: BankPasswordPageComponent },
  { path: 'reconcile', component: ReconcilePageComponent },
];