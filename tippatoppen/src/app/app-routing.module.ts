import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RankTopSongsComponent } from './rank-top-songs/rank-top-songs.component';
import { PredictArtistsComponent } from './predict-artists/predict-artists.component';

const routes: Routes = [{ path: 'rankTopSongs', component: RankTopSongsComponent },
  { path: 'predictArtists', component: PredictArtistsComponent },
  // Add more routes for other subgames
  { path: '', redirectTo: '/rankTopSongs', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
