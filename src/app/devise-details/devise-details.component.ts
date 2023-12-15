// src/app/devise-details/devise-details.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviseService } from '../devise.service';

@Component({
  selector: 'app-devise-details',
  templateUrl: './devise-details.component.html',
  styleUrls: ['./devise-details.component.css'],
})
export class DeviseDetailsComponent implements OnInit {
  devise: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private deviseService: DeviseService
  ) {}

  ngOnInit(): void {
    this.fetchDeviseDetails();
  }

  fetchDeviseDetails(): void {
    const id = this.route.snapshot.params['id'];
    this.deviseService.getDeviseDetails(id).subscribe(
      (data) => {
        this.devise = data;
      },
      (error) => {
        console.log('Error fetching devise details', error);
      }
    );
  }

  // Navigate back to the list page
  goToList() {
    this.router.navigate(['/devises']);
  }

}
