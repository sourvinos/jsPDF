import { Component } from '@angular/core'
import { NewEmbarkationPDFService } from './embarkation/classes/services/new-embarkation-pdf.service'
import { EmbarkationGroupVM } from './embarkation/classes/view-models/embarkation-group-vm'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    public filteredRecords: EmbarkationGroupVM

    constructor(private embarkationPDFService: NewEmbarkationPDFService) { }

    public doReportTasks(): void {
        this.embarkationPDFService.createPDF()
    }

}
