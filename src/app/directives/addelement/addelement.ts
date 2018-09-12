import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

/**
 * Generated class for the AddelementDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[addelement]' // Attribute selector
})
export class AddelementDirective {
  private hasView = false;
  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }
  @Input('addelement') set addelement(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear(); this.hasView = false;
    }
  }
}
