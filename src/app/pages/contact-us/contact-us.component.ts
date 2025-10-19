import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit {
  contactUsForm!: FormGroup;
  submitted: boolean = false;
  isLoading: boolean = false;
  
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.contactUsForm = this.fb.group({
      FullName: new FormControl(null, [Validators.required]),
      Email: new FormControl(null, [Validators.required, Validators.email]),
      PhoneNumber: new FormControl(null, [Validators.required]),
      CompanyName: new FormControl(null, [Validators.required]),
      Message: new FormControl(null, [Validators.required]),
      AgreeTermCondition: new FormControl(false, [Validators.requiredTrue])
    })
  }

  get f() {
    return this.contactUsForm.controls;
  }

  save() {
    this.submitted = true;
    this.isLoading = true;
    if (this.contactUsForm.invalid) {
      this.isLoading = false;
      return;
    }
    let value = this.contactUsForm.value;
    this.isLoading = false;
    this.submitted = false;
    // this.http.post("Price/AddContactus", value).then((res: ResponseModel) => {
    //   if (res.ResponseBody) {
    //     Toast("Request submiited successfully");
    //     this.contactUsForm.reset();
    //     this.isLoading = false;
    //     this.submitted = false;
    //   }
    // }).catch(e => {
    //   this.isLoading = false;
    //   this.submitted = false;
    // })
  }

}
