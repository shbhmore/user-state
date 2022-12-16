import { Injectable }from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})

export class StateService{
    private allStatesUrl = 'http://localhost:8080/states';

    constructor(private httpClient:HttpClient) { }
    getStates(){
        return this.httpClient.get(this.allStatesUrl);
    }
}