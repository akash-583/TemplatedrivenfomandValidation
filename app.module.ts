import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      FormsModule,
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }