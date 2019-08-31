import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RostersPage } from './rosters.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: RostersPage,
        children: [
            {
                path: 'rosters',
                children: [
                    {
                        path: '',
                        loadChildren: './rosters.module#RostersPageModule'
                    },
                    {
                        path: ':rosterId',
                        loadChildren: './roster-detail/roster-detail.module#RosterDetailPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/rosters/tabs/rosters',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/rosters/tabs/rosters',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RostersRoutingModule { }
