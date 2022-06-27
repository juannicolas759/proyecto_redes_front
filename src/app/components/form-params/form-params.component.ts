import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormServiceService } from 'app/services/form-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-params',
  templateUrl: './form-params.component.html',
  styleUrls: ['./form-params.component.css']
})
export class FormParamsComponent implements OnInit {

  initialData: FormGroup

  constructor(private fb: FormBuilder, private router: Router,
    private _formService: FormServiceService,
    private toastr: ToastrService,
    ) {
    this.initialData = this.fb.group({
      time: ['', Validators.required],
      hosts: ['', Validators.required],
      average: ['', Validators.required],
      length: ['', Validators.required],
      speed: ['', Validators.required],
      distance: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  verifyForm(){
    return (this.initialData.value.time === '' ||
      this.initialData.value.hosts === '' ||
      this.initialData.value.average === '' ||
      this.initialData.value.length === '' ||
      this.initialData.value.speed === '' ||
      this.initialData.value.distance === '')
  }

  add() {
    if(this.verifyForm()){
      this.toastr.error("Todos los campos son obligatorios", 'Error')
    }else{
      const datas_form: any = {
        time: this.initialData.value.time,
        hosts: this.initialData.value.hosts,
        average: this.initialData.value.average,
        length: this.initialData.value.length,
        speed: this.initialData.value.speed,
        distance: this.initialData.value.distance
      }
      this._formService.sendInitParams(datas_form)
      this._formService.sendTime(datas_form);
      this.router.navigate(['/table-results']);
    }
  }
}
