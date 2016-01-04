'use strict';

var _ = require('lodash');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email:                      DataTypes.STRING,
    email_confirmation_sent:    DataTypes.DATE,
    email_confirmed_at:         DataTypes.DATE,
    password:                   DataTypes.STRING,
    avatar_url:                 DataTypes.STRING,
    first_name:                 DataTypes.STRING,
    last_name:                  DataTypes.STRING,
    phone_number:               DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
    },
    instanceMethods: {
      summary: function() {
        return _.pick(this, [
          'first_name',
          'last_name',
          'email',
          'avatar_url',
        ]);
      },
      profile: function() {
        return _.pick(this, [
          'first_name',
          'last_name',
          'email',
          'avatar_url',
          'phone_number',
        ]);
      },
      verifyEmail: function() {
        this.email_confirmation_sent = new Date();
        
        var job = Kue.create('verify-email', {
          email: this.email
        });

        job.on('complete', function(resp) {
          // FIXME
        });

        job.save();
      },
      changePassword: function() {
        // FIXME
      },
    }
  });
  return User;
};
