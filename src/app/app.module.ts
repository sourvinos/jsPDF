import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
// Material
import { MatCardModule } from '@angular/material/card'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatDialogModule } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input'
import { MatNativeDateModule } from '@angular/material/core'
// PrimeNg
import { ButtonModule } from 'primeng/button'
import { CarouselModule } from 'primeng/carousel'
// Custom
import { CalculationsComponent } from './calculations/calculations.component'
import { ClickableSvgComponent } from './clickable-svg/clickable-svg.component'
import { DecimalInputDirective } from './decimal-input.directive'
import { InputTabStopDirective } from './input-tab-stop.directive'
import { HttpClientModule } from '@angular/common/http'
import { CarouselComponent } from './carousel/carousel.component'
import { MatSelectModule } from '@angular/material/select'

@NgModule({
    declarations: [
        AppComponent,
        CalculationsComponent,
        ClickableSvgComponent,
        DecimalInputDirective,
        InputTabStopDirective,
        CarouselComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        ButtonModule,
        CarouselModule,
        FormsModule,
        HttpClientModule,
        MatSelectModule,
        MatCardModule,
        MatDatepickerModule,
        MatDialogModule,
        MatInputModule,
        MatNativeDateModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
