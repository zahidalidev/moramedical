import Events from 'db/models/events'
import UsersEvents from 'db/models/usersEvents'

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
        res.status(404).json({ message: error.message || 'something went wrong while fetching events' })
      })
  }
}
