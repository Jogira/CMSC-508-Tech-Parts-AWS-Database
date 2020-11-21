import { extendObservable } from 'mobx'

class UserStore {
  constructor() {
    extendObservable(this, {

      username:localStorage.getItem('user'),
      isLoggedIn: localStorage.getItem('login'),
      password: localStorage.getItem('pass')

    })
  }


  save() {
    localStorage.setItem('user', this.username);
    localStorage.setItem('login', this.isLoggedIn);
    localStorage.setItem('pass', this.password);
  }
  loggedIn() {
    return this.isLoggedIn;
  }
}



export default new UserStore();
