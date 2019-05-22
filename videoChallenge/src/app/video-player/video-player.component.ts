import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Clip } from '../../entities/Clip';
import { ConfirmationService } from 'primeng/api';
import { VideoPlayerService } from '../../services/videoPlayer.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  videos: Clip [];
  videoSelected: Clip;
  showForm: boolean;
  showVideoPlayer: boolean;
  cols: any;
  pathVideo: string;
  

  constructor(private confirmationService: ConfirmationService, private videoPlayerService: VideoPlayerService) {
  }

  ngOnInit() {
    this.pathVideo =this.videoPlayerService.base_path+"0";
    this.videos = [];
    this.cols= [];
    this.videoPlayerService.addFatherVideo(this.videos);
    this.generateColumns();
    this.showForm =false;
    this.showVideoPlayer =true;
  }

  public getVideos (event) {
    this.videos = event.videos;
    this.showForm = event.showMe;
    this.showVideoPlayer = true;
  }

  public createClip (){
    this.videoSelected = new Clip();
    this.showForm = true;
    this.showVideoPlayer = false;
  }

 

  private generateColumns (){
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'startTime', header: 'Start time' },
      { field: 'endTime', header: 'Final time' },
    ];
  }

  public editVideo (video: Clip){
    this.showForm= true;
    this.showVideoPlayer = false;
    this.videoSelected = video;
  }

  public confirmDeleteVideo (video: Clip){
    this.videoSelected = video;
    this.confirmationService.confirm({
      key: "confirmDelete",
      message: 'Are you sure that you want to delete this video'
    });
  }

  public deleteVideo(){
    this.videoPlayerService.deleteVideo(this.videos, this.videoSelected);
  }
  
  public playVideo(video: Clip){
    let videoPlayer: any;
    videoPlayer = document.querySelector('video#vVideoPlayer');
    this.pathVideo = this.videoPlayerService.getPathVideo(video);
    videoPlayer.load();
    videoPlayer.play();
  }
}
