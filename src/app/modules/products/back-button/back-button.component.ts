import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {

  constructor( private _location: Location ) { }

  ngOnInit() {
  }

// ----------------------------------- Functions -------------------------------

  goBack() {
    this._location.back();
  }

}
