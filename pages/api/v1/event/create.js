import Events from 'db/models/events'

export default function handler(req, res) {
  if (req.method === 'POST') {
    Events.create(req.body)
      .then(({ dataValues }) => {
        res.status(200).json(dataValues)
      })
      .catch((error) => {
        res.status(422).json({ message: error.message || 'something went wrong while creating event' })
      })
  }
}
