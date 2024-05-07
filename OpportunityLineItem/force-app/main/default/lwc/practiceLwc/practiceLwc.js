import { LightningElement  , api} from 'lwc';

export default class PracticeLwc extends LightningElement {
    message = "Public Property";
    @api recordId;
    areDetailVisible = false;

    handleChange(e){  
            this.areDetailVisible = e.target.checked;
    }

}