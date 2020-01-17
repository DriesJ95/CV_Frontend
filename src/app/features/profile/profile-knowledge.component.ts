import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-knowledge',
  template: `
    <div class="container">
      <h2>Knowledge</h2>
      <div name="knowledge" class="row">
        <div class="input-group col-6">
          <div class="input-group-prepend">
            <span class="input-group-text">Français</span>
          </div>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
        <div class="input-group col-6">
          <div class="input-group-prepend">
            <span class="input-group-text">English</span>
          </div>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
      </div>
      <div name="technology" class="container" style="padding-top: 50px">
        <h2>Technology</h2>
        <div class="row">
          <div name="development" class="col">
            <p>Development</p>
            <ul class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                HTML
                <span class="badge badge-warning badge-pill">2</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                CSS
                <span class="badge badge-warning badge-pill">3</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Java / J2EE
                <span class="badge badge-warning badge-pill">4</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                JPA / Hibernate
                <span class="badge badge-warning badge-pill">5</span>
              </li>
            </ul>
          </div>
          <div name="Systems" class="col">
            <p>Systems</p>
            <ul class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Linux
                <span class="badge badge-warning badge-pill">2</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Network
                <span class="badge badge-warning badge-pill">3</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Firewall
                <span class="badge badge-warning badge-pill">4</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                TCP / IP
                <span class="badge badge-warning badge-pill">5</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                VPN
                <span class="badge badge-warning badge-pill">5</span>
              </li>
            </ul>
          </div>
          <div name="Business Applications" class="col">
            <p>Business Applications</p>
            <ul class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Alfresco
                <span class="badge badge-warning badge-pill">2</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                CRM
                <span class="badge badge-warning badge-pill">3</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                ERP
                <span class="badge badge-warning badge-pill">4</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Oracle Application Server
                <span class="badge badge-warning badge-pill">5</span>
              </li>
            </ul>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="submit" class="btn btn-secondary">Export</button>
      </div>
    </div>
  `
})
export class ProfileKnowledgeComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
