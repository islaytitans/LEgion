import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'rosters', pathMatch: 'full' },
  {
    path: 'rosters',
    children: [
      {
        path: '',
        loadChildren: './rosters/rosters.module#RostersPageModule'
      },
      {
        path: ':rosterId',
        loadChildren: './rosters/roster-detail/roster-detail.module#RosterDetailPageModule'
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
