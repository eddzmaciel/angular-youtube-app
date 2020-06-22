import { YoutubeResponse } from './../models/youtube.models';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl: string = 'https://www.googleapis.com/youtube/v3';
  private apiKey: string = 'AIzaSyAixRxmM8rdV23KsDxB4KM_Xa8XI4OgVaM';
  private channelId: string = 'UCiBwOVBljEjcsLUjwI274Xw';
  private nextPageToken: string = '';

  constructor(private http: HttpClient) {

  }

  getVideos() {
    const url = `${this.youtubeUrl}/playlists`;
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('key', this.apiKey)
      .set('channelId', this.channelId)
      .set('maxResults', '10');

    return this.http.get<YoutubeResponse>(url, { params }).pipe(
      map(resp => {
        //obtenemos el nextPageToken para cuando quieramos cargar la siguiente pagina con videos
        this.nextPageToken = resp.nextPageToken;
        return resp.items;
      }),
      //esto lo hacemos para mapear los items que vienen en la respuesta
      map(items => items.map(video => video.snippet))
    );

  }

}
