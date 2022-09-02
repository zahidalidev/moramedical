import nodemailer from 'nodemailer'

const username = process.env.NEXT_APP_GMAIL_USERNAME
const password = process.env.NEXT_APP_GMAIL_PASSWORD

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: username,
    pass: password,
  },
})

const sendEmail = async (userEmail, eventTitle) => {
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

export default sendEmail
