import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    doLogin() {
      console.log("Login attempt")
    }
  },

  model() {
    return {
      email: '',
      password: ''
    }
  }

});
