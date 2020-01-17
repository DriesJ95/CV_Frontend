import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-certifications',
  template: `
    <h1>Certifications</h1>
    <table class="table">
      <thead>
      <tr>
        <th>
          Logo
        </th>
        <th>
          Certification
        </th>
        <th>
          Attach
        </th>
        <th>___</th>
      </tr>
      </thead>
      <tr>
        <td>placeholder</td>
        <td>placeholder</td>
        <td>placeholder</td>
        <td><i class="fa fa-trash"></i></td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>placeholder</td>
        <td>placeholder</td>
        <td><i class="fa fa-trash"></i></td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>placeholder</td>
        <td>placeholder</td>
        <td><i class="fa fa-trash"></i></td>
      </tr>
    </table>
    <button class="btn btn-primary">Add</button>
  `
})
export class ProfileCertificationComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
