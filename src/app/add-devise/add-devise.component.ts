// src/app/add-devise/add-devise.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeviseService } from '../devise.service';

@Component({
  selector: 'app-add-devise',
  templateUrl: './add-devise.component.html',
  styleUrls: ['./add-devise.component.css']
})
export class AddDeviseComponent {

  devise = {
    code: '',
    symbole: '',
    taux: 0,
    montant: 0
  };

  constructor(private router: Router, private deviseService: DeviseService) { }

  onSubmit() {
    this.deviseService.addDevise(this.devise).subscribe(() => {
      this.router.navigate(['/devises']); // Redirige vers la page de liste des devises
    });
  }
}
