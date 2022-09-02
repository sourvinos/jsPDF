import { Directive, ElementRef, HostListener, Input } from '@angular/core'

@Directive({ selector: '[decimalInput]' })

export class DecimalInputDirective {

    @Input('decimalInput') format: string

    constructor(private el: ElementRef) { }

    @HostListener('focus', ['$event.target']) onFocus(): any {
        console.log('Focusing...')
        this.el.nativeElement.select()
    }

    @HostListener('blur') onBlur(): any {
        console.log('Formatting on blur...', this.el.nativeElement.value)
        const value = parseFloat(this.el.nativeElement.value)
        this.el.nativeElement.value = value.toFixed(2)
        // x = (this.el.nativeElement.value).toFixed(2)
        // this.el.nativeElement.value = x
    }

    // @HostListener('keyup', ['$event']) onkeyup(): any {
    // console.log('Key up', this.el.nativeElement.value)
    // value = value.replace(/[-,.]/g, '/').replace(/[^0-9/]/g, '')
    // if (event.key === 'Enter') {
    // value = this.formatDate(value)
    // }
    // this.el.nativeElement.value = value
    // console.log('Keyup:', value)
    // }

}
