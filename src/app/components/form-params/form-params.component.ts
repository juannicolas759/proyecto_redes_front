import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-params',
  templateUrl: './form-params.component.html',
  styleUrls: ['./form-params.component.css']
})
export class FormParamsComponent implements OnInit {

  initialData: FormGroup

  constructor(private fb: FormBuilder, private router: Router) {
    this.initialData = this.fb.group({
      hosts: ['', Validators.required],
      trasnmitterNumber: ['', Validators.required],
      delay: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  add() {
    const datas: any = {
      hosts: this.initialData.value.hosts,
      trasnmitterNumber: this.initialData.value.trasnmitterNumber,
      delay: this.initialData.value.delay,
     
    }
    //  crear servicio en carpeta services y pasar por parametro al back
    this.router.navigate(['/table-results']);
  }

}
