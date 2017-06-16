import { Component, Input, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css'],
  providers: [TeamService]
})
export class EditTeamComponent implements OnInit {
  @Input() selectedTeam;
  formButton = true;
  editForm = null;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  showForm(){
    this.editForm = true;
    this.formButton = null;
  }

  beginUpdatingTeam(team){
    this.teamService.editTeam(team);
    this.editForm = null;
    this.formButton = true;
  }

  beginDeletingTeam(team){
    if(confirm("Are you sure you want to remove this team?")){
      this.teamService.deleteTeam(team);
    }
  }
}
