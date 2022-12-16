import { Component } from '@angular/core';
import { StateService } from 'src/services/StateService';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  states:any;
  
  constructor(private stateService:StateService){ }

  ngOnInit(){
    this.stateService.getStates()
    .subscribe(response=>{this.states=response})
  }

}
