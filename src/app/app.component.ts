import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import ScrollOut from 'scroll-out';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, AfterContentInit, OnDestroy {
  title = 'connexion-landing';
  carouselCtx = 1;
  so: any;
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

  ngAfterContentInit() {
    this.so = ScrollOut({
      targets:'.card,.banner-img,.carousel-content'
    });
  }

  ngOnDestroy() {
    this.so.teardown();
  }
}
