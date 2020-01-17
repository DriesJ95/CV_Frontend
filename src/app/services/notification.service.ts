import { Injectable } from '@angular/core';
import { ToastrService, IndividualConfig } from 'ngx-toastr';

type Severities = 'success' | 'info' | 'warning' | 'error';

@Injectable({ providedIn: 'root' })
export class NotificationService
{
  constructor(
    private readonly toastr: ToastrService
  ) {}

  info(msg: string, title?: string)    { this.notify('info', msg, title); }
  success(msg: string, title?: string) { this.notify('success', msg, title); }
  warn(msg: string, title?: string)    { this.notify('warning', msg, title); }
  error(msg: string, title?: string)   { this.notify('error', msg, title, { closeButton: true, disableTimeOut: true }); }

  private notify(severity: Severities, detail: string, summary: string, override?: Partial<IndividualConfig>) {
    this.toastr.show(detail, summary, override, `toast-${severity}`);
  }
}
