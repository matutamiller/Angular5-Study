import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id": 1, "name": "Matie", "age": 32},
      {"id": 2, "name": "Dave", "age": 27},
      {"id": 3, "name": "Kika", "age": 36},
      {"id": 4, "name": "Frank", "age": 52},
      {"id": 5, "name": "Sue", "age": 43},
      {"id": 6, "name": "Mike", "age": 24},
      {"id": 7, "name": "Jim", "age": 33}
    ];
  }
}
