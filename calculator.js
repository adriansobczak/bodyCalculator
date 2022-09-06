document.getElementsByClassName("nav__tile1")[0].addEventListener("click", setTextBMI);
document.getElementsByClassName("nav__tile2")[0].addEventListener("click", setTextBMR);
document.getElementsByClassName("nav__tile3")[0].addEventListener("click", setTextTMR);


function setTextBMI()
{
    document.getElementsByClassName("description")[0].innerHTML = "The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy";
    document.getElementsByClassName("data")[0].innerHTML = '<label>Weight in kg <input type="text" name="weight"></label><br><label>Height in m <input type="text" name="height"></label><br><input type="submit" value="calculate">';
    document.getElementsByClassName("result")[0].innerHTML = "clickBMI";
}

function setTextBMR()
{
    document.getElementsByClassName("description")[0].innerHTML = "Basal metabolic rate (BMR) is the number of calories your body needs to accomplish its most basic (basal) life-sustaining functions";
    document.getElementsByClassName("data")[0].innerHTML = "clickBMR";
    document.getElementsByClassName("result")[0].innerHTML = "clickBMR";
}

function setTextTMR()
{
    document.getElementsByClassName("description")[0].innerHTML = "Total metabolic rate (TMR) is the BMR plus the added energy expenditure for movement and other activities";
    document.getElementsByClassName("data")[0].innerHTML = "clickTMR";
    document.getElementsByClassName("result")[0].innerHTML = "clickTMR";
}