import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RosterService } from '../roster.service';
import { Roster } from '../roster.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-roster-detail',
  templateUrl: './roster-detail.page.html',
  styleUrls: ['./roster-detail.page.scss'],
})
export class RosterDetailPage implements OnInit {
  roster: Roster;

  constructor(
    private activatedRoute: ActivatedRoute,
    private rosterService: RosterService,
    private alertController: AlertController,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('rosterId')) {
        console.log('No roster found for id');
        this.router.navigate(['/rosters']);
        return;
      }

      const rosterId = paramMap.get('rosterId');
      this.roster = this.rosterService.getRoster(+rosterId);
    });
  }

  onDeleteRoster() {
    this.alertController.create({
      header: 'Are you sure?',
      message: 'Are you sure you want to delete this roster?',
      buttons: [{
        text: 'Cancel',
        role: 'Canel'
      },
    {
      text: 'Delete',
      handler: () => {
        this.rosterService.deleteRoster(this.roster.id);
        this.router.navigate(['/rosters']);
      }
    }]}).then(alertElement => {
      alertElement.present();
    });
  }
}
