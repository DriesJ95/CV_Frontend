import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-assignments',
  template: `
    <h1>Trainings</h1>
    <table class="table">
      <thead>
      <tr>
        <th>
          Project
        </th>
        <th>
          Client
        </th>
        <th>
          Starting time
        </th>
        <th>
          Ending time
        </th>
        <th>
          Role
        </th>
        <th>
          Technology
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
        <td>placeholder</td>
        <td><i class="fas fa-edit"></i> <i class="fa fa-trash"></i></td>
      </tr>
      <tr>
        <td>placeholder</td>
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
        <td>placeholder</td>
        <td><i class="fas fa-edit"></i> <i class="fa fa-trash"></i></td>
      </tr>
    </table>
    <button class="btn btn-primary">Add</button>
  `
})
export class ProfileAssignmentsComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
