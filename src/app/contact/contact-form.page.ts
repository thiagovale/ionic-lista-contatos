import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from './contact.service';
import { Contact } from './contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.page.html',
})
export class ContactFormPage {
  contact: Contact = { id: 0, name: '', phone: '', email: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) {}

  ionViewWillEnter() {
    const contactIdParam = this.route.snapshot.paramMap.get('id');
    const contactId = contactIdParam ? +contactIdParam : null;

    if (contactId !== null) {
      const existingContact = this.contactService.getContact(contactId);
      if (existingContact) {
        this.contact = { ...existingContact };
      }
    }
  }

  saveContact() {
    if (this.contact.id === 0) {
      this.contactService.addContact(this.contact);
    } else {
      this.contactService.updateContact(this.contact);
    }
    this.router.navigate(['/']);
  }
}
