import { LogoService } from './logo.service'
import { Component } from '@angular/core'
import { jsPDF } from 'jspdf'
import '../assets/fonts/NotoSansMonoCondensedRegular.js'
import '../assets/fonts/PFHandbookProThin.js'
import '../assets/fonts/ACCanterBold.js'
import embarkation from '../assets/data/embarkation.json'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    private topMargin = 20
    private embarkationList = embarkation
    private pageCount = 1

    constructor(private logoService: LogoService) { }

    public createPDF(): void {
        let nextLineY = this.topMargin
        const step = 4
        const pdf = new jsPDF('p', 'mm', 'a4')
        pdf.setFont('NotoSansMonoCondensedRegular')
        const pageHeight = parseInt(pdf.internal.pageSize.height.toFixed())

        this.addReportLogo(pdf)
        this.addReportCriteria(pdf)

        nextLineY += step + 6

        // pdf.text(this.addPageHeader(pdf), 10, nextLineY)
        nextLineY += step + 2

        pdf.setFont('NotoSansMonoCondensedRegular')

        for (let reservationIndex = 0; reservationIndex < this.embarkationList.embarkation.length; reservationIndex++) {
            if (this.mustAddPage(nextLineY + this.topMargin, pageHeight)) {
                // this.addFooter(pdf)
                nextLineY = this.addPageAndResetTopMargin(pdf)
            }
            pdf.text(this.buildReservationLine(pdf, reservationIndex), 10, nextLineY)
            for (let passengerIndex = 0; passengerIndex < this.embarkationList.embarkation[reservationIndex].passengers.length; passengerIndex++) {
                nextLineY += step
                if (this.mustAddPage(nextLineY + this.topMargin, pageHeight)) {
                    // this.addFooter(pdf)
                    nextLineY = this.addPageAndResetTopMargin(pdf)
                    nextLineY += step + 2
                }
                pdf.text(this.buildPassengerLine(pdf, reservationIndex, passengerIndex), 20, nextLineY)
            }
            nextLineY += step
        }
        pdf.output('dataurlnewwindow')
    }

    private addPageAndResetTopMargin(pdf: jsPDF): number {
        pdf.addPage()
        this.topMargin -= 10
        this.pageCount++
        return this.topMargin
    }

    private buildReservationLine(pdf: jsPDF, index: number): string {
        pdf.setFontSize(8)
        pdf.setTextColor(0, 0, 0)
        const line =
            this.embarkationList.embarkation[index].refNo.padEnd(11, ' ') + ' ◽ ' +
            this.embarkationList.embarkation[index].ticketNo.padEnd(30, ' ') + ' ◽ ' +
            this.getCustomer(index).padEnd(10, ' ') + ' ◽ ' +
            this.getDriver(index).padEnd(10, ' ') + ' ◽ ' +
            this.embarkationList.embarkation[index].ship.padEnd(10, ' ') + ' ◽ ' +
            this.embarkationList.embarkation[index].totalPersons.toString().padStart(3, ' ') + ' ◽ ' +
            this.getRemarks(index)
        return line
    }

    private buildPassengerLine(pdf: jsPDF, reservationIndex: number, passengeIndex: number): string {
        pdf.setFontSize(7)
        pdf.setTextColor(22, 111, 164)
        const passenger =
            this.embarkationList.embarkation[reservationIndex].passengers[passengeIndex].lastname.padEnd(30, ' ') + ' ' +
            this.embarkationList.embarkation[reservationIndex].passengers[passengeIndex].firstname.padEnd(20, ' ') + ' ' +
            this.embarkationList.embarkation[reservationIndex].passengers[passengeIndex].nationalityDescription.padEnd(30, ' ')
        return passenger
    }

    private getCustomer(index: number): string {
        return this.embarkationList.embarkation[index].customer.substring(0, 10)
    }

    private getDriver(index: number): string {
        return this.embarkationList.embarkation[index].driver == undefined ? '(EMPTY)' : this.embarkationList.embarkation[index].driver.substring(0, 10)
    }

    private getRemarks(index: number): string {
        return this.embarkationList.embarkation[index].remarks.substring(0, 34)
    }

    private mustAddPage(nextLineY: number, pageHeight: number): boolean {
        if (nextLineY > pageHeight) {
            return true
        }
    }

    private addPageHeader(pdf: jsPDF): string {
        pdf.setFontSize(8)
        pdf.setTextColor(82, 32, 36)
        pdf.setFont('NotoSansMonoCondensedRegular')
        const pageHeader =
            'REFNO'.padEnd(11, ' ') + ' ◽ ' +
            'TICKET'.padEnd(30, ' ') + ' ◽ ' +
            'CUSTOMER'.padEnd(10, ' ') + ' ◽ ' +
            'DRIVER'.padEnd(10, ' ') + ' ◽ ' +
            'SHIP'.padEnd(10, ' ') + ' ◽ ' +
            'Σ'.padEnd(10, ' ') + ' ◽ ' +
            'REMARKS'.padEnd(10, ' ')
        return pageHeader
    }

    private addReportLogo(pdf: jsPDF): void {
        pdf.setFontSize(20)
        pdf.setTextColor(173, 0, 0)
        pdf.addImage(this.logoService.getLogo(), 'JPEG', 10.3, 10, 15, 15)
        pdf.setFont('ACCanterBold')
        pdf.text('Corfu Cruises', 30, 18)
        pdf.setFont('PFHandbookProThin')
        pdf.setFontSize(10)
        pdf.setTextColor(0, 0, 0)
        pdf.text('Embarkation Report', 31.5, 22)
    }

    private addReportCriteria(pdf: jsPDF): void {
        pdf.setFont('PFHandbookProThin')
        pdf.setTextColor(0, 0, 0)
        pdf.setFontSize(10)
        pdf.text('Date ' + '05/06/2022', 202, 12.5, { align: 'right' })
        pdf.text('Destination ' + 'PAXOS - ANTIPAXOS', 202, 16.5, { align: 'right' })
        pdf.text('Port ' + 'CORFU PORT', 202, 20.5, { align: 'right' })
        pdf.text('Ship ' + 'CAPTAIN BILL', 202, 24.5, { align: 'right' })
    }

    private addFooter(pdf: jsPDF): void {
        pdf.text('Pages ' + this.pageCount, 202, 280, { align: 'right' })
    }

}
