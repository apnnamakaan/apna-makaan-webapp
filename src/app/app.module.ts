import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
