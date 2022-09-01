import Events from 'db/models/events'
import UsersEvents from 'db/models/usersEvents'
import Users from 'db/models/users'

export default function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const eventBody = req.body
      const email = req.body.userEmail
      delete eventBody.userEmail
      Users.findOne({ where: { email } }).then(({ dataValues: { id: userId } }) => {
        Events.create(eventBody)
          .then(({ dataValues }) => {
            UsersEvents.create({
              user_id: userId,
              event_id: dataValues.id,
            }).then(() => {
              res.status(200).json(dataValues)
            }).catch(error => {
              throw error
            })
          })
          .catch(error => {
            throw error
          })
      }).catch(error => {
        throw error
      })
    } else {
      res.status(200).json({ name: 'John Doe' })
    }
  } catch (error) {
    res.status(422).json({ message: error })
  }
}
