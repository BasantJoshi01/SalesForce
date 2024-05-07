import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
    greeting = "Basant";

    handleClick(e){  

        this.greeting = this.template.querySelector("lightning-input").value;
        console.log(this.greeting);
    }
}