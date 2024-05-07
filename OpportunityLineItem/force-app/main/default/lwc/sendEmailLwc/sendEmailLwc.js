import { LightningElement  , api  } from 'lwc';

import testing from '@salesforce/apex/Test.testing'
//import { getRecord } from 'lightning/uiRecordApi';
//import FIELD_NAME  from '@salesforce/schema/Account.Name';



export default class SendEmailLwc extends LightningElement {

    @api recordId;

    //get account name dynamicaly
    //@wire(getRecord , {recordId : 'recordId' , fields : FIELD_NAME})
    //record;

    // get Name(){  
    //     let name = this.record.data.fields.Name.Value;
    //     let payload =  `Send Mail to ${name}`;
    //     console.log(payload);
    //     return  payload;
    // }
    

    // handleChange(e){  
    //     this.Mail = e.target.value;
    // }

    handleClick (){  

        testing().than(result=>{  
            console.log("Sucess", result );
        }).catch(error =>{  
            console.log('Failed' , error);
        })

        // try {
        //     let result = await testing()
        //     console.log(result);
        // } catch (error) {
        //     console.log(error);
        // }
    }
}