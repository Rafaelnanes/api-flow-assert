import { Component, OnInit, Input } from '@angular/core';
import { Request } from '../../model/index';

@Component({
  selector: 'afa-request',
  templateUrl: './request.component.html',
  styleUrls: []
})
export class RequestComponent implements OnInit {

  @Input()
  public request: Request;

  constructor() {
  }

  ngOnInit() {
  }

}
