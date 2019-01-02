import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-link',
  templateUrl: './user-link.component.html',
  styleUrls: ['./user-link.component.scss']
})
export class UserLinkComponent implements OnInit {

  user = {
    name: 'Вася',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, quae!icing elit. Dicta, quaeicing elit. Dicta, quae'
  };

  constructor() { }

  ngOnInit() {
  }

}
