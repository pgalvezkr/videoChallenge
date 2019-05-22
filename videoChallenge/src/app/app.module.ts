import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PanelModule} from 'primeng/panel';
import {ClipComponent } from './clip/clip.component';
import {CalendarModule} from 'primeng/calendar'
import {InputTextModule} from 'primeng/inputtext';
import {MessageModule} from 'primeng/message';
import {FormsModule} from '@angular/forms';
import {InputMaskModule} from 'primeng/inputmask';
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {TooltipModule} from 'primeng/tooltip';
import { ClipService } from '../services/clip.service';
import { VideoPlayerService } from '../services/videoPlayer.service';
import {MessagesModule} from 'primeng/messages';

@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    ClipComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    PanelModule,
    CalendarModule,
    InputTextModule,
    MessageModule,
    MessagesModule,
    InputMaskModule,
    TableModule,
    ConfirmDialogModule,
    TooltipModule
  ],
  providers: [ConfirmationService, ClipService, VideoPlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
