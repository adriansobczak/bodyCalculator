document.getElementsByClassName("nav__tile1")[0].addEventListener("click", setTextBMI);
document.getElementsByClassName("nav__tile2")[0].addEventListener("click", setTextBMR);
document.getElementsByClassName("nav__tile3")[0].addEventListener("click", setTextTMR);


function setTextBMI()
{
    document.getElementsByClassName("description")[0].innerHTML = "clickBMI";
    document.getElementsByClassName("data")[0].innerHTML = "clickBMI";
    document.getElementsByClassName("result")[0].innerHTML = "clickBMI";
}

function setTextBMR()
{
    document.getElementsByClassName("description")[0].innerHTML = "clickBMR";
    document.getElementsByClassName("data")[0].innerHTML = "clickBMR";
    document.getElementsByClassName("result")[0].innerHTML = "clickBMR";
}

function setTextTMR()
{
    document.getElementsByClassName("description")[0].innerHTML = "clickTMR";
    document.getElementsByClassName("data")[0].innerHTML = "clickTMR";
    document.getElementsByClassName("result")[0].innerHTML = "clickTMR";
}