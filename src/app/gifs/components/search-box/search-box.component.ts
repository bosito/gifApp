import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
  type OnInit,
} from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent implements OnInit {
  ngOnInit(): void {}

  @ViewChild('txtTagInput')
  public txtTagInput!: ElementRef<HTMLInputElement>;

  public searchTag() {
    const newTag = this.txtTagInput.nativeElement.value;
    console.log('newTag --->', newTag);
  }
}
