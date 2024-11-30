import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/Country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private suplierBaseURL: string = "https://restcountries.com/v3.1";

  constructor( private http: HttpClient ) { }


  private getCapitalURL( capital: string ) {
    return `${this.suplierBaseURL}/capital/${capital}`;
  }

  private getRegionURL( region: string ) {
    return `${this.suplierBaseURL}/region/${region}`;
  }

  private getNameURL( name: string ) {
    return `${this.suplierBaseURL}/name/${name}`;
  }


  /// DEFINICION DE PETICIONES ( NO LAS EJECUTA TODAVIA --> SE EJECUTAN AGREGANDO .suscribe() al observable que retornan )

  public searchByCapital ( capital: string ): Observable<Country[]> {
    return this.http.get<Country[]>( this.getCapitalURL( capital ) );
  }

  public searchByName ( name: string ) {
    return this.http.get<Country[]>( this.getNameURL( name ) );
  }

  public searchByRegion (region: string) {
    return this.http.get<Country[]>( this.getCapitalURL( region ) );
  }


}
