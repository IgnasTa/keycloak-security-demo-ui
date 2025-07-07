import { Component, inject  } from '@angular/core';
import {RouterLink } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/employee';
import { CommonModule } from '@angular/common';
import {HasRolesDirective} from 'keycloak-angular';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-homepage',
    standalone: true,

  imports: [
    HasRolesDirective,
    CommonModule
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  employees: Employee[] = [];
  roles: string[] | undefined;
  dataLoaded = false;
  private employeeService = inject(EmployeeService); 
  private readonly keycloak = inject(Keycloak);

  constructor(){
    this.roles = this.keycloak.realmAccess?.roles;
  }

  loadData(): void {
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        this.employees = data;
        this.dataLoaded = true;
      },
      error: (err) => {
        console.error('Error loading employees', err);
      }
    });
  }

  delete(id: number): void {
  this.employeeService.deleteEmployee(id).subscribe({
    next: () => {
      this.employees = this.employees.filter(emp => emp.id !== id);
    },
    error: (err) => {
      console.error('Error deleting employee:', err);
    }
  });
}
async logout(): Promise<void> {
    this.keycloak.logout();
}
}
