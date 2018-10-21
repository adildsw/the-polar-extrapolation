import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  
declare var Cesium: any;
Cesium.buildModuleUrl.setBaseUrl('/assets/cesium/'); // If youre using Cesium version >= 1.42.0 add this line
Cesium.BingMapsApi.defaultKey = "AiuR2zrmx9hDkf2NLPxITNzubdkv1aPEAf9w-D8zU6O4qnycVC9Hw2gJb-_l-Smx";
platformBrowserDynamic().bootstrapModule(AppModule);
