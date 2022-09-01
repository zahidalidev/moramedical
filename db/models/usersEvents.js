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

User.belongsToMany(Events, { through: UsersEvents })
Events.belongsToMany(User, { through: UsersEvents })

export default UsersEvents
