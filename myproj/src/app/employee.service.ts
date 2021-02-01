import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAll():Observable<any>
  {
    return this.http.get("http://192.168.2.164:8081/employee/getAll/1/12");
  }
  getById(id)
  {
    const url="http://192.168.2.164:8081/employee/getById";
    
    return this.http.get(`${url}/${id}`);
  }
  saveEmployee(req){
    return this.http.post("http://192.168.2.164:8081/employee/save",req);
  }
  updateEmployee(req){
    return this.http.post("http://192.168.2.164:8081/employee/save",req);
  }
  deleteEmployee(id){
    const url="http://192.168.2.164:8081//employee/delete";
    return this.http.delete(`${url}/${id}`);
  }
}
