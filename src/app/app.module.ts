import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { MatCardModule } from '@angular/material/card'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatDialogModule } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input'
import { MatNativeDateModule } from '@angular/material/core'
import { NgModule } from '@angular/core'
import { DecimalInputDirective } from './decimal-input.directive'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { InputTabStopDirective } from './input-tab-stop.directive'

@NgModule({
    declarations: [
        AppComponent,
        DecimalInputDirective,
        InputTabStopDirective
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
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
