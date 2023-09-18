import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectoryComponent } from './components/directory/directory.component';
import { HttpClientModule } from '@angular/common/http'
import { UserViewComponent } from './components/user-view/user-view.component';
import { DirectoryItemComponent } from './components/directory-item/directory-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectoryComponent,
    UserViewComponent,
    DirectoryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
