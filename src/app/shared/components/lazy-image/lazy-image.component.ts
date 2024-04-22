import { Component, Input, type OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.scss'],
})
export class LazyImageComponent implements OnInit {
  @Input()
  public imageUrl: string = '';
  @Input()
  public alt: string = '';

  public hasLoaded = false;

  ngOnInit(): void {}

  public onLoad() {
    this.hasLoaded = true;
  }
}
