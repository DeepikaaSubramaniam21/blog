import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    closeLoginModal() {
      this.set('showLoginModal', false);
      this.transitionToRoute('index');
    },
    toggleShowLoginModal() {
      this.set('showLoginModal', true);
    },
    login() {
      //existing user
      //authenticate email and password
    },
    signup() {
      //new user
      //email lookup - if email exists redirect to login
    }
  }
});
