const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const TbAuths = sequelize.define('TB_AUTHS', {
    auth_code: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      comment: '권한 코드',
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '권한 이름',
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
      comment: '권한 생성일',
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '권한 수정일',
    },
  }, {
    tableName: 'TB_AUTHS',
    timestamps: false,
  });

  TbAuths.associate = (models) => {
    TbAuths.hasMany(models.TbUsers, { foreignKey: 'auth_code' });
  };

  return TbAuths;
};
