import { Component } from '@angular/core'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import pdfMake from 'pdfmake/build/pdfmake'
import { Address, Customer } from './customer'
pdfMake.vfs = pdfFonts.pdfMake.vfs

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    public createPDF(): void {

        const customers: Customer[] = [
            { 'id': 1, 'description': 'MOBY DICK', 'addresses': [{ 'street': 'Street A' }, { 'street': 'Street B' }] },
            { 'id': 2, 'description': 'SANDY', 'addresses': [{ 'street': 'Street C' }] },
            { 'id': 3, 'description': 'BANDOS TRAVEL', 'addresses': [{ 'street': 'Street D' }, { 'street': 'Street E' }] },
            { 'id': 4, 'description': 'CTS', 'addresses': [] },
            { 'id': 5, 'description': 'HELLENIC', 'addresses': [{ 'street': 'Street F' }, { 'street': 'Street G' }] },
            { 'id': 6, 'description': 'TUI', 'addresses': [{ 'street': 'Street H' }] },
            { 'id': 7, 'description': 'BENITSES TRAVEL', 'addresses': [{ 'street': 'Street J' }, { 'street': 'Street BA' }] },
            { 'id': 8, 'description': 'KAFESAS', 'addresses': [{ 'street': 'Street EASY' }] },
            { 'id': 9, 'description': 'AKVILA', 'addresses': [{ 'street': 'Street EURO' }, { 'street': 'YUI' }] },
        ]

        const document = {
            defaultStyle: { fontSize: 7 },
            content: [
                {
                    table: {
                        body: [
                            ['Id', 'Description', 'RefNo'],
                            ['a1', 'a2', 'a3'],
                            [
                                [],
                                [
                                    {
                                        table: {
                                            body: [
                                                ['Street', 'No'],
                                                ['s1', 'n1']
                                            ]
                                        }
                                    }
                                ],
                                []
                            ],
                            ['b1', 'b2', 'c2'],
                            ['c1', 'c2', 'f2'],
                        ]
                    }
                }
            ]
        }

        pdfMake.createPdf(document).open()

    }

    private buildTableBody(data: Customer[], columns: any[]): void {
        const body: any = []
        body.push(this.createTableHeaders())
        data.forEach((row: any) => {
            let dataRow = []
            dataRow = this.processRow(columns, row, dataRow)
            console.log('row', row)
            body.push(dataRow)
            // body.push(this.createInnerTableHeaders())
            for (let index = 0; index < row.addresses.length; index++) {
                console.log(row.addresses[index])
            }
        })
        return body
    }

    private createTableHeaders(): any[] {
        return [
            { text: 'Id', style: 'tableHeader', alignment: 'center', bold: false },
            { text: 'Description', style: 'tableHeader', alignment: 'center', bold: false },
        ]
    }

    private processRow(columns: any[], row: any, dataRow: any[]): any {
        columns.forEach((element) => {
            if (element != undefined) {
                dataRow.push({ text: row[element], noWrap: false })
            }
        })
        return dataRow
    }

    private buildInnerTableBody(data: Address[], columns: any[]): void {
        // console.log(data)
        const body: any = []
        body.push(this.createInnerTableHeaders())
        data.forEach((row: any) => {
            // console.log('processing addresses', row.addresses)
            let dataRow = []
            dataRow = this.processRow(columns, row, dataRow)
            body.push(dataRow)
            row.addresses.forEach((element: any) => {
                // console.log('element', element)
            })
        })
        return body
    }

    private createInnerTableHeaders(): any[] {
        return [
            { text: 'Street', style: 'tableHeader', alignment: 'center', bold: false },
        ]
    }

}
