import { Routes } from '@angular/router';
import { AboutUs, Events, Home, Imprint, Login, Mission, PartnerWithUs, PrivacyPolicy, TermAndCondition, TermAndUse } from './services/constant';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent)},
    { path: Home, loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent)},
    { path: AboutUs, loadComponent: () => import('./pages/about-us/about-us.component').then((c) => c.AboutUsComponent)},
    { path: Mission, loadComponent: () => import('./pages/mission/mission.component').then((c) => c.MissionComponent)},
    { path: PartnerWithUs, loadComponent: () => import('./pages/partner-with-us/partner-with-us.component').then((c) => c.PartnerWithUsComponent)},
    { path: Events, loadComponent: () => import('./pages/events/events.component').then((c) => c.EventsComponent)},
    { path: Login, loadComponent: () => import('./pages/login/login.component').then((c) => c.LoginComponent)},
    { path: Imprint, loadComponent: () => import('./shared/imprint/imprint.component').then((c) => c.ImprintComponent)},
    { path: PrivacyPolicy, loadComponent: () => import('./shared/privacy-policy/privacy-policy.component').then((c) => c.PrivacyPolicyComponent)},
    { path: TermAndCondition, loadComponent: () => import('./shared/term-condition/term-condition.component').then((c) => c.TermConditionComponent)},
    { path: TermAndUse, loadComponent: () => import('./shared/term-use/term-use.component').then((c) => c.TermUseComponent)},
    { path: '**', loadComponent: () => import('./pages/not-found/not-found.component').then((c) => c.NotFoundComponent)}
];
