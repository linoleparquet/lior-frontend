import { Component, OnInit } from "@angular/core";

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Dashboard", icon: "nc-bank", class: "" },
  { path: "/doctors", title: "Doctors", icon: "nc-single-02", class: "" },
  { path: "/visits", title: "Visits", icon: "nc-chat-33", class: "" },
  {
    path: "/establishments",
    title: "Establishments",
    icon: "nc-bank",
    class: "",
  },
  {
    path: "/settings",
    title: "Settings",
    icon: "nc-settings-gear-65",
    class: "",
  },
];

@Component({
  moduleId: module.id,
  selector: "sidebar-cmp",
  templateUrl: "sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  ngOnInit() {
    this.menuItems = ROUTES;
  }
}
