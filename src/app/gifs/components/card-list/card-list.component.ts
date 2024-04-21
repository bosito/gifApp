import { Component, Input, type OnInit } from '@angular/core';
import { IGif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  ngOnInit(): void {}

  @Input()
  public gifList: IGif[] = [];
}
