import { Controller, Get, NotFoundException } from '@nestjs/common';
import { FestivalsService } from './services/festivals.service';

@Controller('festivals')
export class FestivalsController {

  constructor(private festivalsService: FestivalsService) {}

  @Get()
  listBands() {
    const result = this.festivalsService.listBands();
    if (result === '') {
      throw new NotFoundException()
    }
    return result;
  }
}
