import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
import {ProfileNavbarComponent} from '@app/features/profile/profile-navbar.component';
import {ProfileInformationComponent} from '@app/features/profile/profile-information.component';
import {ProfileProgressComponent} from '@app/features/profile/profile-progress.component';
import {ProfileComponent} from '@app/features/profile/profile.component';
import {StepsModule} from 'primeng/steps';
import {ProfileKnowledgeComponent} from '@app/features/profile/profile-knowledge.component';
import {ProfileTrainingComponent} from '@app/features/profile/profile-training.component';
import {ProfileCertificationComponent} from '@app/features/profile/profile-certification.component';
import {ProfileFormerEmployersComponent} from '@app/features/profile/profile-formerEmployers.component';
import {ProfileAssignmentsComponent} from '@app/features/profile/profile-assignments.component';
import {DropdownModule} from 'primeng/components/dropdown/dropdown';
import {BsDatepickerModule, DatepickerModule} from 'ngx-bootstrap';

const MODULES: any[] = [
  SharedModule,
  ProfileRoutingModule
];

const DECLARATIONS: any[] = [
  ProfileNavbarComponent,
  ProfileInformationComponent,
  ProfileKnowledgeComponent,
  ProfileTrainingComponent,
  ProfileCertificationComponent,
  ProfileFormerEmployersComponent,
  ProfileAssignmentsComponent,
  ProfileProgressComponent,
  ProfileComponent
];


@NgModule({
  imports: [
    MODULES,
    StepsModule,
    DropdownModule,
    DatepickerModule,
    BsDatepickerModule
  ],
  declarations: DECLARATIONS
})
export class ProfileModule {}
