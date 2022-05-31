import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SweetAlert2Module.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
