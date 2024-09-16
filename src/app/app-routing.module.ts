import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContactFormPage } from './contact/contact-form.page';
import { ContactListPage } from './contact/contact-list.page';

const routes: Routes = [
  { path: '', component: ContactListPage },
  { path: 'contact-form', component: ContactFormPage },
  { path: 'contact-form/:id', component: ContactFormPage },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
