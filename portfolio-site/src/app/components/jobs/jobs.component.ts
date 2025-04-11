import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

interface Job {
  company: string;
  location: string;
  position: string;
  duration: string;
  responsibilities: string[];
}

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {
  jobs: Job[] = [
    {
      company: 'Advisicon',
      location: 'Vancouver, WA (Hybrid)',
      position: 'Lead Developer',
      duration: '4/2024 - 3/2025',
      responsibilities: [
        'Lead Developer that led team of 2 developers, 2 interns, and project manager. Including training and keeping documentation of products up to date. Worked on Angular 18 site with .NET 8 RESTful services and SQL Azure',
        '.NET 8 RESTful API as well as Stateful API for linking data between MS Project Online and Azure Dev Ops also using SMTP Notifications and SQL Logging. Worked for a customer to get their data completely synced between two systems in either an Extension for Project or Timed Service.',
        'Power Platform applications using Canvas Power app that also utilized Power Automate, and Dataverse for helping clients replace an existing Office 365 manual process of using Excel files and emailing'
      ]
    },
    {
      company: 'Lightstream',
      location: 'San Diego, CA (Remote)',
      position: 'Software Engineer III',
      duration: '10/2022 - 2/2024',
      responsibilities: [
        'Lead Developer that led team of 3 developers, 1 QA engineer, and project manager. Came up with Miro boards and documentation.',
        '.NET RESTful APIs for talking with 3rd party deposit lender with Newtonsoft JSON and utilizing Web Clients. Which stored data in SQL Server for thousands of requests per hour and millions of records.',
        'QA tool in Angular 16 and .NET to auto validate SSRS reports for hundreds of reports after deployments.',
        'Demoed GraphQL in C# .NET 8 with HotChocolate Nuget library.'
      ]
    },
    {
      company: 'Aya Healthcare',
      location: 'San Diego, CA (Remote)',
      position: 'Software Engineer IV',
      duration: '11/2020 - 10/2022',
      responsibilities: [
        'Lead Developer team of 4 developers, 2 QA engineers, and a project manager. Created documentation in Lucid Charts and Confluence. Lead training series for C# NET',
        'Created a SignalR Hub for push notifications to a Dashboard using Azure Event Grid for notifications for thousands of notifications a day.',
        'Helped upgrade from .NET Core 2.2 to .NET Core 3.1 then to .NET 6',
        'Refactored Angular JS to Angular 14 and changed front end calls to stop using nested subscribes and use RXJS and NGRX'
      ]
    },
    {
      company: 'BlueVolt',
      location: 'Portland, OR',
      position: 'Senior Software Developer',
      duration: '9/2018 - 11/2020',
      responsibilities: [
        'Moved a large SAAS app from instance-based SQL server 2014 to SQL Server Azure. The solution was also using Geo Replication and Elastic Pools.',
        'Worked on dashboard utilizing Angular 12 with ChartJS and Angular Material. This utilized a Data warehouse created with Entity Framework utilizing Azure Functions with EF .NET Core 3.1 to transfer hundreds of thousands of records on a CRON schedule every 30 minutes using.'
      ]
    },
    {
      company: 'Jeppesen Boeing',
      location: 'Wilsonville, OR',
      position: 'Senior Developer Contract',
      duration: '10/2017 - 9/2018',
      responsibilities: [
        'Worked on a large WPF application built with SOAP and restful services',
        'Created an Authentication service for users using JSON Web Tokens (JWT). This then led an effort to create a thin client web site for an admin site with Angular 6 to allow airports to track and change roles.'
      ]
    },
    {
      company: 'Pacific Seafood',
      location: 'Clackamas, OR',
      position: '.NET Programmer',
      duration: '1/2016 - 9/2017',
      responsibilities: [
        'Worked on major applications of WPF frontend utilizing Prism',
        'SQL Server Transaction Replication custom development to take orders from satellite offices to a central office for accounting in near real time.',
        'Created a custom WPF Mapping utility with Bing Maps for boat tracking'
      ]
    },
    {
      company: 'Wellero',
      location: 'Portland, OR',
      position: 'Software Developer',
      duration: '10/2014 - 12/2015',
      responsibilities: [
        'Led and designed Payment Gateway 3rd party custom integration',
        'Performed X12 EDI parsing in C# for healthcare benefits and eligibility'
      ]
    },
    {
      company: 'Qmedtrix, Inc',
      location: 'Portland, OR',
      position: 'Junior Software Developer',
      duration: '11/2012 - 10/2014',
      responsibilities: [
        'WPF application with WCF service API and Prism library for modules',
        'SSRS creation of reports through C# to work with that application'
      ]
    }
  ];
}
