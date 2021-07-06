import { AfterContentInit, AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import ScrollOut from 'scroll-out';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {

  carouselCtx = 1;
  so: any;
  horzBannerEle: any;
  horzBannerWrapperEle: any;
  horzBannerScrollDistance = 0;
  horzBannerTopOffset = 0

  @HostListener('window:scroll', ['$event']) scrollHandler(e: MouseEvent) {
    const offsetTop = window.pageYOffset;
    if (offsetTop >= this.horzBannerTopOffset && offsetTop <= this.horzBannerScrollDistance + 75) {
      this.horzBannerWrapperEle.style.transform = "translateX(-" + (offsetTop - this.horzBannerTopOffset) + "px)";
    } else if (offsetTop < this.horzBannerTopOffset) {
      this.horzBannerWrapperEle.style.transform = "translateX(0)";
    } else {
      this.horzBannerWrapperEle.style.transform = `translateX(-${this.horzBannerScrollDistance -this.horzBannerTopOffset + 75}px)`;
    }
  }

  constructor(private homeService: HomeService) {

  }
  ngOnInit() {
    setInterval(() => {
      let radioBtn = <HTMLInputElement>document.getElementById(`radio${this.carouselCtx}`);
      radioBtn.checked =true;
      this.carouselCtx++;
      if (this.carouselCtx > 4) {
        this.carouselCtx = 1;
      }
    }, 5000);
  }

  ngAfterViewInit() {
    this.horzBannerEle = <HTMLElement>document.querySelector(".hscrollable-banner");
    this.horzBannerWrapperEle = <HTMLElement>document.querySelector(".hscrollable-banner__wrapper");
    if (!this.homeService.horzBannerOffetTop) {
      this.homeService.horzBannerOffetTop = this.horzBannerEle.offsetTop;
    }
    this.horzBannerTopOffset = this.homeService.horzBannerOffetTop;
    this.horzBannerScrollDistance = this.horzBannerTopOffset + this.horzBannerWrapperEle.scrollWidth - window.innerWidth;
    console.log(this.horzBannerTopOffset, this.horzBannerWrapperEle.scrollWidth, window.innerWidth, this.horzBannerScrollDistance);
    this.horzBannerEle.style.height = this.horzBannerScrollDistance + "px";
  }

  ngAfterContentInit() {
    this.so = ScrollOut({
      targets:'.title-card,.card,.banner-img,.carousel-content'
    });
  }

  ngOnDestroy() {
    this.so.teardown();
  }
}
