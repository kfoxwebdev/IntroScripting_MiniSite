

    // The below code is an object constructor called Coaster. Since the rideIt-function is the same for each object, I moved it into a prototype below.
function Coaster(name, height, length, speed, inversions, vidURL) {
    this.name = name;
    this.height = height;
    this.length = length;
    this.speed = speed;
    this.inversions = inversions;
    this.vidURL = vidURL;
    };

                // the rideIt property is a function-expression that uses if & else-if statements to return different responses based on the other properties of each ride. I put this property into an object-prototype since this function applies to all Coaster objects. 
        Coaster.prototype.rideIt = function() {

                if (this.material === "wood")   {
                        return "WeEeEeEe! BuMpYyYyY!";

                        } else if (this.inversions > 0)   {
                        return "Weeeee! " + this.inversions + " loop-de-loops!";

                        } else if (this.height > 200){
                            return "Woah! " + this.height + " feet is a huge drop!";

                        } else {
                            return "Woohooooooo!!";
                        }
                };

                // I also added a function called "thrillScore" to the Coaster prototype. this function uses each ride's height and/or inversions to calculate a score out of 10.
        Coaster.prototype.thrillScore = function() {
            
                    // I used local variables below. "score" creates a variable to store the return value of the calculations. "heightNumber" and "inversionNumber" store the values of each ride's height-property & inversion-property so we can use those numerical values in our calculations.
                var score;
                var heightNumber = this.height;
                var inversionNumber = this.inversions;
            
                    // the below else-if statements do the actual calculations. If the ride is taller than 200 feet, the ride is probably exciting enough to earn it 10/10 points
                if (this.height > 200) {
                    score = 10
                
                    // if the ride is between 150 & 200, we divide the height by 20 to estimate the score out of 10.
                } else if (this.height > 150) {
                    score = heightNumber/20
                
                    // if the ride goes upside down, we still divide the height by 20, but we also add 0.5 to the score for each inversion.
                } else if (this.inversions > 0) {
                    score = (heightNumber/20) + (inversionNumber * .5)
                    
                    // if the ride is under 150 feet tall and it has no loops, we add 20 to the height so it's final score won't be too low (even a small roller-coaster can still be fun after all), and then divide it by 20.
                } else {
                    score = ((heightNumber + 20) /20)
                };
            
            return score;
            };





    // This empty Coaster instance makes it possible to create a chain of prototypes just for the wooden coasters. The WoodCoaster-prototype inherits the properties of the Coaster-prototype, with a couple of its own.
var MakeWoodPrototype = new Coaster();

        // This object-constructor creates the a new type of object called WoodCoaster, and adds a "bumpiness" property that varies between each wooden coaster. Everything else is inherited from the Coaster-prototype.
    function WoodCoaster(name, height, length, speed, inversions, vidURL, bumpiness) {
        Coaster.call (this, name, height, length, speed, inversions, vidURL);
        this.bumpiness = bumpiness;
    };

        //These statements assign the Coaster-instance to WoodCoaster's prototype property, so that we can make a WoodCoaster prototype object
    WoodCoaster.prototype = new Coaster();
    WoodCoaster.prototype.constructor = WoodCoaster;
        
        // Every wooden roller coaster is made of the same material, so the prototype sets every WoodCoaster's "material" property to "wood"
    WoodCoaster.prototype.material = "wood";





    // The below code is similar to the WoodCoaster prototype above, except this makes a prototype object for steel roller coasters. This prototype is called SteelCoaster, and instead of a "bumpiness" property, each SteelCoaster has a "smoothness" property (since some steel coasters can still be rougher than others)
var MakeSteelPrototype = new Coaster();

    function SteelCoaster(name, height, length, speed, inversions, vidURL, smoothness) {
        Coaster.call (this, name, height, length, speed, inversions, vidURL);
        this.smoothness = smoothness;
    };

        //These are the statements that assign the Coaster-instance to SteelCoaster's prototype property.
    SteelCoaster.prototype = new Coaster();
    SteelCoaster.prototype.constructor = SteelCoaster;

        // Another similarity to WoodCoaster, every steel coaster is made of steel, so the prototype sets every SteelCoaster's "material" propperty to "steel"
    SteelCoaster.prototype.material = "steel";





    //the below statements create objects by using the "new" keyword and a call to either SteelCoaster or WoodCoaster. Since both of those prototypes are chained to the Coaster prototype, they contain all the properties of Coaster, as well as "smoothness" or "bumpiness" properties. Afterward, each variable holds a reference to its object.

//frontier city coasters
var diamondBack = new SteelCoaster("Diamond Back", 56, 635, 45, 2, "https://www.youtube.com/embed/8JOcIRZCXUo", "moderate");

