import Events from 'db/models/events'

export default function handler(req, res) {
  if (req.method === 'GET') {
    Events.findAll()
      .then((response) => {
        res.status(200).json(response)
      })
      .catch((error) => {
        res.status(404).json({ message: error.message || 'something went wrong while fetching events' })
      })
  }
}
