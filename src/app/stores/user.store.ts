import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { User } from '../models/user/user.model';
import { computed } from '@angular/core';


type UserState = {
  user: User | null
  isUserValid: boolean
};

const initialState: UserState = {
    user: null,
    isUserValid:false
};

export const UserStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withComputed(({user}) =>({
        organizations: computed(()=> user()?.Organizations ?? [])
    })),
    withMethods((store) =>  ({
        //Updates user info
        updateUser(user: User): void {
            patchState(store, (state) => ({user: user, isUserValid: true}))
        },

        //Logsout user
        logout():void {
            patchState(store, (state) => ({user: null, isUserValid: false}))
        }
    }))
);