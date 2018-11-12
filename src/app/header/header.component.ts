import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Input() selectedPage: string;

  @Output() pageChangeEvent = new EventEmitter<string>();

  title = 'FX Smart Trade';

  pages = [
    'home',
    'about',
    'contact',
    'donate',
    'login',
    'signup'
  ];

  constructor(){}

  ngOnInit() {}

  goTo(page) {

    console.log('page ', page);

    this.selectedPage = page;

    this.pageChangeEvent.emit(this.selectedPage);
  }

}
