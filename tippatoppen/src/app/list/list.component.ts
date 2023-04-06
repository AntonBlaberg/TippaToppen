import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as Papa from 'papaparse';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  showScore: boolean = false
  score: number = 0;
  currentOrder: number[] = [];
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
              // sorting
              this.trackArray.sort((a, b) => b.popularity - a.popularity)
              this.trackArray.forEach((track,index) => {
                track.rank = index + 1
              })
              this.shuffle()
            }
          })
        },
        error => {
            console.log(error);
        }
    );

  }
  ngOnInit(): void {
    this.shuffle();
  }
  
  values = ['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5', 'Value 6', 'Value 7', 'Value 8', 'Value 9', 'Value 10'];

  shuffle(): void {
    for (let i = this.trackArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.trackArray[i], this.trackArray[j]] = [this.trackArray[j], this.trackArray[i]];
    }
  }

  calculateScore(): number {
    let score = 0;
    const maxScore = 1000;
    const totalTracks = this.trackArray.length;

    this.trackArray.forEach((track, index) => {
      const difference = Math.abs(track.rank - (index + 1));
      const trackScore = Math.max(0, (totalTracks - difference) / totalTracks);
      score += trackScore;
    });
    return Math.round((score / totalTracks) * maxScore)
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.trackArray, event.previousIndex, event.currentIndex);
    this.currentOrder = this.trackArray.map(track => track.rank);
  }

  onButtonClick(): void {
    this.score = this.calculateScore();
    this.showScore = true
  }
}

export class Track{
  title: String
  artist: String
  popularity: number
  rank: number

  constructor(title: String, artist: String, popularity: number){
    this.title = title
    this.artist = artist
    this.popularity = popularity
    this.rank = 0
  }
}

