import { Injectable } from '@angular/core';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contacts: Contact[] = [];
  private nextId: number = 1;

  constructor() {}

  addContact(contact: Contact) {
    contact.id = this.nextId++;
    this.contacts.push(contact);
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

  getContact(id: number): Contact | undefined {
    return this.contacts.find((c) => c.id === id);
  }

  updateContact(updatedContact: Contact) {
    const index = this.contacts.findIndex((c) => c.id === updatedContact.id);
    if (index !== -1) {
      this.contacts[index] = updatedContact;
    }
  }

  deleteContact(id: number) {
    this.contacts = this.contacts.filter((c) => c.id !== id);
  }

  searchContacts(query: string): Contact[] {
    return this.contacts.filter(
      (c) =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.phone.includes(query) ||
        c.email.toLowerCase().includes(query.toLowerCase())
    );
  }
}
