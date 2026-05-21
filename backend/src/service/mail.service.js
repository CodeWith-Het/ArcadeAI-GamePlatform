import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.GOOGLE_USER,
    // pass:process.env.GOOGLE_APP_PASSWORD,
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    accessToken: process.env.GOOGLE_ACCESS_TOKEN
  },
});

transporter.verify()
    .then(()=>{console.log("Email transparter is ready for send Email");})
    .catch((err) => { console.error("Email transparter verificed fails", err) })
    
export async function sendEmail({to,subject,html,text}) {
    const mailOption = {
        from: process.env.GOOGLE_USER,
        to,
        subject,
        html,
        text
    }

    const details = await transporter.sendMail(mailOption);
    console.log("email details", details);
}