import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionOpenDayForm } from '../models/SubscriptionOpenDay';

@Component({
  selector: 'app-subscription-openday',
  templateUrl: './subscription-openday.component.html',
  styleUrls: ['./subscription-openday.component.scss']
})
export class SubscriptionOpendayComponent implements OnInit {

  subOpenDayForm = new SubscriptionOpenDayForm();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  validateSubOpenDay() {
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      event?.preventDefault();
      event?.stopPropagation();
    } else {
      this.router.navigate(['/']);
      console.log(this.subOpenDayForm);
    }
    form.classList.add('was-validated');
  }

}
