import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  standalone: false,
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent implements OnInit{

  constructor( private countriesService: CountriesService ){}

  public countries: Country[]= [];
  public isLoading: boolean= false;

  public initialValue: string= "";

  ngOnInit(): void {
    this.countries= this.countriesService.cacheStore.byCapital.countries;
    this.initialValue= this.countriesService.cacheStore.byCapital.term;
  }



  public searchByCapital( term: string ) {
      this.isLoading= true;
      this.countriesService.searchByCapital( term ).subscribe( searchedCountries => {
        this.countries = searchedCountries;
        this.isLoading = false;
      } );
  }



}
