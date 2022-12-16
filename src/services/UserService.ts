import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})

export class UserService{
    private userUrl="http://localhost:8080/users"

    constructor(private httpClient:HttpClient){}

    addUser(user:any){
        return this.httpClient.post(this.userUrl,JSON.stringify(user),{'headers':{"content-type":"application/json"}});
    }

}