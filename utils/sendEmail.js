import nodemailer from 'nodemailer'

const email = process.env.NEXT_APP_GMAIL_USERNAME
const password = process.env.NEXT_APP_GMAIL_APP_PASSWORD

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password,
  },
})

export const sendCanceEmail = async (userEmail, eventTitle) => {
  const html = `<div class="container" style="max-width: 1000px; margin-left: auto; margin-right: auto; padding-left: 10px; padding-right:10px;" >
  <h2>You have beed removed from event ${eventTitle}</h2>
  <p>Please contact organizers for details<p>
  </div>`
  await transporter.sendMail({
    to: userEmail,
    subject: 'Moramedical Events',
    html,
  })
}

export const sendAlertEventEmail = async (user, event) => {
  const html = `<div class="container" style="max-width: 1000px; margin-left: auto; margin-right: auto; padding-left: 10px; padding-right:10px;" >
  <h2>Hey ${user.name}</h2>
  <h5>The event you have subscribed is going to start on ${event.start_date}<h5>
  </div>`
  await transporter.sendMail({
    to: user.email,
    subject: 'Moramedical Events',
    html,
  })
}
