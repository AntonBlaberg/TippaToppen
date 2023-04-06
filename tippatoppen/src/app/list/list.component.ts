import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as Papa from 'papaparse';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  public trackArray: Track[] = []
  constructor(private http: HttpClient) {
    this.http
    .get('assets/output.csv', {responseType: 'text'})
    .subscribe(
        data => {
          Papa.parse(data, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
              results.data.forEach((row: any) => {
                this.trackArray.push(new Track(row.Song, row.Artist, parseInt(row.Popularity, 10)))
              })
            }
          })
        },
        error => {
            console.log(error);
        }
    );

  }
  ngOnInit(): void {}
  
  values = ['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5', 'Value 6', 'Value 7', 'Value 8', 'Value 9', 'Value 10'];

}

export class Track{
  title: String
  artist: String
  popularity: number

  constructor(title: String, artist: String, popularity: number){
    this.title = title
    this.artist = artist
    this.popularity = popularity
  }
}