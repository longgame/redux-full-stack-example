'use strict';
module.exports = function(sequelize, DataTypes) {
  var Address = sequelize.define('Address', {
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    postal_code: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Address.belongsTo(models.User);
      }
    }
  });
  return Address;
};
