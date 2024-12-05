import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  standalone: false,
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  constructor( private countriesService: CountriesService ){}

  public countries: Country[]= [];
  public isLoading: boolean= false;

  public searchByCapital( term: string ) {
      this.isLoading= true;
      console.log("Desde Capital Page");
      console.log({term});
      this.countriesService.searchByCapital( term ).subscribe( searchedCountries => {
        this.countries = searchedCountries;
        this.isLoading = false;
      } );
  }



}
