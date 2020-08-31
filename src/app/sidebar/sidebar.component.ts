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
    { path: '/settings', title: 'Settings', icon: 'nc-settings-gear-65', isSidebarLink: true },


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
