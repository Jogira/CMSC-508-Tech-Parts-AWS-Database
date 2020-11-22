import { extendObservable } from 'mobx'

class UserStore {
  constructor() {
    extendObservable(this, {

      username:localStorage.getItem('user'),
      isLoggedIn: localStorage.getItem('login'),
      password: localStorage.getItem('pass'),

    })
  }


  firstLoad() {
    if(this.username === null || this.password === null) {
      localStorage.setItem('user', '');
      localStorage.setItem('login', 0);
      localStorage.setItem('pass', '');

      this.username= localStorage.getItem('user');
      this.isLoggedIn= localStorage.getItem('login');
      this.password= localStorage.getItem('pass');

      this.username ='';
      this.password = '';
      this.isLoggedIn = 0;
    }
}
reset() {
  localStorage.setItem('user', '');
  localStorage.setItem('login', 0);
  localStorage.setItem('pass', '');

        this.username= localStorage.getItem('user');
        this.isLoggedIn= localStorage.getItem('login');
        this.password= localStorage.getItem('pass');

  this.username ='';
  this.password = '';
  this.isLoggedIn = 0;

}

verifyCred(u, p) {
  if(u == "1234" && p == "1234") {
    localStorage.setItem('user', u);
    localStorage.setItem('login', 1); //change this back to true
    localStorage.setItem('pass', p);

    this.username= localStorage.getItem('user');
    this.isLoggedIn= localStorage.getItem('login');
    this.password= localStorage.getItem('pass');

    this.username =u;
    this.password =p;
    this.isLoggedIn = new Boolean (true);
    return this.isLoggedIn;
} else {
    localStorage.setItem('user', '');
localStorage.setItem('login', 0);
    localStorage.setItem('pass', '');

          this.username= localStorage.getItem('user');
          this.isLoggedIn= localStorage.getItem('login');
          this.password= localStorage.getItem('pass');

    this.username ='';
    this.password = '';
    this.isLoggedIn = 0;
    return (this.isLoggedIn)
    }
  }
}


export default new UserStore();
