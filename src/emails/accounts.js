const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from: 'mdazhar.1038@gmail.com',
        subject: 'Task Manager App - Welcome',
        html: `<center><h1>WELCOME :)</h1><br></center><br><h4>Hey ${name}! Thanks for joining the Task Manager app created with node.js</h4>`
    })
}

const sendCancelationEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from: 'mdazhar.1038@gmail.com',
        subject: 'Task Manager App - Goodbye',
        html: `<center><h1>Goodbye :(</h1><br></center><br><h4>Hey ${name}! Thanks for being a part of Task Manager app.</h4>`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}