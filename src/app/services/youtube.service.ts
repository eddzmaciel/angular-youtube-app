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
  private playlistId: string = 'UUuaPTYj15JSkETGnEseaFFg';
  private nextPageToken: string = '';


  private channelID: string = 'UUuaPTYj15JSkETGnEseaFFg'

  constructor(private http: HttpClient) {

  }

  getVideos() {
    const url = `${this.youtubeUrl}/playlistItems`;
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '10')
      .set('playlistId', this.playlistId)
      .set('key', this.apiKey)
      .set('pageToken', this.nextPageToken);

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
