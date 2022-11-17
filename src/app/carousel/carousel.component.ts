import { Component } from '@angular/core'

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']
})

export class CarouselComponent {

    public year = []
    private monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    public dayWidth: number
    private isDragStart = false
    private isDragging = false
    private prevPageX: number
    private prevScrollLeft: number
    private positionDiff: number
    private carousel: any
    private arrowIcons: any
    private firstDay: any
    public todayIndex: number
    public today = 0
    selectedYear: number
    years: any[] = [
        { value: '2022', viewValue: '2022' },
        { value: '2023', viewValue: '2023' },
        { value: '2024', viewValue: '2024' },
    ]

    ngOnInit() {
        this.buildYear(this.getCurrentYear())
        const today = new Date()
        this.todayIndex = this.getDayOfYear(new Date(today.getFullYear(), today.getMonth(), today.getDate())) - 1
        this.selectedYear = this.years[0].value
    }

    ngAfterViewInit() {
        this.carousel = document.querySelectorAll('.carousel')[0]
        this.firstDay = document.getElementsByClassName('day')[0]
        this.dayWidth = this.firstDay.getBoundingClientRect().width
        this.arrowIcons = document.querySelectorAll('.wrapper i')
        this.arrowIcons.forEach(icon => {
            icon.addEventListener('click', () => {
                this.carousel.scrollLeft += icon.id == 'left' ? -this.dayWidth : this.dayWidth
                setTimeout(() => this.showHideIcons(), 60)
            })
        })
        this.gotoToday()
    }

    private showHideIcons() {
        const scrollWidth = this.carousel.scrollWidth - this.carousel.clientWidth
        this.arrowIcons[0].style.display = this.carousel.scrollLeft == 0 ? 'none' : 'block'
        this.arrowIcons[1].style.display = this.carousel.scrollLeft == scrollWidth ? 'none' : 'block'
    }

    public gotoToday(): void {
        this.carousel.scrollLeft = this.dayWidth * (this.todayIndex - 1)
        this.showHideIcons()
    }

    public gotoMonth(month: number): void {
        this.carousel.scrollLeft = this.getMonthOffset(month) * this.dayWidth
        this.showHideIcons()
    }


    private getMonthOffset(month: number): number {
        switch (month) {
            case 1: return 0
            case 2: return 31
            case 3: return this.isLeapYear(this.selectedYear) ? 60 : 59
            case 4: return this.isLeapYear(this.selectedYear) ? 91 : 90
            case 5: return this.isLeapYear(this.selectedYear) ? 121 : 120
            case 6: return this.isLeapYear(this.selectedYear) ? 152 : 151
            case 7: return this.isLeapYear(this.selectedYear) ? 182 : 181
            case 8: return this.isLeapYear(this.selectedYear) ? 213 : 212
            case 9: return this.isLeapYear(this.selectedYear) ? 244 : 243
            case 10: return this.isLeapYear(this.selectedYear) ? 274 : 273
            case 11: return this.isLeapYear(this.selectedYear) ? 305 : 304
            case 12: return this.isLeapYear(this.selectedYear) ? 345 : 344
        }
    }

    public gotoJanuary(): void {
        this.carousel.scrollLeft = 0
        this.showHideIcons()
    }

    public gotoFebruary(): void {
        this.carousel.scrollLeft = this.dayWidth * 31
        this.showHideIcons()
    }

    public gotoMarch(): void {
        this.carousel.scrollLeft = this.dayWidth * 59
        this.showHideIcons()
    }

    public gotoApril(): void {
        this.carousel.scrollLeft = this.dayWidth * 90
        this.showHideIcons()
    }

    private buildYear(year: number): void {
        this.year = []
        for (let index = 0; index < 12; index++) {
            const startDate = new Date().setFullYear(year, index, 1)
            const endDate = new Date().setFullYear(year, index + 1, 0)
            const diffDays = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24) + 1)
            Object.keys([...Array(diffDays)]).map((a: any) => {
                a = parseInt(a) + 1
                const dayObject = new Date(year, index, a)
                this.year.push({
                    name: dayObject.toLocaleString('default', { weekday: 'long' }),
                    value: a,
                    month: this.monthNames[index]
                })
            })
        }
    }

    private getDayOfYear(date: Date) {
        const timestamp1 = Date.UTC(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
        )
        const timestamp2 = Date.UTC(date.getFullYear(), 0, 0)
        const differenceInMilliseconds = timestamp1 - timestamp2
        const differenceInDays = differenceInMilliseconds / 1000 / 60 / 60 / 24
        return differenceInDays
    }

    private isLeapYear(year: number): boolean {
        if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
            return true
        } else {
            return false
        }
    }

    private getCurrentYear(): number {
        this.selectedYear = new Date().getFullYear()
        return this.selectedYear
    }

    public doStuff(event): void {
        this.buildYear(this.selectedYear)
    }

}
