import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//UI Components
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';

//External Libraries
import { ChartsModule } from 'ng2-charts';
import { AngularCesiumModule } from 'angular-cesium';
import { ParticlesModule } from 'angular-particle';

//Components
import { AppComponent } from './app.component';
import { FactorIceareaComponent } from './factor-icearea/factor-icearea.component';

//Services
import { ComponentToggleService } from './component-toggle.service';
import { DataProviderService } from './data-provider.service';
import { FactorIceageComponent } from './factor-iceage/factor-iceage.component';
import { FactorSealevelComponent } from './factor-sealevel/factor-sealevel.component';

@NgModule({
  declarations: [
    AppComponent,
    FactorIceareaComponent,
    FactorIceageComponent,
    FactorSealevelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSliderModule,
    MatCardModule,
    ChartsModule,
    AngularCesiumModule.forRoot(),
    ParticlesModule
  ],
  providers: [
    ComponentToggleService,
    DataProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
