import { Component, OnInit, Input } from '@angular/core';
import { Request, Message, KeyPair, HttpRequestService } from '../../../shared';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'afa-request',
  templateUrl: './request.component.html',
  styleUrls: []
})
export class RequestComponent implements OnInit {

  @Input()
  public message: Message;

  public request: Request;

  public requestOrigin: Request;

  public myForm: FormGroup;

  public methodForm: FormControl;

  private formArrayHeaders: FormArray;

  constructor(private httpRequestService: HttpRequestService) { }

  ngOnInit() {
    this.request = this.message.request;
    this.createForm();
    this.formatBodyOnChange();
  }

  ngOnChanges() {
    this.request = this.message.request;
    this.requestOrigin = new Request(this.request.id, this.request.method, this.request.url, this.request.body, this.request.headers);
    if (this.myForm) {
      this.createForm();
    }
  }

  public onSubmit(): void {
    let id = this.request.id;
    this.request = this.myForm.value as Request;
    this.request.id = id;
    this.httpRequestService.createRequest(this.request).subscribe(response => {
      this.message.response = response;
    });
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
    this.methodForm = new FormControl(this.request.method, Validators.required);

    this.myForm = new FormGroup({
      'method': this.methodForm,
      'url': new FormControl(this.request.url, Validators.required),
      'body': new FormControl(this.request.body, Validators.required),
      'headers': this.formArrayHeaders
    });

  }

  private createFormHeaders() {
    this.formArrayHeaders = new FormArray([]);
    if (this.request.headers) {
      for (let header of this.request.headers) {
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
      catch (e) {
        // do nothing
      }
    });
  }

}
