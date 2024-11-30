import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'app-by-capital-page',
  standalone: false,
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  constructor( private countriesService: CountriesService ){}

  public countries: Country[]=[]

  public searchByCapital( term: string ) {
      console.log("Desde Capital Page");
      console.log({term});
      this.countriesService.searchByCapital( term ).subscribe( searchedCountries => {
        this.countries = searchedCountries;
      } );
  }



}
