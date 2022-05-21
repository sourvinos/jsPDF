import { Component } from '@angular/core'
import { Address, Customer } from './customer'
import { jsPDF } from 'jspdf'
import '../assets/fonts/NotoSansMonoCondensedRegular.js'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    private topMargin = 30

    private customers: Customer[] = [
        { 'id': 1, 'description': 'MOBY DICK', 'addresses': [{ 'street': 'Street 1.1' }, { 'street': 'Street 1.2' }] },
        { 'id': 2, 'description': 'SANDY', 'addresses': [{ 'street': 'Street 2.1' }] },
        { 'id': 3, 'description': 'BANDOS TRAVEL', 'addresses': [{ 'street': 'Street 3.1' }, { 'street': 'Street 3.2' }] },
        { 'id': 4, 'description': 'CTS', 'addresses': [] },
        { 'id': 5, 'description': 'HELLENIC', 'addresses': [{ 'street': 'Street 5.1' }, { 'street': 'Street 5.2' }] },
        { 'id': 6, 'description': 'TUI', 'addresses': [{ 'street': 'Street 6.1' }] },
        { 'id': 7, 'description': 'BENITSES TRAVEL', 'addresses': [{ 'street': 'Street 7.1' }, { 'street': 'Street 7.2' }] },
        { 'id': 8, 'description': 'KAFESAS', 'addresses': [{ 'street': 'Street 8.1' }] },
        { 'id': 9, 'description': 'AKVILA', 'addresses': [{ 'street': 'Street 9.1' }, { 'street': '9.2' }] },
        { 'id': 10, 'description': 'HELLENIC', 'addresses': [{ 'street': 'Street 10.1' }, { 'street': '10.2' }] },
    ]

    public createJSPDF(): void {
        let nextLineY = this.topMargin
        const pdf = new jsPDF('p', 'mm', 'a4')
        pdf.setFont('NotoSansMonoCondensedRegular')
        const pageHeight = parseInt(pdf.internal.pageSize.height.toFixed())
        console.log(pdf.getFontList())
        for (let index = 0; index < this.customers.length; index++) {
            if (nextLineY > pageHeight) {
                pdf.addPage()
                nextLineY = this.topMargin
            }
            const customer = this.customers[index].id + ' ' + this.customers[index].description + ' ' + nextLineY
            pdf.setFontSize(20)
            pdf.setTextColor(0, 0, 0)
            pdf.text(customer, 10, nextLineY)
            pdf.setTextColor(227, 60, 47)
            pdf.setFontSize(10)
            for (let inner = 0; inner < this.customers[index].addresses.length; inner++) {
                nextLineY += 10
                const address = this.customers[index].addresses[0]
                if (nextLineY > pageHeight) {
                    pdf.addPage()
                    nextLineY = this.topMargin
                }
                pdf.text(address.street + ' ' + nextLineY, 40, nextLineY)
            }
            nextLineY += 10
        }
        pdf.output('dataurlnewwindow')
    }

    public createPDF(): void {
        // 
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
        columns.forEach((element, index) => {
            if (element != 'addresses') {
                dataRow.push({ text: this.formatField(columnTypes[index], row[element]), alignment: align[index].toString(), color: '#000000', noWrap: false })
                return dataRow
            } else {
                dataRow.push(this.buildAddressesTable(row.addresses,
                    [''],
                    ['street'],
                    ['center'])
                )
                return dataRow
            }
        })
        // return dataRow
    }

    private formatField(type: any, field: string | number | Date): string {
        switch (type) {
            case 'date':
                return field.toString()
            default:
                return field != undefined ? field.toString() : ''
        }
    }

    private buildAddressesTable(data: Address[], columnTypes: any[], columns: any[], align: any[]): any {
        return {
            table: {
                headerRows: 1,
                dontBreakRows: true,
                body: this.buildAddressesBody(data, columnTypes, columns, align),
                heights: 10,
                bold: false,
                style: 'table',
                layout: 'noBorders',
            }
        }
    }

    private buildAddressesBody(data: Address[], columnTypes: any[], columns: any[], align: any[]): void {
        const body: any = []
        data.forEach((row) => {
            let dataRow = []
            dataRow = this.processAddressRow(columnTypes, columns, row, dataRow, align)
            body.push(dataRow)
        })
        return body
    }

    private processAddressRow(columnTypes: any[], columns: any[], row: Address, dataRow: any[], align: any[]): any {
        columns.forEach((element, index) => {
            dataRow.push({ text: this.formatField(columnTypes[index], row[element]), alignment: align[index].toString(), color: '#000000', noWrap: false })
        })
        return dataRow
    }

}
