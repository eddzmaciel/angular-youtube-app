import { Video } from './../../models/youtube.models';
import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos: Video[] = [];

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit(): void {
    this.youtubeService.getVideos().subscribe((resp) => {
      //hacemos esto para pushear los videos al arreglo donde ya hay videos existentes
      this.videos.push(...resp);
      console.log(' this.videos: ', this.videos);
    });
  }

}
