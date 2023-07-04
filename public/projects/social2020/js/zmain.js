
function click_navbarButton(){
    var navbarButton = document.getElementById('navbar-button');
    var nameOfClass = navbarButton.classList;
    var headerPozition = document.getElementById('header');
    var sectionPozition = document.getElementById('section-1');
    var sectionPozition2 = document.getElementById('section-2');
    console.log(nameOfClass);
    if(nameOfClass == 'navbar-button navbar-button__active'){
        navbarButton == navbarButton.classList.remove('navbar-button__active');
        headerPozition == headerPozition.classList.remove('menu-active');
        sectionPozition == sectionPozition.classList.remove('menu-active');
        sectionPozition2 == sectionPozition2.classList.remove('menu-active');
    } else{
        navbarButton.className += ' navbar-button__active';
        headerPozition.className += ' menu-active';
        sectionPozition.className += ' menu-active';
        sectionPozition2.className += ' menu-active';
    }
};