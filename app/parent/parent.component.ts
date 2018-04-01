import { Component, OnInit } from '@angular/core';
import { ChildComponent } from './../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  menuItems: any[];

  constructor() {
    this.menuItems = [{ name: 'Tea', qty: 0 }, { name: 'Coffee', qty: 0 }]
  }

  increase(i){
    this.menuItems[i].qty++;
  }

  getUpdatedMenuItem(event){
    this.menuItems[event.index] = event.menuItem;
  }

  ngOnInit() {
  }

}
