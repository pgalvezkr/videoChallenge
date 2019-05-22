import { Injectable } from "@angular/core";
import { Clip } from "../entities/Clip";

@Injectable()
export class ClipService {

    video_time = "00:52";
    public existVideoOnList (video: Clip, videos: Clip[]): boolean{
        let existeVideo = false;
        videos.forEach(videoR => {
          if (videoR.id==video.id)
            existeVideo=true;
        });
        return existeVideo;
    }

    public addNewClip (video: Clip, videos: Clip[]){
        let valid = this.validTimeVideo(video);
        let existVideo = this.existVideoOnList(video, videos);
        if (valid.isValid){
            if(!existVideo){
                video.id = videos.length +1;
                videos.push(video);
            }
        }else{
            throw new Error (valid.message);
        }
        
    }

    private validTimeVideo (video: Clip){
        let valid = {isValid: false, message: ''};

        let starTimes= video.startTime.split(':');
        let finalTimes= video.endTime.split(':');
        let totalVideoTime= this.video_time.split(':');
        let starTimesMinutes = parseInt(starTimes[0].toString());
        let starTimesSeconds = parseInt(starTimes[1].toString());
        let finalTimesMinutes = parseInt(finalTimes[0].toString());
        let finalTimesSeconds = parseInt(finalTimes[1].toString());
        let totalVideoMinutes = parseInt(totalVideoTime[0].toString());
        let totalVideoSeconds = parseInt(totalVideoTime[1].toString());

        if (starTimesMinutes<=finalTimesMinutes && starTimesSeconds<=finalTimesSeconds)
            valid.isValid =true;
        else
            valid.message = 'The start time must be less than the final time'

        if (starTimesMinutes<=totalVideoMinutes && starTimesSeconds<=totalVideoSeconds
            && finalTimesMinutes<=totalVideoMinutes && finalTimesSeconds<=totalVideoSeconds)
            valid.isValid = valid.isValid && true;
        else
            valid.message = 'The start or final time must be less than the time of video'
        return valid;
        
        console.log(starTimes);
        console.log(finalTimes);
        console.log(totalVideoTime);
      
    }
}