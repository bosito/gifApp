import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { IGif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private localStorageKey: string = 'tagHistory';
  private tagsHIstoryLocal: string[] = [];
  private apiKey: string = 'rQG2rlNQgv5xKA2uDYPtpeStCNh3o9AS';
  public gifList: IGif[] = [];

  constructor(private http: HttpClient) {
    this.getLocalStorage();
  }

  public get tagsHistory() {
    return [...this.tagsHIstoryLocal];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLocaleLowerCase();

    if (this.tagsHIstoryLocal.includes(tag)) {
      //we deleted the last tag
      this.tagsHIstoryLocal = this.tagsHIstoryLocal.filter(
        (tagHistory) => tagHistory !== tag
      );
    }

    //then we added the tag in front of our list
    this.tagsHIstoryLocal.unshift(tag);

    // we added a limit the items in our list
    this.tagsHIstoryLocal = this.tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage() {
    localStorage.setItem(
      this.localStorageKey,
      JSON.stringify(this.tagsHIstoryLocal)
    );
  }

  private getLocalStorage(): void {
    const tagHistoryLocalStorage = localStorage.getItem(this.localStorageKey);

    if (!tagHistoryLocalStorage) return;
    const tagHistoryParse: string[] = JSON.parse(tagHistoryLocalStorage);

    this.tagsHIstoryLocal = tagHistoryParse;
  }

  public searchTag(tag: string) {
    if (!tag.length) return;

    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', '10');

    this.http
      .get<SearchResponse>(`https://api.giphy.com/v1/gifs/search`, { params })
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          this.gifList = response.data;
          console.log('this.gifService.gifList -->', this.gifList);
        },
      });
  }
}
