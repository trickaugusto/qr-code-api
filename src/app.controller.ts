import { Body, Controller, Get, Post, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateLinkQr } from './dto/CreateLinkQr';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('redirect')
  @Redirect('', 302)
  async redirect() {
    return { url: 'https://www.youtube.com/watch?v=Z4-ZEHqNa-8' };
  }

  @Post('new-link')
  async newLink(@Body() createLinkQr: CreateLinkQr) {
    return `this action post a new link: ${createLinkQr.link}`;
  }
}
