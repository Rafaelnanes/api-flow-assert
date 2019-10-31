import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent, PageNotFoundComponent } from './components/index';

const appRoutes: Routes = [
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'execution',
        component: MainComponent
    },
    {
        path: 'flow',
        component: MainComponent
    },
    {
        path: 'collection',
        component: MainComponent
    },
    {
        path: 'request',
        component: MainComponent
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
