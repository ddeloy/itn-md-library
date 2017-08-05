import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-layout',
  styles: [`:host /deep/ .mat-sidenav-content {padding: 0;} .mat-sidenav-container {z-index: 1000}`],
  styleUrls: ['./auth-layout.component.scss'],
  templateUrl: './auth-layout.component.html'
})
export class AuthLayoutComponent {

  @Input() sideWidth = 'sm';
  navs = [
    {url: '', content: 'Home'},
    {url: 'basic', content: 'Basic'},
    {url: 'secondary', content: 'Secondary'},
    {url: 'wijmo', content: 'Wijmo'}
  ];


}


