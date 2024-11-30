import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: false,
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = "";

  @Input()
  public className: string = "";

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @ViewChild("searchBoxInputId") /// <-- ID Input SearchBox
  public textInput!: ElementRef<HTMLInputElement>;

  public search() {
      const textSearched = this.textInput.nativeElement.value;
      this.onValue.emit( textSearched );
  }

}
