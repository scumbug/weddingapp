import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PrimengModule } from './primeng.module';
import { TableFinderComponent } from './components/table-finder/table-finder.component';
import { LandingComponent } from './components/landing/landing.component';

import { CountdownModule } from 'ngx-countdown';
import { ImagekitioAngularModule } from 'imagekitio-angular';
import { environment } from 'src/environments/environment';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

@NgModule({
  declarations: [AppComponent, TableFinderComponent, LandingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimengModule,
    HttpClientModule,
    FormsModule,
    CountdownModule,
    ImagekitioAngularModule.forRoot({
      publicKey: environment.publicKey,
      urlEndpoint: environment.urlEndpoint,
    }),
    GalleryModule,
    LightboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
