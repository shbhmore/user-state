import { Injectable }from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})

export class StateService{
    private StatesUrl = 'http://localhost:8080/states';

    constructor(private httpClient:HttpClient) { }
    getStates(){
        return this.httpClient.get(this.StatesUrl);
    }
    addState(state: any){
        const header={'content-type':'application/json'}
        const body=JSON.stringify(state)
        console.log(body);
        return this.httpClient.post(this.StatesUrl,body,{'headers':header});
    }
}