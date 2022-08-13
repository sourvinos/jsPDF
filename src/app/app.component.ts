import { Component } from '@angular/core'
import { NewInvoicingPDFService } from './invoicing/classes/services/new-invoicing-pdf.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    constructor(private invoicingPDFService: NewInvoicingPDFService) { }

    public doReportTasks(): void {
        this.invoicingPDFService.createPDF()
    }

}
