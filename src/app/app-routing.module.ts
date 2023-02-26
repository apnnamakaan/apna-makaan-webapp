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
  { path: '', component: DiscoverComponent },
  { path: 'predict', component: PredictComponent },
  { path: 'sell', component: SellComponent },
  { path: 'listing', component: YourListingComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'property', component: PropretyComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
