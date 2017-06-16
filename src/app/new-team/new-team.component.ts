import { Component, OnInit } from '@angular/core';
import { Team } from '../team.model';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.css'],
  providers: [TeamService]
})
export class NewTeamComponent implements OnInit {
  teamForm = null;
  formButton = true;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  showForm(){
    this.formButton = null;
    this.teamForm = true;
  }

  submitForm(name: string, rank: number, description: string, location: string, numberOfPlayers: number, photo: string, teamColor: string, logo: string){
    var newTeam: Team = new Team(name, rank, description, location, numberOfPlayers, photo, teamColor, logo);
    this.teamService.addTeam(newTeam);
    this.teamForm = null;
    this.formButton = true;
  }

}
