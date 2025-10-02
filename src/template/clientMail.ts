// @ts-nocheck

import { config } from "@/config";
import { SMTPClient } from "emailjs";

type propTypes = {
  fullName: string;
  email: string;
  message: string;
};

const client = new SMTPClient({
  user: "user",
  password: config.EMAIL_HOST_PASS,
  host: `smtp.${config.EMAIL_HOST_MAIL}`,
  ssl: true,
});

export const clientMail = async (data: propTypes) => {
  client.send(
    {
      text: "i hope this works",
      from: data.email,
      to: config.EMAIL_HOST_MAIL as string,
      // cc: 'else <else@your-email.com>',
      subject: `New mail from client ${data.fullName}`,
    },
    (err, message) => {
      console.log(err || message);
    }
  );
};
