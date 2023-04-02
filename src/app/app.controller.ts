import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  home() {
    return 'Welcom to my Movie API';
  }
}
