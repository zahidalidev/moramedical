import Events from 'db/models/events'
import UsersEvents from 'db/models/usersEvents'
import getCurrentDate from 'utils/helpers'
import schedule from 'node-schedule'
import db from 'db/models'
import Users from 'db/models/users'
import { sendAlertEventEmail } from 'utils/sendEmail'

const { Op } = db.Sequelize

const scheduleEvent = () => {
  schedule.gracefulShutdown()
  schedule.scheduleJob('0 0 * * *', () => {
    const today = getCurrentDate()
    const dayAfterTomorrow = getCurrentDate(3)

    UsersEvents.findAll({
      attributes: ['user_id', 'event_id'],
      include: [
        {
          model: Users,
          attributes: ['name', 'id', 'email'],
        },
        {
          model: Events,
          attributes: [
            'id',
            'title',
            'start_date',
            'from',
            'to',
            'host_doctor_name',
            'description',
          ],
          where: {
            start_date: {
              [Op.between]: [today, dayAfterTomorrow],
            },
          },
        },
      ],
    })
      .then((response) => {
        let data = response
        data = JSON.stringify(data)
        data = JSON.parse(data)
        data.forEach(({ user, event }) => {
          sendAlertEventEmail(user, event)
        })
      })
  })
}

export default function handler(req, res) {
  if (req.method === 'GET') {
    Events.findAll({
      attributes: ['id', 'title', 'description', 'host_doctor_name', 'from', 'to', 'start_date'],
      include: [
        {
          model: UsersEvents,
          attributes: ['user_id'],
        },
      ],
    })
      .then((response) => {
        res.status(200).json(response)
      })
      .catch((error) => {
        res
          .status(404)
          .json({ message: error.message || 'something went wrong while fetching events' })
      })
  }
  scheduleEvent()
}
