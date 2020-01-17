import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-profile-progress',
  template: `
    <p-steps [model]="items" [(activeIndex)]="activeIndex">
    </p-steps>
    <div *ngIf="activeIndex === 0">
      <app-profile-information></app-profile-information>
    </div>
    <div *ngIf="activeIndex === 1">
      <app-profile-knowledge></app-profile-knowledge>
    </div>
    <div *ngIf="activeIndex === 2">
      <app-profile-trainings></app-profile-trainings>
    </div>
    <div *ngIf="activeIndex === 3">
      <app-profile-certifications></app-profile-certifications>
    </div>
    <div *ngIf="activeIndex === 4">
      <app-profile-former-employers></app-profile-former-employers>
    </div>
    <div *ngIf="activeIndex === 5">
      <app-profile-assignments></app-profile-assignments>
    </div>
    <footer class="footer" style="position: fixed; bottom: 0; right: 0;">
      <button type="button" class="btn btn-secondary" (click)="decrement()">Previous Step</button>
      <button type="button" class="btn btn-primary" (click)="increment()">Next Step</button>
    </footer>
  `,
})
export class ProfileProgressComponent implements OnInit {

  items: MenuItem[];
  activeIndex = 0;

  ngOnInit() {
    this.items = [
      {label: 'Information'},
      {label: 'Knowledge'},
      {label: 'Training'},
      {label: 'Certifications'},
      {label: 'Former employers'},
      {label: 'Assignments'},
    ];
  }


  increment() {
    if (this.activeIndex === 5) {

    } else {
      this.activeIndex++;
    }
  }

  decrement() {
    if (this.activeIndex === 0) {

    } else {
      this.activeIndex--;
    }
  }
}
