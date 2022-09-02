import { sendCanceEmail } from 'utils/sendEmail'
import UsersEvents from 'db/models/usersEvents'

export default function handler(req, res) {
  const { ids } = req.query
  if (req.method === 'POST') {
    UsersEvents.create({
      user_id: ids[1],
      event_id: ids[0],
    }).then(() => {
      res.status(200).json({ message: 'Event Subscribed' })
    }).catch((error) => {
      res
        .status(422)
        .json({ message: error.message || 'something went wrong while subscribing the event' })
    })
  } else if (req.method === 'DELETE') {
    UsersEvents.destroy({
      where: {
        user_id: ids[1],
        event_id: ids[0],
      },
    }).then(() => {
      if (req.query?.email) {
        sendCanceEmail(req.query.email, req.query.event)
      }
      res.status(200).json({ message: 'Event Subscribed' })
    }).catch((error) => {
      res
        .status(422)
        .json({ message: error.message || 'something went wrong while unsubscribing the event' })
    })
  }
}
