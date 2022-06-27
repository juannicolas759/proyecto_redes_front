import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-form-params',
  templateUrl: './form-params.component.html',
  styleUrls: ['./form-params.component.css']
})
export class FormParamsComponent implements OnInit {

  initialData: FormGroup

  constructor(private fb: FormBuilder, private router: Router,
    //private service: FormServiceService
    ) {
    this.initialData = this.fb.group({
      time: ['', Validators.required],
      hosts: ['', Validators.required],
      trasmitterNumber: ['', Validators.required],
      delay: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  add() {
    const datas_form: any = {
      time: this.initialData.value.time,
      hosts: this.initialData.value.hosts,
      trasmitterNumber: this.initialData.value.trasmitterNumber,
      delay: this.initialData.value.delay,

    }
    //  crear servicio en carpeta services y pasar por parametro al back
    //this.service.sendTime(datas_form.time);
    this.router.navigate(['/table-results']);
  }


}
