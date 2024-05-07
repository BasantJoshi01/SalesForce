import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId';
 
export default class ConLwc2 extends LightningElement {
  objectApiName = CONTACT_OBJECT;
  fields = [FIRSTNAME_FIELD, LASTNAME_FIELD, EMAIL_FIELD , ACCOUNT_FIELD];
  selectedAccountId = null;
 
  handleFirstNameChange(event) {
    this.firstName = event.target.value;
  }
 
  handleLastNameChange(event) {
    this.lastName = event.target.value;
  }
 
  handleEmailChange(event) {
    this.email = event.target.value;
  }

  //*  POP HAndling
   handleSuccess(event) {
    const toastEvent = new ShowToastEvent({
      title: "Contact created",
      message: "Record ID: " + event.detail.id ,
      variant: "success"
    });
    this.dispatchEvent(toastEvent);
  };
 
  handleAccountSelection(event) {
    this.selectedAccountId = event.detail.recordId;
  }
 
  async handleCreateContact() {
    const fields = {
      FirstName: this.firstName,
      LastName: this.lastName,
      Email: this.email,
      AccountId: this.selectedAccountId,
     
     
    };
 
   
      const record = await createRecord({
        apiName: this.objectApiName,
        fields,
      });
 
      const toastEvent = new ShowToastEvent({
        title: 'Contact created',
        message: `Contact ID: ${record.id}`,
        variant: 'success',
      });
     
 
      this.dispatchEvent(toastEvent);
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.selectedAccountId = null;
   
}
 
 
  //handleAccountSelection(event) { this.selectedAccountId = event.detail.recordId; }
}