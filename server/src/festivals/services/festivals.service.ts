import { Injectable, HttpService, NotFoundException, ForbiddenException } from '@nestjs/common';
import { map, catchError } from 'rxjs/operators';

import { ApiUrl } from '../../common';
import { getFestivalBands } from '../mapping/festival-bands.mapping';

@Injectable()
export class FestivalsService {
  constructor(private http: HttpService) { }

  listBands(): Object {
    return this.http.get(ApiUrl.FestivalBands)
      .pipe(
        map(response => { 
          if (response.data === '') {
            return '';
          } 
          return getFestivalBands(response.data); 
        }),
        catchError(error => {
          throw new ForbiddenException()
        })
      )
  }
}
