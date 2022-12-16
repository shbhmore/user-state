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

  state:any={
    stateId: this.stateId,
    stateName: this.stateName
  };

  constructor(private stateService:StateService){}

  setValue(){
    this.state={
      stateId: this.stateId,
      stateName: this.stateName
    };
    this.stateService.addState(this.state)
    .subscribe((data)=>{data});
  }
}