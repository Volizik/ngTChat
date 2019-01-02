import { BrowserModule } from '@angular/platform-browser';
import {NgScrollbarModule} from "ngx-scrollbar";
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatHeaderComponent } from './components/chat/chat-header/chat-header.component';
import { ChatFooterComponent } from './components/chat/chat-footer/chat-footer.component';
import { ChatBodyComponent } from './components/chat/chat-body/chat-body.component';
import { ChatMessageComponent } from './components/chat/chat-message/chat-message.component';
import { UserLinkComponent } from './components/sidebar/user-link/user-link.component';
import { UsersListComponent } from './components/sidebar/users-list/users-list.component';
import {DotDotDotPipe} from "./pipes/dot-dot-dot.pipe";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ChatComponent,
    ChatHeaderComponent,
    ChatFooterComponent,
    ChatBodyComponent,
    ChatMessageComponent,
    UserLinkComponent,
    UsersListComponent,
    DotDotDotPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgScrollbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
