import { LightningElement , api , wire } from 'lwc';
import { getRecord , getFieldValue  } from 'lightning/uiRecordApi';

//import NAME_FIELD from '@salesforce/schema/Account.Name'
//import PHONE_FIELD from '@salesforce/schema/Account.Phone'

const  FIELDS = [
    'Account.Name',
    'Account.Phone',
]

export default class WireAdapterDemo extends LightningElement {

    @api recordId; //it will be public and fetches the id of a account

    @wire(getRecord , {recordId : 'recordId' , fields : FIELDS  })
    record;  //data and error will come 
    
    get name(){  
      //  return this.record.data ? getFieldValue(this.record.data , 'Account.Name') : '';
      console.log( this.record.data.fields.Name.Value);
      return this.record.data.fields.Name.Value ;
    }

    get phone(){  
     //   return this.record.data ? getFieldValue(this.record.data ,'Account.Phone'  ) : '';
     console.log( this.record.data.fields.Phone.Value);
     return this.record.data.fields.Phone.Value ;
    }

}