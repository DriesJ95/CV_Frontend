import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';

@Injectable({ providedIn: 'root' })
export class UIService {
  constructor(
    public notif: NotificationService
  ) {}
}
