import { Component, OnInit } from '@angular/core';
import { CalCStatService } from '../cal-cstat.service';

@Component({
  selector: 'app-show-stat',
  templateUrl: './show-stat.component.html',
  styleUrls: ['./show-stat.component.scss']
})
export class ShowStatComponent implements OnInit {

  private stat = [0, 0, 0];
  constructor(private statTask: CalCStatService) {
  }

  ngOnInit() {
    this.statTask.getStat().subscribe(stat => this.stat = stat);
  }

}
