import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private gifsService: GifsService) {}

  public get tagsHistory() {
    return this.gifsService.tagsHistory;
  }
}
