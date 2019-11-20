import { Component, OnInit } from '@angular/core';
import { AssertStrategy, getAllStrategies, Assert } from '../../../model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'afa-assert',
  templateUrl: './assert.component.html',
  styleUrls: []
})
export class AssertComponent implements OnInit {

  public assertStrategies: AssertStrategy[] = getAllStrategies()
  public assertStrategySelected: AssertStrategy = AssertStrategy.JSON;
  public myForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      'status': new FormControl(200, Validators.required),
      'assertStrategy': new FormControl(this.assertStrategySelected, Validators.required),
      'body': new FormControl('', Validators.required),
      'fields': new FormControl('', Validators.required)
    });
  }

}
