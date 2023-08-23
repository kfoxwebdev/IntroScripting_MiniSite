

    // The below 2 functions are event handlers. The events that they handle occur when the user clicks one of the day-mode or night-mode buttons located in the <nav> element on each page. each handler uses getElementsByTagName to select the <body> element and <dl> elements. Then the functions add or remove a class that corresponds with CSS rules to change the colors of those elements.
function dayColorChanger() {
    
        //first, a local variable called dayBody is set to the <body> element for the html page.
    var dayBody = document.getElementsByTagName("body");
    
        //next, we set the class-attribute of dayBody (the <body> element) to a blank string so the default style rules will apply
    dayBody[0].setAttribute("class", "");
    
        //next, a local variable called dayLists is set to the <dl> element, since those elements have different color & style rules from the rest of the body.
    var dayLists = document.getElementsByTagName("dl");

            //since each amusement park's page has different amounts of <dl> elements (one for each roller coaster), I used a for-loop to iterate through every <dl> so that these functions will change the class of every <dl>.
        for (var i = 0; i < dayLists.length; i++) {
            dayLists[i].setAttribute("class", "");
        }
};


    // this second event handler works the same was as the first one, but it changes the class to "nightColor" instead of an empty string. That way, we can use style rules to change the colors of all elements with the class "nightColor."
function nightColorChanger() {
    
    var nightBody = document.getElementsByTagName("body");
    nightBody[0].setAttribute("class", "nightColor");
    
    var nightLists = document.getElementsByTagName("dl");
        for (var i = 0; i < nightLists.length; i++) {
            nightLists[i].setAttribute("class", "nightListColor");
        }
};


