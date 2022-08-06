import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { Injectable } from '@angular/core'
// Custom
import { list } from '../view-models/embarkation-vm'
import { LogoService } from 'src/app/logo.service'

pdfMake.vfs = pdfFonts.pdfMake.vfs

@Injectable({ providedIn: 'root' })

export class NewEmbarkationPDFService {

    //#region variables

    private criteria: any
    private records = list
    private rows = []

    //#endregion

    constructor(private logoService: LogoService) { }

    //#region public methods

    public createPDF(): void {
        this.createReservationLine()
        this.populateCriteriaFromStoredVariables('CAPTAIN BILL')
        console.log(this.records)
        const dd = {
            info: {
                title: 'Awesome Document',
                filename: 'Boo.pdf'
            },
            pageMargins: 30,
            background: [{
                image: this.logoService.getLogo(),
                width: '1000',
                opacity: 0.03,
            }],
            pageOrientation: 'portrait',
            pageSize: 'A4',
            defaultStyle: { fontSize: 6 },
            content: [
                {
                    columns: [
                        {
                            width: '80%',
                            table: {
                                heights: [20, 100],
                                body: [
                                    [{ text: 'left1', fillColor: '#555555', color: '#ffffff', fontSize: 10 }],
                                    [{ text: 'left2', color: '#ff0000' }],
                                ]
                            },
                        },
                        {
                            width: '20%',
                            table: {
                                body: [
                                    [
                                        { text: 'right', border: [false, false, false, true] }
                                    ]
                                ]
                            }
                        }
                    ],
                },
                {
                    table: {
                        body: this.rows,
                    },
                    layout: 'headerLineOnly'
                }
            ],
            footer: (currentPage: { toString: () => string }, pageCount: string) => {
                return [
                    { text: currentPage.toString() + ' of ' + pageCount, alignment: 'right', margin: [5, 2, 20, 20] }
                ]
            }
        }
        this.createPdf(dd)
    }

    //#endregion

    //#region private methods

    private createPdf(document: any): void {
        pdfMake.createPdf(document).open()
        // pdfMake.createPdf(document).download('WorkingSample.pdf')
    }

    //#endregion

    private createLogo(): any[] {
        return [{ image: this.logoService.getLogo(), fit: [40, 40], alignment: 'center' }]
    }

    private createCriteria(): any[] {
        return [
            { text: 'Date ' + this.criteria.date, alignment: 'right' },
            { text: 'Destination ' + this.criteria.destination.description, alignment: 'right' },
            { text: 'Port ' + this.criteria.port.description, alignment: 'right' },
            { text: 'Ship ' + this.criteria.ship, style: 'tableHeader', alignment: 'right' },
        ]
    }

    private populateCriteriaFromStoredVariables(ship: any): void {
        this.criteria = {
            'date': '2022-08-01',
            'destination': 'PAXOS - ANTIPAXOS',
            'port': 'CORFU PORT',
            'ship': ship
        }
    }

    private createReservationLine(): void {
        for (const reservation of this.records.reservations) {
            this.rows.push([
                { text: reservation.refNo, fillColor: '#efefef', color: '#000000' },
                { text: reservation.ticketNo, },
                { text: reservation.customer, },
                { text: reservation.driver, },
                { text: reservation.remarks, bold: true },
                { text: reservation.totalPersons, alignment: 'right', fillColor: '#efefef', color: '#000000' },
            ])
            for (const passenger of reservation.passengers) {
                this.rows.push([
                    { text: '' },
                    { text: passenger.lastname, colSpan: 2, alignment: 'left', fontSize: 5 },
                    { text: '' },
                    { text: passenger.firstname, colSpan: 3, alignment: 'left', fontSize: 5 },
                    { text: '' },
                    { text: '' },
                ])
            }
        }
    }

}
