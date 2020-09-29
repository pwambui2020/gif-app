import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quote("Life", "Elizabeth Gilbert", "Embrace the glorious mess that you are.", new Date(2020, 9, 12)),
    new Quote("Friendship", "Posh Bobo", "If you lost, please find me. I got you", new Date(2020, 9, 2)),
    new Quote("Happiness", "Mark Twain", "Never regret anything that made you smile.", new Date(2020, 9, 1)),
    new Quote("Work", "Walt Disney", "Whatever you do, do it well", new Date(2020, 9, 10)),
    new Quote("Success", "Johnny Depp", "One day the people that don’t even believe in you will tell everyone how they met you.", new Date(2020, 9, 12)),
    new Quote("Doubt", " Drake", "Never let your emotions overpower your intelligence", new Date(2020, 9, 6)),
    new Quote("Life", "Eminem", "I have nothing to lose but something to gain.", new Date(2020, 9, 7)),
    new Quote("Love", "Thomas Sheldon", "Ooh, there is a woman. A woman ... ", new Date(2020, 9, 12))
  ]

  addQuote(chosenQuote) {
    this.quotes.push(chosenQuote)
  }
  upvote(i) {
    this.quotes[i].upvotes++;
  }
  downvote(i) {
    this.quotes[i].downvotes++;
  }
  delQuote(i) {
    this.quotes.splice(i, 1)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
