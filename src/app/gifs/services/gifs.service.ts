import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private tagsHIstoryLocal: string[] = [];

  constructor() {}

  public get tagsHistory() {
    return [...this.tagsHIstoryLocal];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLocaleLowerCase();

    if (this.tagsHistory.includes(tag)) {
      //we deleted the last tag
      this.tagsHIstoryLocal = this.tagsHIstoryLocal.filter(
        (tagHistory) => tagHistory !== tag
      );
      //then we added the tag in front of our list
      this.tagsHIstoryLocal.unshift(tag);

      // we added a limit the items in our list
      this.tagsHIstoryLocal.splice(0, 10);
    }
  }

  public searchTag(tag: string) {
    if (!tag.length) return;

    this.organizeHistory(tag);
  }
}
