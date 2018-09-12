import { Directive,ElementRef,Input } from '@angular/core';

/**
 * Generated class for the MycolorDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[mycolor]' // Attribute selector
})
export class MycolorDirective {
  @Input('mycolor') color: string; 
  constructor(public e:ElementRef) {
  }
  ngOnInit(){
    this.e.nativeElement.style.backgroundColor =this.color;
  }
}
