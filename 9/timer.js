

// countdown timer for olympics 

const date1= new Date(); 
const date2 = new Date("2028-07-14T00:00:00"); 
// rat ke barah baje start 
const date = date2-date1; 

const days = Math.floor(date/(1000*60*60*24));

// it will shows the days 

const hour = (date/1000*60*60)%24; 
// because we want how much after cutting down days


