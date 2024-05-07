import { LightningElement } from 'lwc';

export default class ListRendering extends LightningElement {

    contacts = [
        { id: "", name: "John", title: "Engineer" },
        { id: "", name: "Alice", title: "Designer" },
        { id: "", name: "Bob", title: "Developer" },
        { id: "", name: "Emily", title: "Manager" },
        { id: "", name: "David", title: "Analyst" },
        { id: "", name: "Sarah", title: "Consultant" },
        { id: "", name: "Michael", title: "Architect" },
        { id: "", name: "Olivia", title: "Programmer" },
        { id: "", name: "Ethan", title: "Scientist" },
        { id: "", name: "Sophia", title: "Coordinator" }
    ]

    get  randomNumber(){  
        var a =   Math.floor((Math.random() * 100000 )+1);
        return a;
    }
}