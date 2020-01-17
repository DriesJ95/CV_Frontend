import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-former-employers',
  template: `
    <h1>Former employers</h1>
    <table class="table">
      <thead>
      <tr>
        <th>
          Description
        </th>
        <th>
          Period
        </th>
        <th>___</th>
      </tr>
      </thead>
      <tr>
        <td>placeholder</td>
        <td>placeholder</td>
        <td><i class="fas fa-edit"></i> <i class="fa fa-trash"></i></td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>placeholder</td>
        <td><i class="fas fa-edit"></i> <i class="fa fa-trash"></i></td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>placeholder</td>
        <td><i class="fas fa-edit"></i> <i class="fa fa-trash"></i></td>
      </tr>
    </table>
    <button class="btn btn-primary">Add</button>
  `
})
export class ProfileFormerEmployersComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
