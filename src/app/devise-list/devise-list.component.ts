// src/app/devise-list/devise-list.component.ts

import { Component, OnInit } from '@angular/core';
import { DeviseService } from '../devise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devise-list',
  templateUrl: './devise-list.component.html',
  styleUrls: ['./devise-list.component.css'],
})
export class DeviseListComponent implements OnInit {
  devises: any = [];


  constructor(private deviseService: DeviseService, private router: Router) {}

  ngOnInit(): void {
    this.loadDevises();
  }

  loadDevises(): void {
    this.deviseService.getAllDevises().subscribe(
      (data) => {
        this.devises = data;
      },
      (error) => {
        console.log('Error fetching devises', error);
      }
    );
  }

  addDevise(): void {
    this.router.navigate(['/addDevise']);
  }

  DeviseDetailsComponent(id: number): void {
    this.router.navigate(['/deviseDetails', id]);
  }

  editDevise(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  deleteDevise(id: number): void {
    // Confirm the deletion with the user
    if (confirm('Are you sure you want to delete this devise?')) {
      this.deviseService.deleteDevise(id).subscribe(
        () => {
          console.log('Devise deleted successfully.');
          // Reload the list of devises after deletion
          this.loadDevises();
        },
        (error) => {
          console.error('Error deleting devise', error);
        }
      );
    }
  }
  
}
