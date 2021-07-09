import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'pricing-modal',
  templateUrl: './pricing-modal.component.html',
  styleUrls: ['./pricing-modal.component.less']
})
export class PricingModalComponent implements OnInit {

  contactForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    category: [this.data.type]
  });

  get email() {
    return this.contactForm.controls["email"] as FormControl;
  }

  matcher = new ErrorStateMatcher();

  constructor(
    private matDialogRef: MatDialogRef<PricingModalComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: {type: string},
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
  }

}
