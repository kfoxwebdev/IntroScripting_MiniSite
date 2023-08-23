
    // The below code is an anonymous function expression that contains a nested function. It's also an event handler! First, the main function activates as soon as the page loads (which is an event). It sets a local variable, favButton. This variable is set to the <button> element with id "favButtonID" (each amusement park has one of these buttons on their html page). When the button is clicked, it creates another event which is handled by a nested function, creating an alert with a message about that amusement park.
window.onload = function () {
    
    var favButton = document.getElementById("favButtonID");
    
        // The nested anonymous function below activates when the "faveButton" button is clicked on one of the pages for each amusement park. Each page has a global variable representing that page's amusement park. That variable is set to the boolean value of true. This function uses if-statements to determine which variable is true so it knows which string value to show in the alert.
    favButton.onclick = function() {

        if (favFC) {
            alert("My favorite ride at Frontier City is Diamond Back! It's a vintage roller coaster model that's no longer manufactured, so it's like riding a piece of history. It launches you right out of the station, and there's insanely strong airtime as you dive over the edge of each dip!");
        }
        
        if (favSDC) {
            alert("My favorite ride at Silver Dollar City is Outlaw Run! It's actually a hybrid coaster, and its track is made of a wooden structure with steel rails. This gives it a unique feeling of being smoother than most wooden coasters, but just a little wilder than most steel coasters. Plus, it has 2 inversions and a ton of airtime!");
        }
        
        if (favWOF){
            alert("My favorite ride at Worlds of Fun is Prowler! It's a wooden coaster with lots of twists and turns, and a few exciting pops of airtime. It's built on the edge of the park and surrounded by trees, so you can't see where you're going until you're on it!");
        }
        
        
    };

};