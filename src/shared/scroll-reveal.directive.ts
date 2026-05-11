import { Directive, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements AfterViewInit{

  constructor(
    private el:ElementRef,
    private renderer:Renderer2
  ) { }

  
  ngAfterViewInit(): void {

    this.renderer.addClass(this.el.nativeElement, 'hidden-reveal');

    const observer = new IntersectionObserver((entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          this.renderer.addClass(
            this.el.nativeElement,
            'show-reveal'
          );

          observer.unobserve(this.el.nativeElement);
        }

      });

    }, {
      threshold: 0.2
    });

    observer.observe(this.el.nativeElement);
  }

}
