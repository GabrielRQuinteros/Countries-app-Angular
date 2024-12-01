import { Component } from '@angular/core';
import { Country } from '../../interfaces/Country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  standalone: false,
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent {

  constructor( private countriesService: CountriesService ){}

  public countries: Country[]=[]

  public searchByCountry( term: string ) {
      console.log({term});
      this.countriesService.searchByName( term ).subscribe( searchedCountries => {
        this.countries = searchedCountries;
      } );
  }


}
