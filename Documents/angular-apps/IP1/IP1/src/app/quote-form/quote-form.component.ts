import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
name:string;
author:string;
quote:string;
date:Date = new Date(); 
@Output() emitQuote= new EventEmitter ()
newQuote: any;

  constructor() { }

  ngOnInit(): void {
  }
onSubmit() {
  console.log(this.date)
  this.newQuote = new Quote(this.name, this.author,this.quote,this.date);
  this.emitQuote.emit(this.newQuote)
}
}
