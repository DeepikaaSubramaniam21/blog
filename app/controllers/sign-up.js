import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    closeLoginModal() {
      this.set('showLoginModal', false);
      this.transitionToRoute('index');
    }
  }
});