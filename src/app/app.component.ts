import { AfterContentInit, AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import ScrollOut from 'scroll-out';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {
  title = 'connexion-landing';
  carouselCtx = 1;
  so: any;
  horzBannerEle: any;
  horzBannerWrapperEle: any;
  horzBannerScrollDistance = 0;
  horzBannerTopOffset = 0

  @HostListener('window:scroll', ['$event']) scrollHandler(e: MouseEvent) {
    const offsetTop = window.pageYOffset;
    console.log(offsetTop);
    if (offsetTop >= this.horzBannerTopOffset && offsetTop <= this.horzBannerScrollDistance + 75) {
      this.horzBannerWrapperEle.style.transform = "translateX(-" + (offsetTop - this.horzBannerTopOffset) + "px)";
    } else if (offsetTop < this.horzBannerTopOffset) {
      this.horzBannerWrapperEle.style.transform = "translateX(0)";
    } else {
      this.horzBannerWrapperEle.style.transform = `translateX(-${this.horzBannerScrollDistance -this.horzBannerTopOffset + 75}px)`;
    }
  }

  constructor() {

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
    this.horzBannerTopOffset = this.horzBannerEle.offsetTop;
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
