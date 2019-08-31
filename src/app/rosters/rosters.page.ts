import { Component, OnInit, OnDestroy } from '@angular/core';
import { Roster } from './roster.model';
import { RosterService } from './roster.service';

@Component({
  selector: 'app-rosters',
  templateUrl: './rosters.page.html',
  styleUrls: ['./rosters.page.scss'],
})
export class RostersPage implements OnInit, OnDestroy {
  rosters: Roster[];


  constructor(private rosterService: RosterService) { }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.rosters = this.rosterService.getAllRosters();
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
