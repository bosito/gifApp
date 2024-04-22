import { Component, Input, type OnInit } from '@angular/core';
import { IGif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.scss'],
})
export class GifCardComponent implements OnInit {
  @Input()
  public gif!: IGif;

  public ngOnInit(): void {
    if (!this.gif) throw new Error('gif property is required');
  }
}
