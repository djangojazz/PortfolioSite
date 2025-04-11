import { Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { CertificationsComponent } from './components/certifications/certifications.component';

export const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutMeComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: '**', redirectTo: '/about' }
];
