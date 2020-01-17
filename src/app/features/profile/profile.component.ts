import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
        <app-profile-navbar></app-profile-navbar>
        <app-profile-progress></app-profile-progress>
  `,
  styles: []
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
