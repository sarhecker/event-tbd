//these are placeholders in place of the database, when we have the actual database setup, we can remove this
const category = ['category1', 'category2', 'category3', 'category4', 'category5'];
import data from './event.json' with { type: "json" };

const eventWrapper = document.getElementById('eventlist_wrapper');

const events = data.events;

//algorithm below not efficient, imporve later after we finish frontend implementation 
category.forEach((e) => {

    // make the div for the category 
    const cat = document.createElement('div');
    cat.className = `${e}`; 
    const catText = document.createTextNode(e)
    cat.appendChild(catText); 

    const column = document.createElement('div'); 
    column.className = 'columns'
    // append the events to their corresponding category 
    events.forEach((i) => {
        if(i.category === e){
            const newevent = document.createElement('div');
            newevent.className = 'column is-2 bordered-column'; 
            const eventName = document.createTextNode(i.name); 
            newevent.appendChild(eventName); 
            
            column.appendChild(newevent);
        }
    })
    
    cat.appendChild(column); 

    eventWrapper.appendChild(cat);    

})
