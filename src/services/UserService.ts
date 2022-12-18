import {Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { __param } from 'tslib';
import { useParams } from 'react-router-dom';

@Injectable({
    providedIn:'root'
})

export class UserService{
    
    private userUrl="http://localhost:8080/users"
    private params= new HttpParams();
    

    constructor(private httpClient:HttpClient){}

    addUser(user:any){
        return this.httpClient.post(this.userUrl,JSON.stringify(user),{'headers':{"content-type":"application/json"}});
    }

    showUsers(state:any) {
        this.params=new HttpParams();
        this.params=this.params.append("state_id",state.stateId);
        return this.httpClient.get(this.userUrl+"/bystate", {params: this.params});
    }    

}