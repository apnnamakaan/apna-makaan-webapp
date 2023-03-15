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
import {
  NgxUiLoaderModule,
  NgxUiLoaderRouterModule,
  NgxUiLoaderHttpModule,
} from 'ngx-ui-loader';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatIconModule } from '@angular/material/icon';
import { NamePipe } from './shared/pipes/name.pipe';

import { ChatCardComponent } from './shared/components/chat-card/chat-card.component';
import { ChatComponent } from './pages/chat/chat.component';

import { MessageCardComponent } from './shared/components/message-card/message-card.component';
import { ImgPipe } from './shared/pipes/img.pipe';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { FavoriteCardComponent } from './shared/components/favorite-card/favorite-card.component';

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
    NamePipe,
    ChatCardComponent,
    ChatComponent,
    MessageCardComponent,
    ImgPipe,
    FavoritesComponent,
    FavoriteCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatIconModule,
    NgxUiLoaderModule.forRoot({
      bgsColor: '#3764eb',
      bgsOpacity: 0.1,
      bgsPosition: 'center-center',
      bgsSize: 70,
      bgsType: 'wandering-cubes',
      blur: 5,
      delay: 0,
      fastFadeOut: true,
      fgsColor: '#3764eb',
      fgsPosition: 'center-center',
      fgsSize: 70,
      fgsType: 'wandering-cubes',
      gap: 24,
      logoPosition: 'center-center',
      logoSize: 80,
      logoUrl: '',
      masterLoaderId: 'master',
      overlayBorderRadius: '0',
      overlayColor: 'rgba(178,178,178,0.8)',
      pbColor: '#3764eb',
      pbDirection: 'ltr',
      pbThickness: 3,
      hasProgressBar: true,
      text: '',
      textColor: '#3764eb',
      textPosition: 'center-center',
      maxTime: -10,
      minTime: 300,
    }),
    NgxUiLoaderRouterModule.forRoot({ showForeground: false }),
    NgxUiLoaderHttpModule.forRoot({
      showForeground: false,
    }),
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
