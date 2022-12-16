import { Component } from '@angular/core';
import { StateService } from 'src/services/StateService';
import { UserService } from 'src/services/UserService';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  stateId:number=0;
  stateName:string='';
  states:any=null;
  userId:number=0;
  userName:string='';
  state:any={
    stateId:this.stateId,
    stateName:this.stateName
  };
  
  constructor(private stateService:StateService, private userService:UserService){ }

  ngOnInit(){
    this.stateService.getStates()
    .subscribe(response=>{this.states=response})
  }


  saveUser(){
    const user={
      userId:this.userId,
      userName:this.userName,
      state:this.state
    }
    this.userService.addUser(user)
    .subscribe(data=>{data});
  }

}
