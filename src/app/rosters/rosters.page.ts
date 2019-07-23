import { Component, OnInit } from '@angular/core';
import { Roster } from './roster.model';
import { RosterService } from './roster.service';

@Component({
  selector: 'app-rosters',
  templateUrl: './rosters.page.html',
  styleUrls: ['./rosters.page.scss'],
})
export class RostersPage implements OnInit {
  rosters: Roster[];


  constructor(private rosterService: RosterService) { }

  ngOnInit() {
    this.rosters = this.rosterService.getAllRosters();
  }

}
