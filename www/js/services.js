angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Tweepons', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var tweepons = [
    { id: 0, name: 'Free hug' },
    { id: 1, name: 'Get off the plank free?' },
    { id: 2, name: '50% off victory' },
    { id: 3, name: 'Yar' }
  ];

  return {
    all: function() {
      return tweepons;
    },
    get: function(tweeponId) {
      // Simple index lookup
      return tweepons[tweeponId];
    }
  }
})
.factory('Contacts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var contacts = [
    { id: 0, name: 'Jake Johnson' },
    { id: 1, name: 'Francis Ani' },
    { id: 2, name: 'Nic Silva' },
    { id: 3, name: 'Yar' }
  ];

  return {
    all: function() {
      return contacts;
    },
    get: function(contactId) {
      // Simple index lookup
      return contacts[contactId];
    }
  }
});
