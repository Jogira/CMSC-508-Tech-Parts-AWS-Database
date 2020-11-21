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

  firstLoad() {
    if(this.username == null || this.password == null) {
      this.reset();
      this.save();
    }
}
reset() {
    this.username ='';
    this.password = '';
    this.isLoggedIn = false;
    this.save();

}

verifyCred(u, p) {
if(u === "1234" && p === "1234") {
  this.username = u;
  this.password = p;
  this.isLoggedIn = true;
  this.save();
} else {
  this.username = '';
  this.password = '';
  this.isLoggedIn = false;
  this.save();
}
}
}


export default new UserStore();
