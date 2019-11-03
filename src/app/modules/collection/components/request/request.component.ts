import { Component, OnInit, Input, ViewChild, OnChanges, EventEmitter } from '@angular/core';
import { Request } from '../../model/index';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'afa-request',
  templateUrl: './request.component.html',
  styleUrls: []
})
export class RequestComponent implements OnInit {

  @Input()
  public request: Request;

  public requestOrigin: Request;

  public myForm: FormGroup;

  private formArrayHeaders: FormArray

  constructor() { }

  ngOnInit() {
    this.createForm();
    this.formatBodyOnChange();
  }

  ngOnChanges() {
    this.requestOrigin = new Request(this.request.id, this.request.method, this.request.url, this.request.body, this.request.header);
    if (this.myForm) {
      this.createForm();
    }
  }

  public onSubmit(): void {
    console.log(this.myForm);
  }

  public onAddHeader(): void {
    const control = new FormControl(null, Validators.required);
    this.formArrayHeaders.push(control);
  }

  private createForm() {
    this.createFormHeaders();

    this.myForm = new FormGroup({
      'method': new FormControl(this.request.method, Validators.required),
      'url': new FormControl(this.request.url, Validators.required),
      'body': new FormControl(this.request.body, Validators.required),
      'headers': this.formArrayHeaders
    });

  }

  private createFormHeaders() {
    this.formArrayHeaders = new FormArray([]);
    if (this.request.header) {
      for (let header of this.request.header) {
        this.formArrayHeaders.push(new FormControl(header, Validators.required));
      }
    }
    return this.formArrayHeaders;
  }

  private formatBodyOnChange() {
    this.myForm.get('body').valueChanges.subscribe(value => {
      try {
        let formattedValue = JSON.stringify(JSON.parse(value, null), null, 2);
        if (formattedValue != value) {
          this.myForm.get('body').setValue(formattedValue);
        }
      }
      catch (e) { }
    });
  }

}
