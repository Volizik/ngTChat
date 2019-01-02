import { Component, OnInit } from '@angular/core';
import {ITab} from "../../app.interface";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  tabs: ITab[] = [
    {name: 'Online'},
    {name: 'All'}
  ];
  selectedTab = this.tabs[0];

  constructor() { }

  ngOnInit() {
  }

  tabClickHandler(tab: ITab) {
    this.selectedTab = tab
  }

}
