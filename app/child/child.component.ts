import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  menuItems: any[];

  @Output()
  out: EventEmitter<any> = new EventEmitter<any>();

  constructor() {    
  }

  increase(i) {
    this.menuItems[i].qty++;
    this.out.emit({ index: i, menuItem: this.menuItems[i] });
  }

  ngOnInit() {
  }

}
