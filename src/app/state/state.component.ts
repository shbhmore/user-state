import { Component } from '@angular/core';
import { StateService } from 'src/services/StateService';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent {
  stateId:number=0;
  stateName:string='';

  

  constructor(private stateService:StateService){}

  setValue(){
    const state={
      stateId: this.stateId,
      stateName: this.stateName
    };
    console.log(state)
    this.stateService.addState(state)
    .subscribe(data=>{console.log(data)});
  }
}