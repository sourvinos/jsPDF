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

    private customers: Customer[] = [
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

    public createPDF(): void {
        const document = {
            defaultStyle: { fontSize: 7 },
            content:
                [
                    this.table(this.customers,
                        ['', ''],
                        ['id', 'description', 'addresses'],
                        ['center', 'left', 'any'])
                ]
        }
        pdfMake.createPdf(document).open()
    }

    private table(data: Customer[], columnTypes: any[], columns: any[], align: any[]): any {
        return {
            table: {
                headerRows: 1,
                dontBreakRows: true,
                body: this.buildTableBody(data, columnTypes, columns, align),
                heights: 10,
                bold: false,
                style: 'table',
                layout: 'noBorders',
                widths: [20, 80, 50, 50, 40, '10%', '10%', 50, 60],
            },
            layout: {
                vLineColor: function (i: number, node: { table: { widths: string | any[] } }): any { return (i === 1 || i === node.table.widths.length - 1) ? '#dddddd' : '#dddddd' },
                vLineStyle: function (): any { return { dash: { length: 50, space: 0 } } },
                paddingTop: function (i: number): number { return (i === 0) ? 5 : 5 },
                paddingBottom: function (): number { return 2 }
            }
        }

    }

    private buildTableBody(data: Customer[], columnTypes: any[], columns: any[], align: any[]): void {
        const body: any = []
        data.forEach((row) => {
            let dataRow = []
            dataRow = this.processRow(columnTypes, columns, row, dataRow, align)
            body.push(dataRow)
        })
        return body
    }

    private processRow(columnTypes: any[], columns: any[], row: Customer, dataRow: any[], align: any[]): any {
        // console.log('row', row)
        columns.forEach((element, index) => {
            // console.log('element', element)
            if (element != 'addresses') {
                dataRow.push({ text: this.formatField(columnTypes[index], row[element]), alignment: align[index].toString(), color: '#000000', noWrap: false })
            } else {
                dataRow.push(this.processAddresses(row.addresses))
                // console.log('Addresses', row.addresses)
                // row.addresses.forEach(address => {
                //     console.log(address)
                //     dataRow.push({ text: address.street })
                // })
            }
        })
        return dataRow
    }

    private processAddresses(addresses: Address[]): any {
        const addressRow = []
        addresses.forEach(address => {
            addressRow.push({ text: address.street })
        })
        return addressRow
    }

    private formatField(type: any, field: string | number | Date): string {
        switch (type) {
            case 'date':
                return field.toString()
            default:
                return field != undefined ? field.toString() : ''
        }
    }

}
