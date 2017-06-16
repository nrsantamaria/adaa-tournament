import { Pipe, PipeTransform } from '@angular/core';
import { Team } from './team.model';

@Pipe({
  name: 'rank',
  pure: false
})
export class RankPipe implements PipeTransform {

  transform(input: Team[], filterCondition) {
    var output: Team[] = [];
    switch(filterCondition){
      case "1":
        return input.filter(function(team){
          return team.rank === 1;
        });
      case "2":
        return input.filter(function(team){
          return team.rank === 2;
        });
      case "3":
        return input.filter(function(team){
          return team.rank === 3;
        });
      case "4":
        return input.filter(function(team){
          return team.rank === 4;
        });
      case "5":
        return input.filter(function(team){
          return team.rank === 5;
        });
      case "6":
        return input.filter(function(team){
          return team.rank === 6;
        });
      default:
        return input;
    }
  }

}
