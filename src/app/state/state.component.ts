import { Component } from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent {
  stateId:number=0;
  stateName:string='';

  state:any;

  setValue(){
    this.state={
      stateId:this.stateId,
     stateName:this.stateName
    }
    console.log(this.state)
}
}