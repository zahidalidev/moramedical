import UsersEvents from 'db/models/usersEvents'
import Users from 'db/models/users'

export default function handler(req, res) {
  const { ids } = req.query

  if (req.method === 'POST') {
    Users.findOne({ where: { email: ids[1] } })
      .then(({ dataValues: { id: userId } }) => {
        UsersEvents.create({
          user_id: userId,
          event_id: ids[0],
        }).then(() => {
          res.status(200).json({ message: 'Event Subscribed' })
        }).catch((error) => {
          res.status(422).json({ message: error.message || 'something went wrong while subscribing event' })
        })
      })
      .catch((error) => {
        res.status(422).json({ message: error.message || 'something went wrong while subscribing event' })
      })
  } else if (req.method === 'DELETE') {
    Users.findOne({ where: { email: ids[1] } })
      .then(({ dataValues: { id: userId } }) => {
        UsersEvents.destroy({
          where: {
            user_id: userId,
            event_id: ids[0],
          },
        }).then(() => {
          res.status(200).json({ message: 'Event Subscribed' })
        })
      })
      .catch((error) => {
        res.status(422).json({ message: error.message || 'something went wrong while subscribing event' })
      })
  }
}
