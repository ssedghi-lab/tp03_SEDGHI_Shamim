import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Produit } from '../app/models/produit';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MonserviceService {
  private produitsData: Produit[] = [
    { id: 1, nom: "Produit harry", prix: 50, disponible: true },
    { id: 2, nom: "Produit oz", prix: 100, disponible: false },
    { id: 3, nom: "Produit neige", prix: 150, disponible: true }
  ];
  private produitSubject: BehaviorSubject<Produit[]> = new BehaviorSubject<Produit[]>([]);
  public produits$: Observable<Produit[]> = this.produitSubject.asObservable();

  constructor() {}
  public filterProduits(name: string = ''): void {
    const normalize = (str: string) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    this.produits$.pipe(
      map(produits => produits.filter(produit => produit.nom.toLowerCase().includes(normalize(name)))),
    ).subscribe(filteredProduits => {
      this.produitSubject.next(filteredProduits);
    });
  }
  public getProduits(name: string = ''): void {
    const normalize = (str: string) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const filteredProduits = this.produitsData.filter(produit =>
      normalize(produit.nom).includes(normalize(name))
    );
    this.produitSubject.next(filteredProduits);
  }
}