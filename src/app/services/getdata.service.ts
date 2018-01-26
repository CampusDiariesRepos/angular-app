import { Injectable } from "@angular/core";
import { Http,Headers } from "@angular/http";
import { HttpClient } from "selenium-webdriver/http";

 

@Injectable()
export class GetData{

    constructor(private http: Http){}
    

    headers = new Headers({'content-Type':'application/json'});
  
    private mydata = {
        name: 'Shiva'
    }

    senddata(){
        // return this.http.post('http://campusdiariesapi.azurewebsites.net/login/',this.mydata,{headers :this.headers});
        return this.http.post('http://campusdiariesapi.azurewebsites.net/login',this.mydata,{headers:this.headers});
    }
   
    getdata(){
        return this.http.get('http://campusdiariesapi.azurewebsites.net/api');
    }
}