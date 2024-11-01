import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MonserviceService } from '../../monservice.service';
import { Produit } from '../../models/produit';
import { CommonModule } from '@angular/common';
import { ProductSearchComponent } from "../../product-search/product-search/product-search.component";

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [CommonModule, ProductSearchComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  produits?:  Observable<Produit[]>;
  searchTerm: string = '';

  constructor(private monserviceService: MonserviceService) {
    this.produits = this.monserviceService.produits$;
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.monserviceService.getProduits(this.searchTerm);
  }

  onSearchChange(searchValue: string): void {
    this.searchTerm = searchValue;
    this.loadProducts();
  }
}
