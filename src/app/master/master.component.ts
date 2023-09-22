import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  @ViewChild('myVideo') video!: ElementRef<HTMLVideoElement>;
  @ViewChild('myVideo2') video2!: ElementRef<HTMLVideoElement>;


  mainCoordinator = '../../assets/MainCoordinators/keyur.jpeg'

  mainCoordinators = [
    { id: 1, img: '../../assets/MainCoordinators/keyur.jpeg', name: 'Keyur Kakadiya' },
    { id: 2, img: "../../assets/MainCoordinators/1.jpeg", name: 'Vrushant Bhanderi' },
    { id: 3, img: "../../assets/MainCoordinators/yashPansuriya.jpeg", name: 'Yash Pansheriya' },
    { id: 4, img: "../../assets/MainCoordinators/2.jpeg", name: 'Jash Shah' },
    { id: 5, img: "../../assets/MainCoordinators/shailija.png", name: 'Shailja Patel' },
    { id: 6, img: "../../assets/MainCoordinators/shivani.jpeg", name: 'Shivani Sopariwala' },
  ];
  slides = [
    { id: 1, img: '../../assets/FacultyCoordinators/vandanaJoshi.jpeg', name: 'Prof. Vandana joshi' },
    { id: 2, img: '../../assets/FacultyCoordinators/nitiyaKomalan.jpeg', name: 'Ms. Nitya komalan' },
    { id: 3, img: "../../assets/FacultyCoordinators/yuktiDesai.jpeg", name: 'Ms. Yukti Desai' },
  ];


  constructor() {
  }

  ngOnInit(): void {
    // this.playVideo();
    this.onInitPlay();
  }

  onInitPlay() {
    var hiddencomponent = document.getElementById('hiddencomponent');
    var video1 = document.getElementById('video1');
    var video2 = document.getElementById('video2');
    if (hiddencomponent && video1 && video2) {
      console.log("1")
      hiddencomponent.click();
      // hiddencomponent.style.display = 'none';
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.playVideo();
    }, 1000);
  }

  playVideo() {

    console.log("2")
    if (this.video) {
      this.video.nativeElement.play();
    }
    if (this.video2) {
      this.video2.nativeElement.play();
    }
  }

  goToLink(url: string) {
    window.open(url, "_blank")
  }

}
