import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(ele:ElementRef) {  
    ele.nativeElement.style.backgroundColor="white"
  }

}
