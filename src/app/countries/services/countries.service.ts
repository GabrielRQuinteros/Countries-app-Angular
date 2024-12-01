import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
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

  private getCodeURL ( code: string ) {
    return `${this.suplierBaseURL}/alpha/${code}`;
  }


  /// DEFINICION DE PETICIONES ( NO LAS EJECUTA TODAVIA --> SE EJECUTAN AGREGANDO .suscribe() al observable que retornan )

  public searchByCapital ( capital: string ): Observable<Country[]> {
    return this.http.get<Country[]>( this.getCapitalURL( capital ) )
                    .pipe( catchError(()=> of([])) );
  }

  public searchByName ( name: string ): Observable<Country[]> {
    return this.http.get<Country[]>( this.getNameURL( name ) )
                    .pipe( catchError(()=> of([])) );
  }

  public searchByRegion (region: string): Observable<Country[]> {
    return this.http.get<Country[]>( this.getRegionURL( region ) )
                    .pipe( catchError(()=> of([])) );
  }

  public searchByCode (code: string): Observable<Country|null> {
    return this.http.get<Country[]>( this.getCodeURL( code ) )
                    .pipe(
                            map( countries => countries.length > 0 ? countries [0] : null ),
                            catchError(()=> of(null))
                     );
  }



  /// NOTA DE RXJS
  //-----------------
  /*
    1- Que es programacion reactiva?
    -------------------------------
    Es un paradigma de programacion que se centra en que hay valores de mi aplicacion que van a estar cambiando,
    y los cambios de estos valores afectan al valor de otros.
    Ejemplo: Tengo un carrito, con 2 productos y su total es $1500, el agregar un producto de $1000 al carrito
    afecta directamente al precio total transformandolo en $2500.
    Basicamente se centra en que hay "componentes" que se suscriben a otros componentes para escuchar cambios de otros compnentes.
    Cuando estos cambian es podible que su estado cambie o que tengan que realizar acciones.
    RESUMIDO: Es usar el patron observer entre componentes cuando se dan situaciones especificas.

    2- Que es RXJS ?
    ----------------
    Es una libreria de javascript que implementa el patron Observer entre componentes de mi aplicacion para poder hacer programacion reactiva.

    3- Algunos metodos de RXJS
      ------------------------
      3-a) pipe(): Me permite tomar el valor emitido por el observable y aplicarle una cadena de procesos como si fuera un Stream. En esta cadena se pueden
                   encadenar varios metodos como:

                  3-a-1) map(): Cuando el observador recibe un evento de cambio de estado, permite hacer como un map de java del valor del evento
                                que se le comunico. Es basicamente para hacer Streams.
                  3-a-2) tap(): Es como el map() con la diferencia que el valor de entrada es el mismo que el valor de salida.
                                Es meter un proceso que no afecta el valor del stream en medio del stream.
                  3-a-3) catchError(): Me permite configurar que hago en caso de que en el flujo del pipe se lanza un error.
      3-b) of(): Me devuelve un observable de lo que pongamos adentro del Of. Es como estructura similar a un suplier, donde adentro definimos lo que se devuelve.


  */


}
