import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
  type OnInit,
} from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private gifsService: GifsService) {}

  @ViewChild('txtTagInput')
  public txtTagInput!: ElementRef<HTMLInputElement>;

  public searchTag() {
    const newTag: string = this.txtTagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.txtTagInput.nativeElement.value = '';
  }
}
