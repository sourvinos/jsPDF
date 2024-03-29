import { Directive, HostListener, Input } from '@angular/core'

@Directive({ selector: '[inputTabStop]' })

export class InputTabStopDirective {

    @Input('inputTabStop') format: any

    @HostListener('keydown', ['$event']) onkeydown(event: { target: { getAttribute: (arg0: string) => string; }; key: string; preventDefault: () => void; }): any {
        if (event.target.getAttribute('type') === 'number' && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
            event.preventDefault()
        }
    }

    @HostListener('keyup', ['$event']) onkeyup(event: { preventDefault: () => void; key: string; target: { getAttribute: (arg0: string) => any; }; }): any {

        const elements = Array.prototype.slice.apply(document.querySelectorAll('input[data-tabindex]'))

        if (document.getElementsByClassName('mat-option').length == 0) {

            if (event.key === 'Enter' || event.key === 'ArrowDown') {
                let nextTab = +(event.target.getAttribute('data-tabindex')) + 1
                for (let i = elements.length; i--;) {
                    if (nextTab > elements.length) { nextTab = 1 }
                    if (+(elements[i].getAttribute('data-tabindex')) === nextTab && !elements[i].getAttribute('disabled')) {
                        setTimeout(() => {
                            elements[i].focus()
                            elements[i].select()
                        }, 50)
                        break
                    }
                }
            }

            if (event.key === 'ArrowUp') {
                let previousTab = +(event.target.getAttribute('data-tabindex')) - 1
                for (let i = elements.length; i--;) {
                    if (previousTab === 0) { previousTab = elements.length }
                    if (+(elements[i].getAttribute('data-tabindex')) === previousTab) {
                        setTimeout(() => {
                            elements[i].focus()
                            elements[i].select()
                        }, 50)
                        break
                    }
                }

            }

        }

    }

}
