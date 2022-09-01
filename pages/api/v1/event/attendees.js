import Events from 'db/models/events'
import Users from 'db/models/users'

export default function handler(req, res) {
  if (req.method === 'GET') {
    Users.findAll({ include: Events })
      .then((response) => {
        res.status(200).json(response)
      })
      .catch((error) => {
        res.status(404).json({ message: error.message || 'something went wrong while fetching events' })
      })
  }
}
