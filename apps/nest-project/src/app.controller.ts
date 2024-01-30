import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { sharedConstant as sharedConstantDefault } from '@repo/shared';
import { sharedConstant as sharedConstantVite } from '@repo/shared-vite';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/shared')
  getShared() {
    return sharedConstantDefault;
  }

  @Get('/shared-vite')
  getSharedVite() {
    return sharedConstantVite;
  }
}
