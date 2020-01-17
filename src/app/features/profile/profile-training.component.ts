import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-trainings',
  template: `
    <h1>Trainings</h1>
    <table class="table">
      <thead>
        <tr>
          <th>
            Years
          </th>
          <th>
            Diploma
          </th>
          <th>
            Diploma (English)
          </th>
          <th>
            Establishment
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
        <td>placeholder</td>
        <td>placeholder</td>
        <td><i class="fas fa-edit"></i> <i class="fa fa-trash"></i></td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>placeholder</td>
        <td>placeholder</td>
        <td>placeholder</td>
        <td>placeholder</td>
        <td><i class="fas fa-edit"></i> <i class="fa fa-trash"></i></td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>placeholder</td>
        <td>placeholder</td>
        <td>placeholder</td>
        <td>placeholder</td>
        <td><i class="fas fa-edit"></i> <i class="fa fa-trash"></i></td>
      </tr>
    </table>
    <button class="btn btn-primary">Add</button>
  `
})
export class ProfileTrainingComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
