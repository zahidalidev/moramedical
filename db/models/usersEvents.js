import { DataTypes } from 'sequelize'

import db from './index'

const UsersEvents = db.sequelize.define('users_events', {
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
}, { timestamps: false })

export default UsersEvents
