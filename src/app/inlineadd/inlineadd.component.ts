import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../core/resource.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inlineadd',
  templateUrl: './inlineadd.component.html',
  styleUrls: ['./inlineadd.component.scss']
})
export class InlineaddComponent implements OnInit {
  inlineAddForm: FormGroup;

  noteFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(255),
  ]);

  constructor(public resources: ResourceService) {
    this.inlineAddForm = new FormGroup({
      note: this.noteFormControl
    });
  }

  ngOnInit() {
  }

  add(title: string) {

  }

}
