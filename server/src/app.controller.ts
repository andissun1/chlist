import { Body, Controller, Get, Post } from '@nestjs/common';
import * as appService from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: appService.AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Post('sendMail')
  sendMail(@Body() formData: appService.FormDataDto) {
    return this.appService.sendMail(formData);
  }
}
