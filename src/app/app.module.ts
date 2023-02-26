import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { InputComponentComponent } from './shared/components/input-component/input-component.component';
import { ButtonComponentComponent } from './shared/components/button-component/button-component.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { PredictComponent } from './pages/predict/predict.component';
import { SelectComponentComponent } from './shared/components/select-component/select-component.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { HouseCardComponent } from './shared/components/house-card/house-card.component';
import { SellComponent } from './pages/sell/sell.component';
import { FileInputComponent } from './shared/components/file-input/file-input.component';
import { YourListingComponent } from './pages/your-listing/your-listing.component';
import { ListingCardComponent } from './shared/components/listing-card/listing-card.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PropretyComponent } from './pages/proprety/proprety.component';
import { CurrencyPipe } from './shared/pipes/currency.pipe';
import { DatePipe } from './shared/pipes/date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    InputComponentComponent,
    ButtonComponentComponent,
    DiscoverComponent,
    PredictComponent,
    SelectComponentComponent,
    NavComponent,
    HouseCardComponent,
    SellComponent,
    FileInputComponent,
    YourListingComponent,
    ListingCardComponent,
    ProfileComponent,
    PageNotFoundComponent,
    PropretyComponent,
    CurrencyPipe,
    DatePipe,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
