import { Directive, ElementRef,  Input, SimpleChange } from '@angular/core'

@Directive({
    selector: '[decimalInput]'
})

export class DecimalInputDirective {

    private element: any

    @Input('decimalInput') format: string

    constructor(private elementRef: ElementRef) {
        this.element = elementRef.nativeElement
    }

    ngOnChanges(changes: { [propName: string]: SimpleChange }) {
        if (changes['format'] && !changes['format'].isFirstChange() && changes['format'].currentValue !== changes['format'].previousValue) {
            console.log('HERE')
            const value = this.element.nativeElement.value
            this.element.nativeElement.value = parseFloat(value).toFixed(2)
        }
    }

    // @HostListener('focus') onFocus(): any {
    //     const value = this.element.nativeElement.value
    // const length = parseFloat(value).toFixed(3).length
    // this.element.nativeElement.value = parseFloat(value).toFixed(2)
    // this.element.nativeElement.value = parseFloat(value).toFixed(3).substring(0, length - 1)
    // }

    // @HostListener('blur') onBlur(): any {
    // const value = this.element.nativeElement.value
    // const length = parseFloat(value).toFixed(3).length
    // this.element.nativeElement.value = parseFloat(value).toFixed(2)
    // this.element.nativeElement.value = parseFloat(value).toFixed(3).substring(0, length - 1)
    // }

    // @HostListener('change') onChange(): any {
    // const value = this.element.nativeElement.value
    // const length = parseFloat(value).toFixed(3).length
    // this.element.nativeElement.value = parseFloat(value).toFixed(2)
    // this.element.nativeElement.value = parseFloat(value).toFixed(3).substring(0, length - 1)
    // }

}
