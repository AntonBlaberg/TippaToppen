import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HeaderComponent } from './header/header.component';
import { RankTopSongsComponent } from './rank-top-songs/rank-top-songs.component';
import { PredictArtistsComponent } from './predict-artists/predict-artists.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeaderComponent,
    RankTopSongsComponent,
    PredictArtistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
