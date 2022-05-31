import { LogoService } from './logo.service'
import { Component } from '@angular/core'
import { jsPDF } from 'jspdf'
import '../assets/fonts/NotoSansMonoCondensedRegular.js'
import '../assets/fonts/PFHandbookProThin.js'
import '../assets/fonts/ACCanterBold.js'
import embarkation from '../assets/data/embarkation.json'
import Swal from 'sweetalert2'


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    // #region variables

    private topMargin = 20
    private lineGap = 4
    private currentPageCount = 1
    private nextLineTop = this.topMargin
    private pageHeight = 0
    private pdf = new jsPDF()
    private embarkationList = embarkation

    //#endregion

    constructor(private logoService: LogoService) { }

    public createPDF(): void {
        this.init()
        this.addLogo(this.pdf)
        this.addTitle(this.pdf)
        this.addCriteria(this.pdf)
        this.addBody(this.pdf)
        this.addFooter(this.currentPageCount, this.pdf)
        this.openPdf()
    }

    private init(): void {
        this.pdf = new jsPDF('p', 'mm', 'a4')
        this.pageHeight = parseInt(this.pdf.internal.pageSize.height.toFixed())
    }

    private addLogo(pdf: jsPDF): void {
        pdf.addImage(this.logoService.getLogo(), 'JPEG', 10.3, 10, 15, 15)
        pdf.setFont('ACCanterBold')
        pdf.setFontSize(20)
        pdf.setTextColor(173, 0, 0)
        pdf.text('Corfu Cruises', 30, 18)
    }

    private addTitle(pdf: jsPDF): void {
        pdf.setFont('PFHandbookProThin')
        pdf.setFontSize(10)
        pdf.setTextColor(0, 0, 0)
        pdf.text('Embarkation Report', 31.5, 22)
    }

    private addCriteria(pdf: jsPDF): void {
        pdf.setFont('PFHandbookProThin')
        pdf.setTextColor(0, 0, 0)
        pdf.setFontSize(9)
        pdf.text('Date: ' + '05/06/2022', 202, 12.5, { align: 'right' })
        pdf.text('Destination: ' + 'PAXOS - ANTIPAXOS', 202, 16.5, { align: 'right' })
        pdf.text('Port: ' + 'CORFU PORT', 202, 20.5, { align: 'right' })
        pdf.text('Ship: ' + 'CAPTAIN BILL', 202, 24.5, { align: 'right' })
    }

    private addBody(pdf: jsPDF): void {
        this.nextLineTop += this.lineGap + 8
        for (let reservationIndex = 0; reservationIndex < this.embarkationList.embarkation.length; reservationIndex++) {
            if (this.mustAddPage(this.nextLineTop + this.topMargin, this.pageHeight)) {
                this.addFooter(this.currentPageCount, pdf)
                this.currentPageCount++
                this.nextLineTop = this.addPageAndResetTopMargin(pdf)
            }
            pdf.text(this.buildReservationLine(pdf, reservationIndex), 10, this.nextLineTop)
            for (let passengerIndex = 0; passengerIndex < this.embarkationList.embarkation[reservationIndex].passengers.length; passengerIndex++) {
                this.nextLineTop += this.lineGap
                if (this.mustAddPage(this.nextLineTop + this.topMargin, this.pageHeight)) {
                    this.addFooter(this.currentPageCount, pdf)
                    this.currentPageCount++
                    this.nextLineTop = this.addPageAndResetTopMargin(pdf)
                    this.nextLineTop += this.lineGap + 2
                }
                pdf.text(this.buildPassengerLine(pdf, reservationIndex, passengerIndex), 20, this.nextLineTop)
            }
            this.nextLineTop += this.lineGap
        }
    }

    private addFooter(pageCount: number, pdf: jsPDF): void {
        pdf.setFont('PFHandbookProThin')
        pdf.setTextColor(0, 0, 0)
        pdf.setFontSize(9)
        pdf.text('Page: ' + pageCount.toString(), 202, 290, { align: 'right' })
    }

    private openPdf(): void {
        this.pdf.output('dataurlnewwindow')
    }

    private addPageAndResetTopMargin(pdf: jsPDF): number {
        pdf.addPage()
        this.topMargin -= 10
        return this.topMargin
    }

    private buildReservationLine(pdf: jsPDF, index: number): string {
        pdf.setFont('NotoSansMonoCondensedRegular')
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
        pdf.setFont('NotoSansMonoCondensedRegular')
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

    private mustAddPage(nextLineTop: number, pageHeight: number): boolean {
        if (nextLineTop > pageHeight) {
            return true
        }
    }

    public saveRecord(): void {
        const response = 'Ref No is PA452'
        this.showModal(response)
    }

    private showModal(response: string): void {
        Swal.fire({
            title: 'Ολα καλά!',
            text: response,
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
        })
    }

    public showError(): void {
        Swal.fire({
            title: 'Κάτι δεν πήγε καλά!',
            text: 'Η αποθήκευση της κράτησης δεν μπορεί να γίνει επειδή έχετε επιλέξει παραλαβή σε μεταφορά σε λιμάνι. Πρέπει να επικοινωνήστε μαζί μας το συντομότερο για διαθεσιμότητα στα λεωφορεία.',
            icon: 'error',
            confirmButtonText: 'OK',
            allowEnterKey: false
        })
    }

    public showWarning(): void {
        Swal.fire({
            title: 'Πρόσεχε!',
            text: 'Η διαγραφή είναι μόνιμη και για πάντα.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'I changed my mind',
            allowEnterKey: false
        })
    }


}
