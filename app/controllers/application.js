import Ember from 'ember';

export default Ember.Controller.extend({
 navigationMenuOptions: Ember.A([
    Ember.Object.create({
      name: 'Home',
      route: 'index'
    }),
    Ember.Object.create({
      name: 'About',
      route: 'about'
    }),
    Ember.Object.create({
      name: 'Contact',
      route: 'contact'
    })
  ])
});
