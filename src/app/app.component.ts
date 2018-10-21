import { Component, OnInit } from '@angular/core';
import { ComponentToggleService } from './component-toggle.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  factsArray = ["Global average sea level rose roughly eight inches from 1880 – 2009.",
                "The average annual rate of global sea level rise accelerated from 1993 – 2008, increasing 65 – 90 percent above the 20th century average.",
                "The US East Coast and Gulf of Mexico experienced some of the world’s fastest rates of sea level rise in the 20th century due to local and regional factors.",
                "In the past 100 years, the Environmental Protection Agency did report that the sea level has just risen by 6-8 inches.",
                "The Greenland ice sheet measures about 650,000 square miles. If all this ice melts, the sea level will rise by about 20 feet.",
                "Many major cities are situated in low-lying coastal areas. They will be inundated in case the sea levels rise over 6 feet.",
                "The IPCC predicts that the sea levels could rise by 10-23 inches by 2100.",
                "According to NASA, the polar ice caps are melting at a dangerous rate of 9% in every decade."
              ];
  tipsArray= ["Plant Trees! A greener planet never hurt anybody!",
              "Why travel alone in a personal vehicle when you can pool with friends? Guess what, it reduces the CFCs emitted in the atmosphere as well!",
              "When was the last time you went cycling with your kids?",
              "And always remember the three magical words: REDUCE. REUSE. RECYCLE!",
              "Pay attention to how you use water, a little change can make a BIG difference!",
              "Why not turn off the electrical appliances when not in use? It saves money, and it SAVES THE PLANET!",
              "CFLs are lighter, brighter, and much cheaper than the traditional bulbs!",
              "Go PaperFree! It's a Smart Generation!",
            ];
  i = 1;
  facts: string = this.factsArray[0];
  tips: string = this.tipsArray[0];

  constructor(private componentToggleService : ComponentToggleService) {
    setInterval(()=> {
      this.facts = this.factsArray[this.i];
      this.tips = this.tipsArray[this.i];
      this.i++;
      if(this.i==8)
        this.i = 0;
    },10000); 
  }

  //Particles
  particleParams: object = {};
  ngOnInit() {
    this.particleParams = {
      particles: {
              number: {
                  value: 400,
              },
              size: {
                value: 2,
              },
              color: {
                  value: '#ffffff'
              },
              shape: {
                  type: 'circle',
              },
              line_linked: {
                enable: false,
              },
              move: {
                direction: 'bottom-right',
              },
      }
    };
  }

  toggleIceArea() {
    this.componentToggleService.setIceAreaState('in');
  }

  toggleIceAge() {
    this.componentToggleService.setIceAgeState('in');
  }

  toggleSeaLevel() {
    this.componentToggleService.setSeaLevelState('in');
  }

  //testButtonFunction
  check() {
    console.log("testing");
  }
}
