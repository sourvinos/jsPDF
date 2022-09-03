import { Component, ElementRef } from '@angular/core'
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms'
import { InputTabStopDirective } from './input-tab-stop.directive'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    public form: FormGroup
    public input: InputTabStopDirective

    constructor(private formBuilder: FormBuilder, private el: ElementRef) {
        this.initForm()
    }

    // public calculateNet(): void {
    //     const vatValue = this.form.value.grossValue / 1 + (this.form.value.vatPercent / 100)
    //     const netValue = parseFloat((this.form.value.grossValue / (1 + vatValue)).toFixed(2))
    //     this.form.patchValue({ vatValue: vatValue })
    //     this.form.patchValue({ netValue: netValue })
    // }

    // public calculateGross(): void {
    //     const x = parseFloat((this.form.value.netValue * (this.form.value.vatPercent / 100)) + this.form.value.netValue).toFixed(2)
    //     this.form.patchValue({ grossValue: x })
    // }

    public doCalculations(focusField: string): void {
        // let net = 0
        let vatValue = 0
        const vatAmount = 0
        let gross = '0'
        if (focusField == 'net') {
            vatValue = this.form.value.grossValue / 1 + (this.form.value.vatPercent / 100)
            // net = parseFloat((this.form.value.grossValue / (1 + vatValue)).toFixed(2))
            gross = parseFloat((this.form.value.netValue * (this.form.value.vatPercent / 100)) + this.form.value.netValue).toFixed(2)
        }
        if (focusField == 'vatPercent') {
            vatValue = this.form.value.netValue * (this.form.value.vatPercent / 100)
            // vatAmount = this.form.value.netValue * (this.form.value.vatPercent / 100)
            gross = parseFloat((this.form.value.netValue * (this.form.value.vatPercent / 100)) + this.form.value.netValue).toFixed(2)
        }
        // this.form.patchValue({ netValue: net })
        this.form.patchValue({ vatValue: vatValue })
        this.form.patchValue({ vatAmount: vatAmount })
        this.form.patchValue({ grossValue: gross })
    }

    private initForm(): void {
        this.form = this.formBuilder.group({
            netValue: 0,
            vatPercent: 0,
            vatValue: 0,
            grossValue: 0
        })
    }

    get netValue(): AbstractControl {
        return this.form.get('netValue')
    }

    get vatPercent(): AbstractControl {
        return this.form.get('vatPercent')
    }

    get vatValue(): AbstractControl {
        return this.form.get('vatValue')
    }

    get grossValue(): AbstractControl {
        return this.form.get('grossValue')
    }

}
