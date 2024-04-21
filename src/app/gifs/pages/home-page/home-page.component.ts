import { Component, type OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private gifService: GifsService) {}

  public ngOnInit(): void {}

  public get gifList() {
    return this.gifService.gifList;
  }
}
