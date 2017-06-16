import { Injectable } from '@angular/core';
import { Team } from './team.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class TeamService {
  teams: FirebaseListObservable<any[]>

  constructor(private database: AngularFireDatabase) {
    this.teams = database.list('teams');
  }

  getTeams() {
    return this.teams;
  }

  getTeamById(teamId: string){
    return this.database.object('teams/' + teamId);
  }

  addTeam(newTeam: Team) {
    this.teams.push(newTeam);
  }

  editTeam(selectedTeam){
    var firebaseTeamToEdit = this.getTeamById(selectedTeam.$key);
    firebaseTeamToEdit.update({name: selectedTeam.name,
      rank: selectedTeam.rank,
      description: selectedTeam.description,
      location: selectedTeam.location,
      numberOfPlayers: selectedTeam.numberOfPlayers,
      photo: selectedTeam.photo,
      teamColor: selectedTeam.teamColor,
      logo: selectedTeam.logo,
    });
  }

  deleteTeam(localTeam){
    var firebaseTeamToDelete = this.getTeamById(localTeam.$key);
    firebaseTeamToDelete.remove();
  }
}
