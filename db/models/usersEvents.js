import { DataTypes } from 'sequelize'

import User from 'db/models/users'
import Events from 'db/models/events'

import db from './index'

const UsersEvents = db.sequelize.define(
  'users_events',
  {
    user_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    event_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
  },
  { timestamps: false },
)

User.hasMany(UsersEvents, { foreignKey: 'user_id' })
UsersEvents.belongsTo(User, { foreignKey: 'user_id' })

Events.hasMany(UsersEvents, { foreignKey: 'event_id' })
UsersEvents.belongsTo(Events, { foreignKey: 'event_id' })

export default UsersEvents
