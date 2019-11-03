import { Component, OnInit, Input, ViewChild, OnChanges, EventEmitter } from '@angular/core';
import { Request } from '../../model';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { KeyPair } from '../../../shared';


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
    const formGroup = this.createFormGroupHeader(new KeyPair('', ''));
    this.formArrayHeaders.push(formGroup);
  }

  public onRemoveHeader(index: number): void {
    this.formArrayHeaders.removeAt(index);
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
        let formGroup = this.createFormGroupHeader(header);
        this.formArrayHeaders.push(formGroup);
      }
    }
    return this.formArrayHeaders;
  }

  private createFormGroupHeader(header: KeyPair) {
    return new FormGroup({
      'key': new FormControl(header.key, Validators.required),
      'value': new FormControl(header.value, Validators.required)
    });
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
