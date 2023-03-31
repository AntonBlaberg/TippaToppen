import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private token: string = environment.apiToken
  private baseUrl = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient) { }

  private getHeaders() {
    return new HttpHeaders({ 'Authorization': `Bearer ${this.token}` });
  }

  getTrack(trackId: string): Observable<any> {
    const url = `${this.baseUrl}/tracks/${trackId}`;
    return this.http.get(url, { headers: this.getHeaders() });
  }

  getPlaylist(playlistId: string): Observable<any> {
    const url = `${this.baseUrl}/playlists/${playlistId}/tracks`;
    return this.http.get(url, { headers: this.getHeaders(), params: { 'limit': '15' } });
  }
}
