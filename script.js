//this function executed on button click and calculates the interest
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    //calculating the simple interest
    var interest = principal * years * rate /100;
    //Getting the exact year to print
    var year = new Date().getFullYear()+parseInt(years);
    //Displaying the contents in the interest span area
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>" 
}
//This is the function for rate of interest selection
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
//function to check non negative and non zero value for amount
function validate()
{
    var x = document.getElementById("principal").value;
    if ((x == 0) || (x < 0))
    {
        window.confirm("Enter a positive number")
        document.getElementById("principal").focus(); 
    }
}
        