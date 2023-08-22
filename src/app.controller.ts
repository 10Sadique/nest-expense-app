import { Controller, Get } from '@nestjs/common';

@Controller('/report')
export class AppController {
  @Get('/income')
  getAllInconmeReports() {
    return [];
  }
}
