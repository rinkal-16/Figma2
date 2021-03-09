import {Component, OnInit} from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms'


@Component({
  selector: 'app-tree3',
  templateUrl: './tree3.component.html',
  styleUrls: ['./tree3.component.scss']
})
export class Tree3Component implements OnInit {

  title = 'Nested FormArray Example Add Form Fields Dynamically';

  empForm: FormGroup;
  isExpanded = true;


  constructor(private fb: FormBuilder) {

    this.empForm = this.fb.group({
      employees: this.fb.array([]) ,
    });
  }

  expand(): void {
    this.isExpanded = !this.isExpanded;
  }


  employees(): FormArray {
    return this.empForm.get('employees') as FormArray
  }


  newEmployee(): FormGroup {
    return this.fb.group({
      firstName: '',
      skills: this.fb.array([])
    });
  }


  // tslint:disable-next-line:typedef
  addEmployee() {
    console.log('Adding a employee');
    this.employees().push(this.newEmployee());
  }


  // tslint:disable-next-line:typedef
  removeEmployee(empIndex: number) {
    console.log(empIndex);
    this.employees().removeAt(empIndex);
  }


  employeeSkills(empIndex: number): FormArray {
    return this.employees().at(empIndex).get('skills') as FormArray
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
    });
  }

  // tslint:disable-next-line:typedef
  addEmployeeSkill(empIndex: number) {
    this.employeeSkills(empIndex).push(this.newSkill());
  }

  // tslint:disable-next-line:typedef
  removeEmployeeSkill(empIndex: number, skillIndex: number) {
    console.log(empIndex, skillIndex)
    this.employeeSkills(empIndex).removeAt(skillIndex);
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.empForm.value);
  }

  ngOnInit(): void {
  }


}


// tslint:disable-next-line:class-name
export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
