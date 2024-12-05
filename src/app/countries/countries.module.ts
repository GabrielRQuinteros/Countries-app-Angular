import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountiesRoutingModule } from './countries-routing.module';

import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { SharedModule } from '../shared/shared.module';
import { provideHttpClient } from '@angular/common/http';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CacheStoreInterfaceTsComponent } from './interfaces/cache-store.interface.ts/cache-store.interface.ts.component';



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    CountryTableComponent,
    CacheStoreInterfaceTsComponent
  ],
  imports: [
    CommonModule,
    CountiesRoutingModule,
    SharedModule
  ],
})
export class CountriesModule { }
