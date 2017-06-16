import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '../team.model';
import { TeamService } from '../team.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TeamService]
})

export class HomeComponent implements OnInit {
  teams: FirebaseListObservable<any[]>
  currentRoute: string = this.router.url;

  constructor(
    private router: Router,
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.teams = this.teamService.getTeams();
  }

  goToTeamDetail(clickedTeam){
    this.router.navigate(['teams', clickedTeam.$key])
  };

  filterBy: string = "all"

  onChange(menuOption) {
   this.filterBy = menuOption;
  }
}
