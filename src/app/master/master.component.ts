import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'],
})
export class MasterComponent implements OnInit {
  @ViewChild('myVideo') video!: ElementRef<HTMLVideoElement>;
  @ViewChild('myVideo2') video2!: ElementRef<HTMLVideoElement>;

  mainCoordinator = '../../assets/MainCoordinators/keyur.jpeg';

  posters: any[] = [
    { id: 1, img: '../../assets/Events/1.jpg' },
    { id: 2, img: '../../assets/Events/2.png' },
    { id: 3, img: '../../assets/Events/3.png' },
    { id: 4, img: '../../assets/Events/4.jpg' },
    { id: 5, img: '../../assets/Events/5.png' },
    { id: 6, img: '../../assets/Events/6.png' },
    { id: 7, img: '../../assets/Events/7.png' },
    { id: 8, img: '../../assets/Events/8.jpg' },
    { id: 9, img: '../../assets/Events/9.png' },
    { id: 10, img: '../../assets/Events/10.png' },
    { id: 11, img: '../../assets/Events/11.png' },
    { id: 12, img: '../../assets/Events/12.jpg' },
    { id: 13, img: '../../assets/Events/13.jpg' },
  ];

  posterMakingTeam: any[] = [
    { id: 1, img: '../../assets/Postermaking/nehul.png', name: 'Nehul Vasava' },
    {
      id: 2,
      img: '../../assets/Postermaking/Drashti_Gor.png',
      name: 'Drashti Gor',
    },
    {
      id: 3,
      img: '../../assets/Postermaking/Shruti_Savani.png',
      name: 'Shruti Savani',
    },
    {
      id: 4,
      img: '../../assets/Postermaking/Abdul_Kadir.png',
      name: 'Abdul Kadir',
    },
    {
      id: 5,
      img: '../../assets/Postermaking/Kirtan_Kothwala.png',
      name: 'Kirtan Kothwala',
    },
    {
      id: 6,
      img: '../../assets/Postermaking/Jiya_Patel.png',
      name: 'Jiya Patel',
    },
    {
      id: 7,
      img: '../../assets/Postermaking/Prerna_Gattani.png',
      name: 'Prerna_Gattani',
    },
  ];

  marketingTeam = [
    { id: 1, img: '../../assets/Marketing/Aarohi_Desai.png', name: 'Aarohi Desai' },
    {
      id: 2,
      img: '../../assets/Marketing/Aryan Mehta.png',
      name: 'Aryan Mehta',
    },
    {
      id: 3,
      img: '../../assets/Marketing/Brahmi_Shah.png',
      name: 'Brahmi Shah',
    },
    {
      id: 4,
      img: '../../assets/Marketing/Keshvi_Choksi.png',
      name: 'Keshvi Choksi',
    },
    {
      id: 5,
      img: '../../assets/Marketing/Ria_Kangariwala.png',
      name: 'Ria Kangariwala',
    },
    {
      id: 6,
      img: '../../assets/Marketing/Riddhika_Cheruku.png',
      name: 'Riddhika Cheruku',
    },
    {
      id: 7,
      img: '../../assets/Marketing/Vansh_Golakiya.png',
      name: 'Vansh Golakiya',
    },
    {
      id: 8,
      img: '../../assets/Marketing/Varoon_Soneji.png',
      name: 'Varoon Soneji',
    },
    {
      id: 9,
      img: '../../assets/Marketing/Vishwaa_Shah.png',
      name: 'Vishwa Shah',
    },
  ]

  decorationTeam = [
    { id: 1, img: '../../assets/DecorationTeam/Diya_Prajapati.jpg', name: 'Diya Prajapati' },
    {
      id: 2,
      img: '../../assets/DecorationTeam/Drashti_Patel.png',
      name: 'Drashti Patel',
    },
    {
      id: 3,
      img: '../../assets/DecorationTeam/Hasti_Patel.png',
      name: 'Hasti Patel',
    },
    {
      id: 4,
      img: '../../assets/DecorationTeam/Helly_Diyora.png',
      name: 'Helly Diyora',
    },
    {
      id: 5,
      img: '../../assets/DecorationTeam/Heta_Patel.png',
      name: 'Heta Patel',
    },
    {
      id: 6,
      img: '../../assets/DecorationTeam/Khushee_Maru.png',
      name: 'Khushee Maru',
    },
    {
      id: 7,
      img: '../../assets/DecorationTeam/Khushi_Patel.png',
      name: 'Khushi Patel',
    },
    {
      id: 8,
      img: '../../assets/DecorationTeam/Krisha_Bhingradiya.png',
      name: 'Krisha Bhingradiya',
    },
    {
      id: 9,
      img: '../../assets/DecorationTeam/Pooja_Pandit.png',
      name: 'Pooja Pandit',
    }, {
      id: 10,
      img: '../../assets/DecorationTeam/Prapti_Shroff.png',
      name: 'Prapti Shroff',
    },
    {
      id: 11,
      img: '../../assets/DecorationTeam/Varsha_Sankar.png',
      name: 'Varsha Sankar.png',
    },
    {
      id: 12,
      img: '../../assets/DecorationTeam/Priyanshi_Kalsariya.png',
      name: 'Priyanshi Kalsariya',
    },
  ]

  mainCoordinators = [
    {
      id: 1,
      img: '../../assets/MainCoordinators/akshay.jpeg',
      name: 'Akshay Golakiya',
    },
    {
      id: 2,
      img: '../../assets/MainCoordinators/smit.jpg',
      name: 'Smit Pansuriya',
    },
    {
      id: 3,
      img: '../../assets/MainCoordinators/ayush.jpeg',
      name: 'Ayush Kayasth',
    },
    {
      id: 4,
      img: '../../assets/MainCoordinators/ansh.jpg',
      name: 'Ansh Mangukiya',
    },
    {
      id: 5,
      img: '../../assets/MainCoordinators/krish.jpg',
      name: 'Krish Padmani',
    },
    {
      id: 6,
      img: '../../assets/MainCoordinators/priya.jpeg',
      name: 'Priya Sisodiya',
    },
  ];

  slides = [
    {
      id: 1,
      img: '../../assets/FacultyCoordinators/vandanaJoshi.jpeg',
      name: 'Prof. Vandana joshi',
    },
    {
      id: 2,
      img: '../../assets/FacultyCoordinators/nitiyaKomalan.jpeg',
      name: 'Ms. Nitya komalan',
    },
    {
      id: 3,
      img: '../../assets/FacultyCoordinators/yuktiDesai.jpeg',
      name: 'Ms. Yukti Desai',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // this.playVideo();
    this.onInitPlay();
  }

  onInitPlay() {
    var hiddencomponent = document.getElementById('hiddencomponent');
    var video1 = document.getElementById('video1');
    var video2 = document.getElementById('video2');
    if (hiddencomponent && video1 && video2) {
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
    if (this.video) {
      this.video.nativeElement.play();
    }
    if (this.video2) {
      this.video2.nativeElement.play();
    }
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }

  navigateTo(id: number) {
    this.router.navigate(['updates2k23/rules', id]);
  }
}
