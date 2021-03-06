'use strict';

var _ = require('lodash');
var path = require('path');
var crypto = require('../../lib/crypto');

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
    getterMethods: {
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
    },
    setterMethods: {
      password: function(pass) {
        this.setDataValue('password', crypto.hash(pass));
      },
    },
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Address);
      },
    },
    instanceMethods: {
      checkPassword: function(pass) {
        return crypto.compare(pass, this.password);
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
