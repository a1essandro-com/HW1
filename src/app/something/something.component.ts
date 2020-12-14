import {AfterContentInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,} from '@angular/core';

@Component({
  selector: 'app-something',
  templateUrl: './something.component.html',
  styleUrls: ['./something.component.css']
})
export class SomethingComponent implements OnChanges {
  name: string;
  age: number;

  constructor() {
    this.name = this.user_name;
  }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
  }


 @Input() user_name: string = 'default';
 @Input() user_age: number = 0;

  set userAge(age: number){
  if (age<0){
  	this.user_age = 0;
  }
  else if (age>100){
  	this.user_age = 100;
  }
  else{
  this.user_age = age;
  }
  }


  get userAge(){
  return this.user_age;
  }

//  @Output() onChange = new EventEmitter<boolean>();
//  change(increased: boolean){
//  this.onChange.emit(increased)
//  }//
//
// ngOnInit(){
//  	console.log("on init")
//  }
//  ngOnChanges(changes: SimpleChanges){
//  	for (let propName in changes){
//  	let chng = changes [propName];
//  	let cur = JSON.stringify(currentValue);
//  	let prev = JSON.stringify(previousValue);
//  	}
//  	console.log(`${propName}: currentValue = ${cur}, previosValue = ${prev}`);
// }
//  ngAfterContentInit{
// 	console.log("after content init")
//}
//}
//
  anClicks = 0;
  multiplier = 1;
  pl(){
  	this.anClicks+=this.multiplier;
  }
  min(){
  	this.anClicks-=this.multiplier;
  }
}