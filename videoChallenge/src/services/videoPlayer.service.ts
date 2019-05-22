import { Injectable } from "@angular/core";
import { Clip } from "../entities/Clip";

@Injectable()
export class VideoPlayerService {
    base_path = "../../assets/videos/pruebas.mp4#t=";
    public addFatherVideo (videos: Clip[]){
        let firstVideo = new Clip();
        firstVideo.id = 1;
        firstVideo.name = "Father video";
        firstVideo.startTime = "00:00";
        firstVideo.endTime = "00:52";
        firstVideo.pathVideo = "../../assets/videos/pruebas.mp4#t=0";
        firstVideo.isFather = true;
        videos.push(firstVideo);
      }

      public deleteVideo(videos: Clip[], videoSelected: Clip){
        let index = videos.indexOf(videoSelected);
        videos.splice(index, 1);
      }

      public getPathVideo (video: Clip) : string{
        let pathVideo;
        pathVideo =this.base_path+video.startTime+","+video.endTime;
        return pathVideo;
      }
}