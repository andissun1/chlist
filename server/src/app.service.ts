import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

export type FormDataDto = {
  name: string;
  phone: string;
  privacy: boolean;
  isSubmited: boolean;
  typeOfCredits: string;
  sumOfCredits: string;
  overduePayment: string;
  collectors: string;
  сommunicationPreferences: string;
};

@Injectable()
export class AppService {
  constructor(private readonly mailService: MailerService) {}

  async sendMail(formData: FormDataDto) {
    await this.mailService.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `Отклик на сайте`,
      html: `<div style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 30px; background-color: #fff; border: 1px solid #e0e0e0; border-radius: 8px;">
  <h1 style="color: #2c3e50; font-size: 26px; margin-bottom: 20px;">Новая заявка на звонок</h1>

  <div style="background-color: #f8f9fa; padding: 15px; border-radius: 6px; margin-bottom: 25px; font-size: 18px">
    <div style="margin-bottom: 10px;"><strong>Имя:</strong> <span style="color: #555;">${formData.name}</span></div>
    <div style="margin-bottom: 10px;"><strong>Телефон:</strong> <a href="tel:${formData.phone}" style="color: #3498db; text-decoration: none;">${formData.phone}</a></div>
    <div style="margin-bottom: 10px;"><strong>Тип кредита:</strong> <span style="color: #555;">${formData.typeOfCredits}</span></div>
    <div style="margin-bottom: 10px;"><strong>Сумма долга:</strong> <span style="color: #555;">${formData.sumOfCredits}</span></div>
    <div style="margin-bottom: 10px;"><strong>Просрочки:</strong> <span style="color: #555;">${formData.overduePayment}</span></div>
    <div style="margin-bottom: 10px;"><strong>Коллекторы:</strong> <span style="color: #555;">${formData.collectors}</span></div>
  </div>

  <div style="text-align: center; margin: 25px 0;">
 
    <a href="tel:${formData.phone}" style="display: inline-block; background-color: #27ae60; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; text-align: center;font-size: 18px">Позвонить клиенту</a>
    <p style="margin-top: 15px; color: #7f8c8d; font-size: 12px;">Нажмите кнопку выше, чтобы набрать номер напрямую</p>
  </div>
  <p style="color: #7f8c8d; font-size: 12px; margin: 0; margin-top: 15px">Это автоматическое уведомление. Пожалуйста, не отвечайте на это письмо.</p>
  <p style="color: #7f8c8d; font-size: 12px; margin: 0;">&copy; 2026 ООО Стандарт. Все права защищены.</p>
</div>

`,
    });
  }

  getHello(): string {
    return 'Hello World!';
  }
}
