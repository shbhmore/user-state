import { Injectable }from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})

export class StateService{
    private allStatesUrl = 'https://localhost:8080/states';

    constructor(private httpClient:HttpClient) { }
    getStates(){
        return this.httpClient.get(this.allStatesUrl);
    }
}