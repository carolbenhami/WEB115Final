//Access to the button element and listening for a button click; When button clicked, initialize the "myWindow function"
document.getElementById("myButton").addEventListener('click',myWindow)
function myWindow(){
    //Creates regex variable for email validation
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    //Access to the value entered on the email field on the form
    let email = document.getElementById('email');  

    //Validates email by checking if regex conditions are met. If so, runs the rest of the code, if not, alerts user that email is invalid
    if (regex.test(email.value) == true){
   
    //Access to user name input on the form
    visitorName = document.getElementById("name").value;
    //Creates html header for new webpage
    myText = ("<html>\n<head>\n<title>Meal Plan</title>\n</head>\n<body>\n");
    //Introduction sentence for new webpage with user's name appended to new webpage variable
    myText += ("Hello " + visitorName + ", this is your meal plan for the week!");
    
    //Access to all meal inputs for each meal
    let breakfast = document.getElementById("meal1").value
    let snack1 = document.getElementById("meal2").value
    let lunch = document.getElementById("meal3").value
    let snack2 = document.getElementById("meal4").value
    let dinner = document.getElementById("meal5").value
    //Meal formatting with title and content
    let meal = (`Breakfast : <br> ${breakfast} <br><br>
        1st snack : <br> ${snack1} <br><br>
        Lunch : <br> ${lunch} <br><br>
        2nd snack : <br> ${snack2} <br><br>
        Dinner : <br> ${dinner} <br><br>`)
    
    //Webpage formatting into a table for better readability appended to new webpage variable
    myText += (`
        <table border = "1">
        <tr>
        <th>Sunday</th>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
        <th>Saturday</th>
        </tr>

        <tr>
        <td>${meal}</td>
        <td>${meal}</td>
        <td>${meal}</td>
        <td>${meal}</td>
        <td>${meal}</td>
        <td>${meal}</td>
        <td>${meal}</td>
        </tr>
        </table>
        <button onclick="window.print()">Print this page</button>`)
    //Closing html statements appended to new webpage variable
        myText += ("</body>\n</html>");

        //Creates new window
    flyWindow = window.open('about:blank','myPop','width=800,height=800,left=200,top=200');
        //Writes everything on the myText Variable to the new window
    flyWindow.document.write(myText);
}
else{
    window.alert("Invalid Email Input :(")
}
}
