import { Component } from '@angular/core';
import { ContactService } from './contact.service';
import { Contact } from './contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.page.html',
})
export class ContactListPage {
  contacts: Contact[] = [];
  searchQuery: string = '';

  constructor(private contactService: ContactService) {}

  ionViewWillEnter() {
    this.loadContacts();
  }

  loadContacts() {
    this.contacts = this.contactService.getContacts();
  }

  deleteContact(id: number) {
    this.contactService.deleteContact(id);
    this.loadContacts();
  }

  searchContacts() {
    this.contacts = this.contactService.searchContacts(this.searchQuery);
  }
}
