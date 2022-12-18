import { Injectable }from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})

export class StateService{
    private StatesUrl = 'http://localhost:8080/states';

    header={'content-type':'application/json'};
    

    constructor(private httpClient:HttpClient) { }
    getStates(){
        return this.httpClient.get(this.StatesUrl);
    }
    addState(state: any){
        const body=JSON.stringify(state)
        console.log(body);
        return this.httpClient.post(this.StatesUrl,body,{'headers':this.header});
    }
    updateState(state:any){
        return this.httpClient.post(this.StatesUrl,JSON.stringify(state),{'headers':this.header});
    }
}