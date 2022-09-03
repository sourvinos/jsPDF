import { Directive, ElementRef, HostListener, Input } from '@angular/core'

@Directive({
    selector: '[decimalInput]'
})

export class DecimalInputDirective {

    @Input('decimalInput') format: string

    constructor(private element: ElementRef) { }

    @HostListener('focus') onFocus(): any {
        const value = this.element.nativeElement.value
        // const length = parseFloat(value).toFixed(3).length
        this.element.nativeElement.value = parseFloat(value).toFixed(2)
        // this.element.nativeElement.value = parseFloat(value).toFixed(3).substring(0, length - 1)
    }

    @HostListener('blur') onBlur(): any {
        const value = this.element.nativeElement.value
        // const length = parseFloat(value).toFixed(3).length
        this.element.nativeElement.value = parseFloat(value).toFixed(2)
        // this.element.nativeElement.value = parseFloat(value).toFixed(3).substring(0, length - 1)
    }

}
