import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'app-by-region-page',
  standalone: false,
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {

  constructor( private countriesService: CountriesService ){}

  public countries: Country[]=[]

  public searchByRegion( term: string ) {
      console.log({term});
      this.countriesService.searchByRegion( term ).subscribe( searchedCountries => {
        this.countries = searchedCountries;
      } );
  }

}
