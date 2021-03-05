import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNumDirective]'
})
export class NumDirectiveDirective {

  // tslint:disable-next-line:variable-name
  constructor(private _el: ElementRef) { }

  // Decorator that declares DOM event to listen for & provide handler method to run
  // tslint:disable-next-line:typedef
  @HostListener('input', ['$event']) onInputChange(event: { stopPropagation: () => void; }) {
    const initalValue = this._el.nativeElement.value;

    this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    if ( initalValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
