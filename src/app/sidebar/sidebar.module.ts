import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { NavigationArrowsComponent } from 'app/components/navigation-arrows/navigation-arrows.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        SidebarComponent,
        NavigationArrowsComponent
    ],
    exports: [SidebarComponent]
})

export class SidebarModule { }
