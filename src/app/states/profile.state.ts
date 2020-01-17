import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Profile } from '../models/domain.model';

export class ProfileStateModel {
  profiles: Profile[];
}

@State<ProfileStateModel>({
  name: 'profiles',
  defaults: {
    profiles: []
  }
})
export class ProfileState {

  @Selector()
  static getProfiles(state: ProfileStateModel) {
    return state.profiles;
  }
}
