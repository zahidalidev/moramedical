import Events from 'db/models/events'
import Users from 'db/models/users'
import UsersEvents from 'db/models/usersEvents'

export default function handler(req, res) {
  if (req.method === 'GET') {
    UsersEvents.findAll({
      attributes: ['user_id', 'event_id'],
      include: [
        {
          model: Users,
          attributes: ['name', 'id', 'email'],
        },
        {
          model: Events,
          attributes: ['id', 'title', 'start_date', 'from', 'to', 'host_doctor_name', 'description'],
        },
      ],
    })
      .then((response) => {
        res.status(200).json(response)
      })
      .catch((error) => {
        res.status(404).json({ message: error.message || 'something went wrong while fetching events' })
      })
  }
}
