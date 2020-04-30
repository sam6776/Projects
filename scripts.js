// Function for the opening and closing of the sidebar menu, and the shifting of the mage page over
function openbtn()
{
    document.getElementById("menu").style.width = "105px";
    document.getElementById("content").style.marginLeft = "105px";
    document.getElementById("content").style.transition = ".5s";
}
function closebtn()
{
    document.getElementById("menu").style.width = "38px";
    document.getElementById("content").style.marginLeft = "38px";
    document.getElementById("content").style.transition = ".5s";
}

// Javascript for the lightening of the menu links when you move the mouse off of the eleemnt
function changeHomeLight()
{
    document.getElementById("home-text").style.color = "white";
    document.getElementById("homeicon").style.color = "white";
}

function changeGitLight()
{
    document.getElementById("git").style.filter = "none";
    document.getElementById("git-text").style.color = "white";
}
function changeTwitterLight()
{
    document.getElementById("twitter").style.filter = "invert(100%)";
    document.getElementById("twitter-text").style.color = "white";
}

// Javascript for the darkening of the menu links when the elements are hovered over
function changeHomeDark()
{
    document.getElementById("home-text").style.color = "grey";
    document.getElementById("homeicon").style.color = "grey";
}
function changeGitDark()
{
    document.getElementById("git").style.filter = "invert(65%)";
    document.getElementById("git-text").style.color = "grey";
}

function changeTwitterDark()
{
    document.getElementById("twitter").style.filter = "invert(65%)";
    document.getElementById("twitter-text").style.color = "grey";
}