import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MastheadComponent } from './components/masthead/masthead.component';
import { DumbCounterComponent } from './components/dumb-counter/dumb-counter.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UiModule } from './features/ui/ui.module';

@NgModule({
  declarations: [
    // components
    AppComponent,
    MastheadComponent,
    DumbCounterComponent,
    DashboardComponent,
    NavigationComponent,
  ],
  imports: [
    // use these other modules
    BrowserModule,
    AppRoutingModule,
    UiModule,
  ],
  providers: [],
  bootstrap: [AppComponent], // root level module has this.
})
export class AppModule {}
