import { MailAdapter, SendMailData } from "../mail.adapter";
import nodemailer from "nodemailer"


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e4b9bff7f90da6",
    pass: "9a10b382ef64a0"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe <oi@oi.com.br>',
      to: 'Renan <renan.montenegro.oliveira@gmail.com>',
      subject,
      html: body,
    })
  };
}