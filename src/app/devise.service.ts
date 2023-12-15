// src/app/devise.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeviseService {
  private baseUrl = 'http://localhost:8081/devises/';

  constructor(private http: HttpClient) {}

  getAllDevises(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }


getDeviseById(id: number): Observable<any> {
  return this.http.get<any>(`${this.baseUrl}${id}`);
}



  // Ajoutez cette méthode pour ajouter une devise
  addDevise(devise: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, devise);
  }

updateDevise(id: number, updatedDevise: any): Observable<any> {
  const url = `${this.baseUrl}${id}`;
  return this.http.put(url, updatedDevise);
}

  
  getDeviseDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${id}`);
  }

  deleteDevise(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}${id}`);
  }

  convertMontant(montant: number, deviseCible: string): Observable<number> {
    const url = `${this.baseUrl}convertirMontant?montant=${montant}&deviseCible=${deviseCible}`;
    return this.http.get<number>(url);
  }
  
}
