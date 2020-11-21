import { extendObservable } from 'mobx'

class UserStore {
  constructor() {
    extendObservable(this, {

      username:'',
      isLoggedIn: false,
      password: ''

    })
  }
}



export default new UserStore();
