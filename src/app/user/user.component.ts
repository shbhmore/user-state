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
  state={
    stateId:this.stateId,
    stateName:this.stateName
  };
  users:any=null;
  currentState:any;
  userServiceCall:any;
  stateServiceCall:any;
  message:any;
  constructor(private stateService:StateService, private userService:UserService){ }

  ngOnInit(){ 
    this.stateService.getStates()
    .subscribe(response=>{this.states=response});
   }


  saveUser(){
    
    

    this.states.forEach((element: { stateId: number; stateName: string;}) => {
      console.log(this.state.stateId+":"+element.stateId);
      if(element.stateId==this.state.stateId){
        this.currentState=this.state;
      }
    });
    console.log(this.currentState);

    const user={
      userId:this.userId,
      userName:this.userName,
      state:this.currentState
    }
    this.userService.addUser(user)
    .subscribe(data=>{data});
  }

  showUsers(){
    
    console.log("stateId:"+this.state.stateId);
    this.userService.showUsers(this.state)
    .subscribe(response=>{this.users=response});
  }

}
