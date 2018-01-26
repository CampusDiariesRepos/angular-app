import { Component } from '@angular/core';
import { GetData } from './services/getdata.service';
import { stringify } from '@angular/core/src/util';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GetData]
})
export class AppComponent {

  constructor(private getda : GetData){}

  private title = 'app';
  private data = 'shiva';

  ongetdata(){
    this.getda.getdata().subscribe(
      (response:Response) => {
          console.log(response);
      });
    
  }

  senddata(){
    this.getda.senddata().subscribe(
      (response) => {
        console.log(response); 
      }
      
    );
    
  }

}
