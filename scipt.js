function foo(){
    var day =new Date().getDay();
    var hours =new Date().getHours();
    
    if (day === 0 && hours >12 && hours < 13);  // day is a 0 index base
                                               // sunday between 12:00 and 13:00
        // Do what you want here:
};

setInterval(foo, 3600000); // one hour check.