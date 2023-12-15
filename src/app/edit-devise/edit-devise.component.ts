// src/app/edit-devise/edit-devise.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviseService } from '../devise.service';

@Component({
  selector: 'app-edit-devise',
  templateUrl: './edit-devise.component.html',
  styleUrls: ['./edit-devise.component.css']
})
export class EditDeviseComponent implements OnInit {

  devise = {
    id: 0,
    code: '',
    symbole: '',
    taux: 0,
    montant: 0
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private deviseService: DeviseService
  ) { }

  ngOnInit(): void {
    this.fetchDeviseDetails();
  }


fetchDeviseDetails(): void {
  const idFromRoute = this.route.snapshot.paramMap.get('id');

  // Check if idFromRoute is not null and is a numeric value
  if (idFromRoute !== null && !isNaN(+idFromRoute)) {
    const id = +idFromRoute;

    this.deviseService.getDeviseById(id).subscribe(devise => {
      this.devise = devise;
    });
  }
}


  onSubmit(): void {
    this.deviseService.updateDevise(this.devise.id, this.devise).subscribe(
      () => {
        this.router.navigate(['/devises']); // Redirect to the list of devises after updating
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du devis:', error);
      }
    );
  }

  retourListeDevises(): void {
    this.router.navigate(['/devises']);
  }
  
}
