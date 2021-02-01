import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  profile: any;
  resData:any;
  empID:any;
  creText:Boolean=true;
  creText1:Boolean=false;
  upButton:Boolean=false;
  saButton:Boolean=true;
  pages: any = 5

  profileForm = this.fb.group({
    name: ['', Validators.required],
    salary: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    city: ['', Validators.required],
    phone: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^[6-9]\d{9}$/)]]
  });
  constructor(private fb: FormBuilder, private ser: EmployeeService, private route: ActivatedRoute, private _router: Router) { }

  ngOnInit():void {
    this.getAllData();

  }

  onSave(e) {
    const req = {
      "name": e.name,
      "salary": e.salary,
      "city": e.city,
      "phone": e.phone.toString()
    }
    this.ser.saveEmployee(req).subscribe(res => {
      console.log(res, 'ddd');
      this.getAllData();
    })
    this.profileForm.reset();
  }
  getAllData(){
    this.ser.getAll().subscribe(response=>{
      this.resData=response.content;
      console.log(this.resData,"respgetall");
    })
  }

  editData(d){
    this.upButton=true;
    this.saButton=false;
    this.creText=false;
    this.creText1=true;
    this.empID=d.id;
    console.log(d)
    this.ser.getById(d.id).subscribe(res=>{
      console.log(res,"Id vakskafb");  
    });

    this.profileForm.patchValue({
          name: d.name,
          salary: d.salary,
          city: d.city,
          phone: d.phone
        });
        console.log(this.profileForm.value,"ufhafsaf")
  }


  onUpdate(){
    let reqobj={
      id:this.empID,...this.profileForm.value
    }
    this.ser.saveEmployee(reqobj).subscribe(res=>{
      this.getAllData()
     });
    this.profileForm.reset();
   }
   onDelete(d){
     console.log(d,"fsjkfjksfk")
     this.ser.deleteEmployee(d.id).subscribe((res)=>{
      this.getAllData();
     },(error)=>{
      console.log(error);
     })
   }
   

  




}