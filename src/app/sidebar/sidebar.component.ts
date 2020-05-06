import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', icon: 'nc-bank', class: '' },
    { path: '/doctors', title: 'Doctors', icon: 'nc-single-02', class: '' },
    { path: '/visits', title: 'Visits', icon: 'nc-chat-33', class: '' },
    { path: '/icons', title: 'Icons', icon: 'nc-diamond', class: '' },
    { path: '/notifications', title: 'Notifications', icon: 'nc-bell-55', class: '' },
    { path: '/table', title: 'Table List', icon: 'nc-tile-56', class: '' },
    { path: '/typography', title: 'Typography', icon: 'nc-caps-small', class: '' },
    { path: '/test', title: 'Test', icon: '', class: '' }

];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
