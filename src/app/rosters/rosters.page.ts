import { Component, OnInit } from '@angular/core';
import { Roster } from './roster.model';

@Component({
  selector: 'app-rosters',
  templateUrl: './rosters.page.html',
  styleUrls: ['./rosters.page.scss'],
})
export class RostersPage implements OnInit {

  rosters: Roster[] = [
    {
      id: 1,
      faction: 1,
      factionImage: 'http://imgs.steps.dragoart.com/how-to-draw-the-rebel-alliance-starbird-from-star-wars-starbird-symbol-step-7_1_000000138381_5.gif',
      title: 'Rebel yell'
    },
    {
      id: 2,
      faction: 2,
      factionImage: 'https://starwarsblog.starwars.com/wp-content/uploads/2016/02/imperialseal.jpg',
      title: 'Vadar\'s fist'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
