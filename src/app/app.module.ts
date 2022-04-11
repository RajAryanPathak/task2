import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { PostComponent } from './post/post.component';
import { PostContainerComponent } from './post-container/post-container.component';
import { DarkmodeComponent } from './darkmode/darkmode.component';
import { BottbuttonComponent } from './bottbutton/bottbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    TestcomponentComponent,
    PostComponent,
    PostContainerComponent,
    DarkmodeComponent,
    BottbuttonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
