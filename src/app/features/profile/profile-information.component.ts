import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Observable, of} from 'rxjs';
import {GeneralInfo} from '@app/models/domain.model';
import {ProfileService} from '@app/services/profile.service';
import {tap} from 'rxjs/operators';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {UIService} from '@app/services/ui.service';

@Component({
  selector: 'app-profile-information',
  template: `
    <div class="container row" style="float: left" *ngIf="(generalInfo$ |async)">
      <div name="left" class="col-2">
        <div name="photo">
          <img src="../../../assets/images/generic-profile-pic.png">
          <button type="button" class="btn btn-light">Change my picture</button>
        </div>

        <div style="float: bottom; padding-top: 50px;" name="underPhoto">
          <h5>{{currentGeneralInfo.name | uppercase}} {{currentGeneralInfo.lastName | uppercase}}</h5>
          <h6 style="padding-top: 25px;">Birthdate</h6>
          <input [(ngModel)] = "currentGeneralInfo.birthdate" bsDatepicker [bsConfig]="{ dateInputFormat: 'YYYY-MM-DD' }"
                 class="form-control" name="birthdate" placeholder="YYYY-MM-DD">
        </div>
      </div>

      <div name="info" class="col" style="padding-left: 150px">
        <div name="titlequalities">
          <h2>Profile</h2>
          <h5>Titles</h5>
          <p-dropdown placeholder="Title"></p-dropdown>
        </div>
        <div name="descriptions" style="padding-top: 50px;">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">French</span>
            </div>
            <textarea [(ngModel)]="currentGeneralInfo.frenchDescription" class="form-control" aria-label="With textarea"></textarea>
          </div>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">English</span>
            </div>
            <textarea [(ngModel)]="currentGeneralInfo.englishDescription" class="form-control" aria-label="With textarea"></textarea>
          </div>
        </div>
        <div name="languages" style="padding-top: 50px;">
          <table class="table">
            <thead>
            <tr>
              <th>Language</th>
              <th>Level</th>
            </tr>
            </thead>
            <tr>
              <td>
                <p-dropdown placeholder="French, Dutch, English"></p-dropdown>
              </td>
            </tr>
          </table>
          <small>Know your level: https://wwww.wallangues.be/</small>
        </div>
        <button type="submit" class="btn btn-primary" (click)="save()">Save</button>
        <button type="submit" class="btn btn-secondary">Export</button>
      </div>
    </div>
  `
})
export class ProfileInformationComponent implements OnInit, OnDestroy, OnChanges {
  generalInfo$: Observable<GeneralInfo>;
  currentGeneralInfo: GeneralInfo;

  constructor(private readonly profileService: ProfileService,
              private readonly ui: UIService) {
  }

  ngOnInit(): void {
    this.generalInfo$ = this.profileService.getGeneralInfo();
    this.generalInfo$.pipe(
      tap(g => this.currentGeneralInfo = g),
      untilDestroyed(this)
    ).subscribe();
  }

  ngOnDestroy(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('before If');
    if (changes.currentGeneralInfo) {
      console.log('ngOnChanges');
      this.setCurrent(changes.currentGeneralInfo.currentValue);
    }
  }

  save() {
    this.ui.notif.success('Your general info has been saved');
    this.profileService.saveGeneralInfo(this.currentGeneralInfo).subscribe();
  }

  setCurrent(generalInfo: GeneralInfo) {
    if (generalInfo) {
        const currentDate = new Date();
        generalInfo.lastUpdate = currentDate.getFullYear() + '-' + currentDate.getMonth() + '-' + currentDate.getDay();
        console.log(generalInfo.lastUpdate);
        this.currentGeneralInfo = generalInfo;
    }
  }
}
