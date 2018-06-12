import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './app.routes';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import {HttpClientModule} from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';

@NgModule({

    declarations: [
        AppComponent,
        LoginComponent,
        MainComponent,
        AddComponent,
        DeleteComponent,
        UpdateComponent
    ],

    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(ROUTER_CONFIG),
        HttpClientModule
    ],

    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
