import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';


interface Categories {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  id: number;
   firstName: string;
   lastName: string;
   email: string;
   phone: string;
   category: string;
   procedure: string;
   date: string;
 }

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  categories: Categories[] = [
    {value: '1', viewValue: 'Nails'},
    {value: '2', viewValue: 'Hair style'},
    {value: '3', viewValue: 'Facial cleansing'},
  ];

  firstFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.firstFormGroup = this.firstBuildForm();
  }

  private firstBuildForm(): FormGroup {
    return this.formBuilder.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      category: new FormControl (this.categories[0], Validators.required),
      procedure: new FormControl('',Validators.required),
      date: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    console.log(this.firstFormGroup)
  }
}

