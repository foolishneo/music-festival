import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FestivalService } from '../../services/festival.service';

@Component({
  selector: 'app-festivals',
  templateUrl: './festivals.component.html',
  styleUrls: ['./festivals.component.sass']
})
export class FestivalsComponent implements OnInit {

  festivalsData$: Observable<any>;

  constructor(private festivalService: FestivalService) { }

  ngOnInit() {
    this.festivalsData$ = this.festivalService.getFestivalData();
    
  }

}
