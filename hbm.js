function task1() {
    let burger = document.getElementById('HamBurgerMenuContainer');
    let line1 = document.getElementById('HBM-line1');
    let line2 = document.getElementById('HBM-line2');
    let line3 = document.getElementById('HBM-line3');
    let HBMitems = document.getElementById('HBMitems');
    let UIversion = document.getElementById('UIversion');

    if (line2.style.rotate != '-45deg') {
        line1.style.rotate = '42deg';
        line1.style.translate = '0% 60%';
        line2.style.rotate = '-45deg';
        line3.style.rotate = '42deg';
        line3.style.translate = '0% -60%';
        burger.style.height = '25vh';
        burger.style.width = '40vw';
        burger.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        HBMitems.style.display = 'block';
        HBMitems.style.opacity = '100%';
        UIversion.style.display = 'block';
        UIversion.style.opacity = '100%';
    }

    else {
        line1.style.rotate = '0deg';
        line1.style.translate = '0% 100%';
        line2.style.rotate = '0deg';
        line3.style.rotate = '0deg';
        line3.style.translate = '0% -100%';
        burger.style.height = '5vh';
        burger.style.width = '5vh';
        burger.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        HBMitems.style.display = 'none';
        HBMitems.style.opacity = '0%';
        UIversion.style.display = 'none';
        UIversion.style.opacity = '0%';
    }
}