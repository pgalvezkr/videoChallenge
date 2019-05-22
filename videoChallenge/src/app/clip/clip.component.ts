import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Clip } from '../../entities/Clip';
import {Message} from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { ClipService } from '../../services/clip.service';

@Component({
  selector: 'app-clip',
  templateUrl: './clip.component.html',
  styleUrls: ['./clip.component.css'],
  providers: [MessageService]
})
export class ClipComponent implements OnInit {

  @Input() newClip: Clip;
  @Input() videos: Clip[];
  @Output() videosEmmitter = new EventEmitter();
  msgs: Message[];
  constructor(private clipService: ClipService) { }

  ngOnInit() {
    this.msgs = [];
  }

  public saveClip (){
    console.log("ESTA AQUI");
    this.msgs=[]
    
      try{
        this.clipService.addNewClip(this.newClip, this.videos);
        this.videosEmmitter.emit({ videos: this.videos, showMe: false });
      }catch (e){
        this.msgs.push({severity:'error', detail: e.message});
      }
    
  }

  public cancelClip (){
    this.newClip = new Clip();
    this.videosEmmitter.emit({ showMe: false, videos: this.videos});
  }
}
