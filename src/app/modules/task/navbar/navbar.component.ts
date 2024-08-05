import { Component, OnInit } from '@angular/core';
import { NAV_LIST } from 'src/app/constant/app-constant';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navList = NAV_LIST;

  constructor() {}

  ngOnInit(): void {}
}
