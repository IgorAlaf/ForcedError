import sequelize from '../db/db.config.js'
import { Model, DataTypes } from 'sequelize'
class User extends Model {}

User.init(
	{
		userId: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		login: {
			type: DataTypes.STRING,
			allowNull: false
		},

		password: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{ sequelize, modelName: 'users' }
)

export default User
