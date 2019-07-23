import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RosterService } from '../roster.service';
import { Roster } from '../roster.model';

@Component({
  selector: 'app-roster-detail',
  templateUrl: './roster-detail.page.html',
  styleUrls: ['./roster-detail.page.scss'],
})
export class RosterDetailPage implements OnInit {
  roster: Roster;

  constructor(
    private activatedRoute: ActivatedRoute,
    private rosterService: RosterService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('rosterId')) {
        console.log('No roster found for id');
        return;
      }

      const rosterId = paramMap.get('rosterId');
      this.roster = this.rosterService.getRoster(+rosterId);
    });
  }

}
