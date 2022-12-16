import { Injectable }from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StateComponent } from 'src/app/state/state.component';

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
        return this.httpClient.post(this.StatesUrl, state);
    }
}