import { Component } from '@angular/core'
import { InputTabStopDirective } from './input-tab-stop.directive'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    public input: InputTabStopDirective

    public netValue = '0'
    public grossValue = '0'
    public formattedNetValue = ''
    public formattedGrossValue = ''
    // public formattedNetValue = this.netValue.toFixed(2)

    public calculateNetValue(): void {
        this.netValue = (parseFloat(this.grossValue) / 1.24)
        this.formattedNetValue = this.netValue.toFixed(2)

        // this.netValue = (this.grossValue / 1.24).toFixed(2)
        // console.log('net', this.netValue)
    }

    public calculateGrossValue(): void {
        console.log('2. Calculating gross value')
        console.log('2. net', parseFloat(this.netValue))
        console.log('2. gross', this.grossValue)
        this.grossValue = (parseFloat(this.netValue) + (parseFloat(this.netValue) * 0.24))
        this.formattedGrossValue = this.grossValue.toFixed(2)
        console.log('2. net', this.netValue)
        console.log('2. gross', this.grossValue)
        console.log('3. formattedGross', this.formattedGrossValue)
    }

}