var silverBull = new SteelCoaster("Silver Bullet", 80, 1942, 47, 1, "https://www.youtube.com/embed/FtVwu06hayo", "low");

var steelLas = new SteelCoaster("Steel Lasso", 49, 967, 30, 0, "https://www.youtube.com/embed/poLyfLGTFww", "low");

var wildCat = new WoodCoaster("Wildcat", 75, 2653, 46, 0, "https://www.youtube.com/embed/kL3ldYDb--s", "low");



//silver dollar city coasters
var outlawRun = new WoodCoaster("Outlaw Run", 162, 2937, 68, 3, "https://www.youtube.com/embed/mVuOWKA6KXg", "low");

var powderKeg = new SteelCoaster("Powder Keg", 98, 3506, 64, 0, "https://www.youtube.com/embed/Zvu5czX8Mdg", "smooth");

var thunderation = new SteelCoaster("Thunderation", 81, 3022, 48, 0, "https://www.youtube.com/embed/vIIk_-39Mls", "moderate");

var timeTrav = new SteelCoaster("Time Traveler", 100, 9020, 50, 3, "https://www.youtube.com/embed/5YcMJHfni_E", "smooth");

var wildFire = new SteelCoaster("Wildfire", 155, 3073, 66, 5, "https://www.youtube.com/embed/tr7WoPSJlzQ", "very smooth");



// worlds of fun coasters
var boomerang = new SteelCoaster("Boomerang", 116, 935, 47, 6, "https://www.youtube.com/embed/w_hsbRySPU8", "moderate");

var mamba = new SteelCoaster("Mamba", 205, 5600, 75, 0, "https://www.youtube.com/embed/iERClwuBM0g", "moderate");

var patriot = new SteelCoaster("Patriot", 149, 3081, 60, 4, "https://www.youtube.com/embed/iRr55MpxyhI", "very smooth");

var prowler = new WoodCoaster("Prowler", 102, 3074, 51, 0, "https://www.youtube.com/embed/NAyIQEzWD40", "moderate");

var spinDragons = new SteelCoaster ("Spinning Dragons", 54, 1345, 31, 0, "https://www.youtube.com/embed/l2kIx_QzGSM", "moderate");

var timberWolf = new WoodCoaster("Timber Wolf", 100, 4230, 53, 0, "https://www.youtube.com/embed/TODPH03LONE", "very rough");





    // This code creates arrays of the above coaster objects. We use these arrays to sort which roller coasters are at which amusement parks. Then we can iterate through each object and list them using one function, shown below.
var fcCoasters = [diamondBack, silverBull, steelLas, wildCat];

var sdcCoasters = [outlawRun, powderKeg, thunderation, timeTrav, wildFire];

var wofCoasters = [boomerang, mamba, patriot, prowler, spinDragons, timberWolf];


    // This code is a function declaration that accepts any of the amusement park's arrays as an argument. Then it uses a for-loop to iterate through every object in the array. Then, it uses document.write to create a <dl> element which lists out the properties for each Coaster object. 
function listCoasters(theCoasters) {
    
    for (var i = 0; i < theCoasters.length; i++) {
        
        document.write(
              // The first thing that is document.written is youtube's embed code. The video's don't seem to work if you just use a simple <iframe> element with the regular video URL.
            "<iframe width=\"400\" height=\"225\" src=\"" + theCoasters[i].vidURL + "\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
            
            + "<dl> <dt>" + theCoasters[i].name + "</dt>"
            + "<dd> Height: " + theCoasters[i].height + " ft </dd>" 
            + "<dd> Length: " + theCoasters[i].length + " ft </dd>"
            + "<dd> Top Speed: " + theCoasters[i].speed + " mph </dd>"
            + "<dd> Inversions: " + theCoasters[i].inversions + "</dd>"
            + "<dd> Material: " + theCoasters[i].material + "</dd>"
            + "<dd> Thrill-rating: " + theCoasters[i].thrillScore() + "/10 </dd>"
            + "<dd> Rider Reaction: " + theCoasters[i].rideIt() + "</dd>"
            );
        
            //I also added an if-else-statement so that steel coasters document.write their "smoothness" property, and wood coasters document.write their bumpiness property.
        if (theCoasters[i].material === "steel") {
            
            document.write(
                "<dd>Smoothness: " + theCoasters[i].smoothness + "</dd> </dl> <br>"
            );
            
        } else {
            
            document.write(
                "<dd>Bumpiness: " + theCoasters[i].bumpiness + "</dd> </dl> <br>"
            );
        };
    };
};










