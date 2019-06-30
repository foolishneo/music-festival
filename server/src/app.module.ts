import { Module, HttpModule } from '@nestjs/common';
import { FestivalsController } from './festivals/festivals.controller';
import { FestivalsService } from './festivals/services/festivals.service';
//import { APP_FILTER } from '@nestjs/core';
//import { HttpExceptionFilter } from './common/http-exception.filter';

@Module({
  imports: [HttpModule],
  controllers: [ FestivalsController ],
  providers: [ 
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // },
    FestivalsService 
  ],
})
export class AppModule {}