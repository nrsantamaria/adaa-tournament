import { Component, OnInit } from '@angular/core';
import { Team } from '../team.model';
import { TeamService } from '../team.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css'],
  providers: [TeamService]
})

export class TeamDetailComponent implements OnInit {
  teamId: string;
  teamToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private teamService: TeamService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.teamId = urlParameters['id'];
    });
    this.teamToDisplay = this.teamService.getTeamById(this.teamId);
  }
}
