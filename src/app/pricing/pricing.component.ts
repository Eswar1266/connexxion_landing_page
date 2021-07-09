import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PricingModalComponent } from './pricing-modal/pricing-modal.component';
import { Iplans, PlanTypes } from './pricing.interface';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.less']
})
export class PricingComponent implements OnInit {
  plans: Iplans = {
    starter: [
      '2 Users',
      '300 test Attempts Annually',
      'Valid for 12 Months',
      'Access to Digital Skills',
      'Access to 20+ Coding Languages',
      'Access to Aptitude Skills',
      'Add Your Own Questions',
      'Automated Video Interviews',
      'AI-Powered Analytics',
      'AI-powered Cheating Prevention',
      'Chat/Email Support'
    ],
    enterprise: [
      '2 Users',
      '1200 Test Attempts Annually',
      'Valid for 12 Months',
      'Access to 100+ Premium Skills',
      'Access to Enterprise Application Skills',
      'Live Coding Interview',
      'AI LogicBox',
      'AI EnglishPro',
      'Basic Employer Branding',
      'Ready Integrations with Greenhouse, Workable, Bullhorn, HireCraft, Ceipal, SmartRecruiters, iCIMS, BambooHR',
      'Access to imocha API',
      'Phone Support',
      'Dedicated Customer Success'
    ],
    custom: [
      'Multiple Users',
      'Custom Number of Test Attempts',
      'Multiple Custom Skill Tests',
      'Valid for 12 Months',
      'Custom Integration with Oracle Taleo Cloud, LinkedIn Talent Hub, Lever, or Your Choice of ATS',
      'Advanced Employer Branding (Email domain, URL mapping)',
      'Custom Features Development',
      '24*7 Customer Support'
    ]
  };

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dialog.afterAllClosed.subscribe(result => {
      console.log("Contact Modal Closed");
    })
  }

  openContactModal(type: PlanTypes) {
    let width = '40vw';
    if (window.innerWidth < 1000) {
      width= '80vw';
    }
    if (window.innerWidth < 400) {
      width = '95vw';
    }

    this.dialog.open(PricingModalComponent,{
      width,
      data: {type}
    });
  }

}
