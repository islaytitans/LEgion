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
  { path: 'units', loadChildren: './units/units.module#UnitsPageModule' },
  { path: 'unit-detail', loadChildren: './units/unit-detail/unit-detail.module#UnitDetailPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
