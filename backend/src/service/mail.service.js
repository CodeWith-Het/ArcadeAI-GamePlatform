import "dotenv/config";
import nodemailer from "nodemailer";
console.log("TESTING ENV:", process.env.GOOGLE_USER);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GOOGLE_USER,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

transporter
  .verify()
  .then(() => {
    console.log("Email transporter is ready!");
  })
  .catch((err) => {
    console.error("Email transporter failed", err);
  });

export async function sendEmail({ to, subject, html, text }) {
  try {
    const mailOption = {
      from: `"ArcadeAI 🎮" <${process.env.GOOGLE_USER}>`,
      to,
      subject,
      html,
      text,
    };
    const details = await transporter.sendMail(mailOption);
    console.log("Email sent!", details.messageId);
  } catch (error) {
    console.error("Email error:", error.message);
    throw error;
  }
}

