import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
// ----------------------------------- Properties ------------------------------

  @Output() submittedSuccess: EventEmitter<any> = new EventEmitter<any>();

  formData!: FormGroup;
  creditCardPattern = /^[0-9]{16}$/g;

// -----------------------------------------------------------------------------

  constructor( private route: Router ) { }

  ngOnInit() {
    this.formData = new FormGroup({
      firstName: new FormControl( '', [ Validators.required, Validators.minLength(3) ]),
      adress: new FormControl( '', [ Validators.required, Validators.minLength(6) ]),
      creditCard: new FormControl( '', [ Validators.required, Validators.pattern(this.creditCardPattern) ]),
    })
  }

// ----------------------------------- Functions -------------------------------

  onSubmit() {
    if( this.formData.valid ) {
      this.route.navigateByUrl('/success');
      this.submittedSuccess.emit(' Submitted Success ');
    }
  }

}
