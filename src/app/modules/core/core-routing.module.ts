import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {
    MainComponent,
    PageNotFoundComponent
} from './components/index';

const appRoutes: Routes = [
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'execution',
        loadChildren: 'modules/execution/execution.module#ExecutionModule'
    },
    {
        path: 'flow',
        loadChildren: 'modules/flow/flow.module#FlowModule'
    },
    {
        path: 'collection',
        loadChildren: 'modules/collection/collection.module#CollectionModule'
    },
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [],
    declarations: []
})
export class CoreRoutingModule { }
