
// import { LightningElement, api, wire } from 'lwc';
// import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
// import OPPORTUNITY_LINE_ITEMS_FIELD from '@salesforce/schema/OpportunityLineItem.Opportunity.AccountId';

// export default class OpportunityLineItems extends LightningElement {
//     @api recordId; // This will get the Account Id from the context

//     @wire(getRecord, { recordId: '$recordId', fields: [OPPORTUNITY_LINE_ITEMS_FIELD] })
//     account;

//     get opportunityLineItems() {
//         var data = getFieldValue(this.account.data, OPPORTUNITY_LINE_ITEMS_FIELD);
//         console.log(data);
//         return data;
//     }
// }


// opportunityLineItems.js
// import { LightningElement, api, wire } from 'lwc';
// import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

// import OPPORTUNITIES_FIELD from '@salesforce/schema/Account.Opportunities';

// export default class OpportunityLineItems extends LightningElement {
//     @api recordId; // This will get the Account Id from the context

//     @wire(getRecord, { recordId: '$recordId', fields: [OPPORTUNITIES_FIELD] })
//     account;

//     get opportunities() {
//         return getFieldValue(this.account.data, OPPORTUNITIES_FIELD);
//     }
// }
// opportunityList.js
// import { LightningElement, wire, api, track } from 'lwc';
// import getOpportunities from '@salesforce/apex/OpportunityController.getOpportunities';

// export default class OpportunityList extends LightningElement {
//     @api recordId; // This is the Account Id
//     @track opportunities;

//     @wire(getOpportunities, { accountId: '$recordId' })
//     wiredOpportunities({ error, data }) {
//         if (data) {
//             this.opportunities = data;
//             this.error = undefined;
//         } else if (error) {
//             this.error = error;
//             this.opportunities = undefined;
//         }
//     }
// }


// import { LightningElement, wire , api } from 'lwc';
// import  getOpportunities  from '@salesforce/apex/GetOpportunityProduct.getOpportunities'; 

// export default class OpportunityLineItems extends LightningElement {
  
//   @api accountId ; 

//   @wire(getOpportunities, { params: { accountId: this.accountId } })
//   opportunities;

//   error;

//   get hasData() {
//     var data = this.opportunities && this.opportunities.data && this.opportunities.data.length > 0;
//     console.log(data);
//     return data;

//   }

//   get hasError() {
//     var data = this.opportunities && this.opportunities.error;
//     console.log(data);
//     return data;
//   }
// }

import { LightningElement, api, wire } from 'lwc';
// import getData from '@salesforce/apex/FetchData.FetchDataFromOpp'
import  getOpportunities  from '@salesforce/apex/GetOpportunityProduct.getOpportunities'; 
export default class DisplayOppLineItem extends LightningElement {
    @api
    recordId;
    name='Opportunity Page details'
    columns = [
     
        { label: 'Product ID', fieldName: 'Product2Id', type: 'text' },
        { label: 'Product Name', fieldName: 'Name', type: 'text' },
        { label: 'Quantity', fieldName: 'Quantity', type: 'text' },
        { label: 'Service Date', fieldName: 'ServiceDate', type: 'date' },
        { label: 'Opportunity Name', fieldName: 'Name', type: 'text' } 
       
    ];
 
    lineItems //returned result will be here
   
    @wire( getOpportunities,{AccID:'$recordId'})
    
    oppProduct({data,error}){
        if(data){
           this.lineItems=data;
           console.log(data);
        }
    else if(error)
    console.error('Error fetching Opportunity Line Items:', error);
    };
 
 
   
}