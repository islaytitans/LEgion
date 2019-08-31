import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitsPage } from './units.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: UnitsPage,
        children: [
            {
                path: 'units',
                children: [
                    {
                        path: '',
                        loadChildren: './units/units.module#UnitsPageModule'
                    },
                    {
                        path: ':unitId',
                        loadChildren: './units/unit-detail/unit-detail.module#UnitDetailPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/units/tabs/units',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/units/tabs/units',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UnitsRoutingModule { }