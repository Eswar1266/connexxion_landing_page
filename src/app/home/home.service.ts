import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
    // Capturing offset top state once on page load as it is not deteministic after page navigation
    horzBannerOffetTop = 0;
}