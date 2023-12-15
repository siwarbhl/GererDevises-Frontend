// src/app/convert-devise/convert-devise.component.ts

import { Component, OnInit } from '@angular/core';
import { DeviseService } from '../devise.service';

@Component({
  selector: 'app-convert-devise',
  templateUrl: './convertir-montant.component.html',
  styleUrls: ['./convertir-montant.component.css']
})
export class ConvertDeviseComponent implements OnInit {
  montant: number = 0;
  deviseCible: string = '';
  montantConverti: number = 0;
  devises: any[] = []; // Ajoutez cette ligne pour stocker la liste des devises

  constructor(private deviseService: DeviseService) { }

  ngOnInit(): void {
    // Chargez la liste des devises lors de l'initialisation du composant
    this.deviseService.getAllDevises().subscribe(
      data => {
        this.devises = data;
      },
      error => {
        console.error('Erreur lors du chargement des devises:', error);
      }
    );
  }

  convertirMontant(): void {
    this.deviseService.convertMontant(this.montant, this.deviseCible).subscribe(
      convertedAmount => {
        this.montantConverti = convertedAmount;
      },
      error => {
        console.error('Erreur lors de la conversion du montant:', error);
      }
    );
  }
}

