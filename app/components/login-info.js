import Ember from 'ember';

export default Ember.Component.extend({
  title: null, 
  isLogin: Ember.computed('title', function() {
    return this.get('title') == "Login";
  }),
  actions: {
    closeModal() {
      this.get('closeModal')();
    }
  }
});
