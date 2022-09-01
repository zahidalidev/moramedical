import { DataTypes } from 'sequelize'

import db from './index'

const Events = db.sequelize.define('events', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  host_doctor_name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  from: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  to: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, { timestamps: false })

export default Events
