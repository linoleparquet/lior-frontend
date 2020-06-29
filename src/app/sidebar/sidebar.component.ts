import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    isSidebarLink: boolean
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', icon: 'nc-bank', isSidebarLink: true },
    { path: '/doctors', title: 'Doctors', icon: 'nc-single-02', isSidebarLink: true },
    { path: '/visits', title: 'Visits', icon: 'nc-chat-33', isSidebarLink: true },
    { path: '/icons', title: 'Icons', icon: 'nc-diamond', isSidebarLink: true },
    { path: '/notifications', title: 'Notifications', icon: 'nc-bell-55', isSidebarLink: true },
    { path: '/table', title: 'Table List', icon: 'nc-tile-56', isSidebarLink: true },
    { path: '/typography', title: 'Typography', icon: 'nc-caps-small', isSidebarLink: true },

];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem.isSidebarLink);
    }
}
