
import { Component } from '@angular/core';
import { CardService } from './services/card.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Card } from './models/card';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  public cards$: Observable<Card[]>;

addCard(cardText: string) {
  this.cardService.createCard(new Card(cardText));
}

constructor(private cardService: CardService) {
  this.cards$ = this.cardService.getCardsList();
};