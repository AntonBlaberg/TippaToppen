import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

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
            let csvToRowArray = data.split("\n");
            for (let index = 1; index < csvToRowArray.length - 1; index++) {
              let row = csvToRowArray[index].split(",");
              this.trackArray.push(new Track(row[0], row[1],parseInt( row[2], 10)));
            }
            console.log(this.trackArray);
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