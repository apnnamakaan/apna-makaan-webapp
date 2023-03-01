import { ChatComponent } from './pages/chat/chat.component';
import { PropretyComponent } from './pages/proprety/proprety.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { YourListingComponent } from './pages/your-listing/your-listing.component';
import { PredictComponent } from './pages/predict/predict.component';
import { SellComponent } from './pages/sell/sell.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DiscoverComponent,
    title: 'Explore - Apna Makaan',
  },
  {
    path: 'properties/:city/:bed/:bath/:garage/:min/:max',
    component: DiscoverComponent,
    title: 'Explore - Apna Makaan',
  },
  {
    path: 'predict',
    component: PredictComponent,
    title: 'Price Predict - Apna Makaan',
  },
  { path: 'sell', component: SellComponent, title: 'Sell - Apna Makaan' },
  {
    path: 'listing',
    component: YourListingComponent,
    title: 'Listing - Apna Makaan',
  },
  {
    path: 'profile',
    component: ProfileComponent,
    title: 'Profile - Apna Makaan',
  },
  {
    path: 'login',
    component: SigninComponent,
    title: 'Login - Apna Makaan',
  },
  { path: 'signup', component: SignupComponent, title: 'Signup - Apna Makaan' },

  {
    path: 'property/:id',
    component: PropretyComponent,
    title: 'Property - Apna Makaan',
  },
  {
    path: 'chat',
    component: ChatComponent,
    title: 'Chat - Apna Makaan',
  },
  {
    path: 'chat/:id',
    component: ChatComponent,
    title: 'Chat - Apna Makaan',
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent,
    title: 'Error - Apna Makaan',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
