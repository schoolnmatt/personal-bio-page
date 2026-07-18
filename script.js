const themebutton = document.getElementById("themebutton");

var color = 0;

themebutton.addEventListener("click", changeTheme); //Causes the button to listen for a click, upon which it calls the changeTheme function

//Changes background color between blue and green
function changeTheme() {

    if (color % 2 == 0) {

        document.body.style.backgroundColor = "midnightblue";

        color++;

    }

    else {

        document.body.style.backgroundColor = "mediumaquamarine";

        color++;

    }

}