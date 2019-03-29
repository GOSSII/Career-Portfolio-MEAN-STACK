import { Component, OnInit } from '@angular/core';
import { ContactListService } from 'src/app/services/contact-list.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  title: string;
  contact: Contact;

  constructor(
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private contactListService: ContactListService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.contact = new Contact();

    this.activatedRoute.params.subscribe(params => {
      this.contact._id = params.id;
    });

    if (this.title === 'Edit Todo') {
      this.getContact(this.contact);
    }
  }

  private getContact(contact: Contact): void {
    this.contactListService.getContact(contact).subscribe(data => {
      console.log(data);
      this.contact = data.todo;
    });
  }

  onDetailsPageSubmit(): void {
    switch (this.title) {
      case 'Add Todo':
      console.log("data", this.contact);
      this.contactListService.addContact(this.contact).subscribe(data => {
        if (data.success) {
          this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
          this.router.navigate(['/contact/contact-list']);
        } else {
          this.flashMessage.show('Add Todo Failed', {cssClass: 'alert-danger', timeOut: 3000});
          this.router.navigate(['/contact/contact-list']);
        }
      });
      break;

      case 'Edit Todo':
      this.contactListService.editContact(this.contact).subscribe(data => {
        if (data.success) {
          this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
          this.router.navigate(['/contact/contact-list']);
        } else {
          this.flashMessage.show('Edit Todo Failed', {cssClass: 'alert-danger', timeOut: 3000});
          this.router.navigate(['/contact/contact-list']);
        }
      });
      break;
    }
  }

}
