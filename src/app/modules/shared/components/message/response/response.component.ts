import { Component, OnInit, Input } from '@angular/core';
import { Response } from '../../../';

@Component({
  selector: 'afa-response',
  templateUrl: './response.component.html',
  styleUrls: []
})
export class ResponseComponent implements OnInit {

  @Input()
  public response: Response;

  constructor() { }

  ngOnInit() {
  }

}
