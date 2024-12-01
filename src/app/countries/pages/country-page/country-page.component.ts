import { Component, OnInit, resource } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/Country';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  standalone: false,
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit {

  public country: Country|null=null;


  /// INYECCION DE SERVICIOS
  constructor(
              private activatedRoute: ActivatedRoute,
              private countriesService: CountriesService,
              private router: Router
             ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe( switchMap(  ( {id}) =>  this.countriesService.searchByCode(id) ) )
    .subscribe( country => {

      if( ! country ) return this.router.navigateByUrl("");

      return this.country = country;
    } );



  }


}

