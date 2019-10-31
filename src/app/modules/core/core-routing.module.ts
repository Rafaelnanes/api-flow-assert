import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {
    MainComponent,
    PageNotFoundComponent,
    ExecutionComponent,
    FlowComponent,
    CollectionComponent
} from './components/index';

const appRoutes: Routes = [
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'execution',
        component: ExecutionComponent
    },
    {
        path: 'flow',
        component: FlowComponent
    },
    {
        path: 'collection',
        component: CollectionComponent
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
