import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionCourseForm } from '../models/SubscriptionCourseForm';

@Component({
  selector: 'app-subscription-course',
  templateUrl: './subscription-course.component.html',
  styleUrls: ['./subscription-course.component.scss']
})
export class SubscriptionCourseComponent implements OnInit {

  subCourseForm = new SubscriptionCourseForm();

  listOptions = [
    { id: 0, name: "Carta d'Identità" },
    { id: 1, name: "Passaporto" },
    { id: 2, name: "Patente di guida" },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  validateSubCourse() {
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      event?.preventDefault();
      event?.stopPropagation();
    } else {
      this.router.navigate(['/']);
      console.log(this.subCourseForm);
    }
    form.classList.add('was-validated');
  }
}
