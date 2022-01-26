import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { CountdownConfig } from 'ngx-countdown';
import { formatDuration, Interval, intervalToDuration } from 'date-fns';
import { Gallery } from 'src/app/models/gallery.interface';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  items!: MenuItem[];
  timerConfig: CountdownConfig = {};
  imageCount = 18;
  images: Gallery[] = [];
  transformations = [
    {
      width: 1600,
      height: 1900,
    },
  ];
  imagekitEndpoint = 'https://ik.imagekit.io/0sin2owk1ts/gallery';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // start countdown timer
    this.countdown();

    // declare nav
    this.items = [
      {
        label: 'Love Story',
        routerLink: [''],
        fragment: 'story',
      },
      {
        label: 'The Wedding',
        routerLink: [''],
        fragment: 'wedding',
      },
      { label: 'Photo Album', routerLink: [''], fragment: 'album' },
      {
        label: 'ROM Stream',
        url: 'https://youtu.be/8yjT0I6v_n8',
        target: '_blank',
      },
      { label: 'Directions', routerLink: [''], fragment: 'directions' },
    ];

    // implement navbar transition
    const header = $('#navbar');
    const pos = header.offset();

    $(window).scroll(function () {
      if (
        $(this).scrollTop()! > pos!.top + 500 &&
        !header.hasClass('menubar-float')
      ) {
        header.fadeOut('fast', function () {
          $(this).addClass('menubar-float').fadeIn(200);
        });
      } else if (
        $(this).scrollTop()! <= pos!.top + 500 &&
        header.hasClass('menubar-float')
      ) {
        header.fadeOut('fast', function () {
          $(this).removeClass('menubar-float').fadeIn(100);
        });
      }
    });

    // setup gallery
    for (let i = 1; i <= this.imageCount; i++) {
      this.images.push({
        src: `${this.imagekitEndpoint}/${i}.jpg`,
        thumb: `${this.imagekitEndpoint}/tr:w-0.2/${i}.jpg`,
      });
    }
  }

  @HostListener('window:scroll', [])
  onWindowsScroll() {
    if (this.router.navigated) this.router.navigated = false;
  }

  private countdown() {
    this.timerConfig.leftTime = 1645356600000;
    this.timerConfig.formatDate = () => {
      const interval: Interval = { start: new Date(), end: 1645356600000 };
      const duration = intervalToDuration(interval);
      return formatDuration(duration);
    };
  }
}
