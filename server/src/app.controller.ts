import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Post('sendMail')
  sendMail(@Body() formData: { name: string; phone: string }) {
    return this.appService.sendMail(formData);
  }
}
