import { Component, OnInit } from '@angular/core';
import { SubscriptionCourseForm } from '../models/SubcriptionCourseForm';

@Component({
  selector: 'app-subscription-course',
  templateUrl: './subscription-course.component.html',
  styleUrls: ['./subscription-course.component.scss']
})
export class SubscriptionCourseComponent implements OnInit {

  subForm = new SubscriptionCourseForm();

  constructor() { }

  validate() {
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      event?.preventDefault();
      event?.stopPropagation();
    }
    form.classList.add('was-validated');
  }

  ngOnInit(): void {
    
  }

}
