
import { sequelize } from '../config/createTablesetdb.mjs';
import { DataTypes } from 'sequelize';


export const up = async () => {
  await sequelize.getQueryInterface().createTable('user', {
    id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true,
         allowNull: false
       },
       
       name: {
         type: DataTypes.STRING,
         allowNull: false
       },
       email: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true
       },
       password: {
         type: DataTypes.STRING,
         allowNull: false
       },
      
       createdAt: {
         type: DataTypes.DATE,
         allowNull: false,
         defaultValue: new Date()
       },
       updatedAt: {
         type: DataTypes.DATE,
         allowNull: false,
         defaultValue: new Date()
       }
  });
  console.log("✅ Table 'user' has been created.");
};

export const down = async () => {
  await sequelize.getQueryInterface().dropTable('user');
  console.log("❌ Table 'user' has been dropped.");
};
