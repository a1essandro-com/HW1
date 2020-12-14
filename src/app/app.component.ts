import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;		
  name = 'Александр';
  age = 25;
  change_name(){
  	if (this.name === 'Александр'){
  		this.name = 'Дмитрий';
  	}
  	else{
  		this.name = 'Александр';
  	}
  }
  clicks: number = 0;
  onChanged(increased: boolean) {
  	if (increased === true){
  		this.clicks++;
  	}
	else (increased === false); {
		this.clicks--;
	}
  }
}


