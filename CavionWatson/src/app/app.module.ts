import { NgModule, ErrorHandler } from '@angular/core';
import { APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FormsModule }   from '@angular/forms';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TicketComponent } from  '../app/dashboard/ticket.component';
import { TicketDetailsComponent } from  '../app/ticket-details/ticket-details.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChatBotComponent } from  './chatbot.component';
import { HttpClientModule } from  '@angular/common/http';
import { LoginService } from './services/login.service';
import { ChatbotService } from  './services/chatbot.service';
import { AppConfig } from './base/appconfig';
import { LoginPage } from "../pages/login/login";
import { AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database-deprecated';
import { firebase } from "../app/base/firebase";
import { AngularFireModule } from 'angularfire2';
import {TicketService} from  './services/ticketService';
import {ReversePipe} from './ReversePipe';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ChatBotComponent,
    TicketComponent,
    TicketDetailsComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ChatBotComponent,
    TicketComponent,
    TicketDetailsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoginService,
    ChatbotService,
    TicketService,
    AppConfig,
    AngularFireDatabase,
    { provide: APP_INITIALIZER, useFactory: (config: AppConfig) => () => config.load(), deps: [AppConfig], multi: true },
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
