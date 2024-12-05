import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  standalone: false,
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>();

  @Input()
  public placeholder: string = "";

  @Input()
  public className: string = "";

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();

  private debouncerSubscription?: Subscription;

  @ViewChild("searchBoxInputId") /// <-- ID Input SearchBox
  public textInput!: ElementRef<HTMLInputElement>;




  ngOnInit(): void {
    this.debouncerSubscription= this.debouncer.pipe(
                          debounceTime(300)
                        )
                  .subscribe( value => {
                    this.onDebounce.emit(value);
                  } )
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }


  public search() {
      const textSearched = this.textInput.nativeElement.value;
      this.onValue.emit( textSearched );
  }


  public onKeyPress( searchTerm: string ){
    this.debouncer.next(searchTerm);
  }


}
