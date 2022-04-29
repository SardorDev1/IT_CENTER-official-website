const navs = document.querySelector('.header .nav-bar .nav-list .navs');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');


navs.addEventListener('click', () => {
	navs.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';

	} else {
		header.style.backgroundColor = 'transparent';

	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
	navs.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

const home = document.querySelector('#homenav'),
news = document.querySelector('#newsnav'),
startup = document.querySelector('#startupnav'),
team = document.querySelector('#teamsnav'),
course = document.querySelector('#coursenav'),
regis = document.querySelector('#regisnav');
var alanBtnInstance = alanBtn({
    key: "636de328e83d92d2647bc516eb2998242e956eca572e1d8b807a3e2338fdd0dc/stage",
    onCommand: function (commandData) {
      if (commandData.command === "go:back") {
        //call client code that will react on the received command
      }
	  if (commandData.command === "home") {
	
		home.click()
      }
	  if (commandData.command === "news") {
		news.click()
      }
	  if (commandData.command === "startup") {
		startup.click()
      }
	  if (commandData.command === "team") {
		team.click()
      }
	  if (commandData.command === "course") {
		course.click()
      }
	  if (commandData.command === "regis") {
		regis.click()
      }


    },
    rootEl: document.getElementById("alan-btn"),
  });



  var mixer = mixitup('#kurslar', {
    selectors: {
        target: '.cards'
    },
    animation: {
        duration: 600
    }
});





//-Dizayn qismi--Sardor Shoakbarov
//-Front-End qismi--Sardor Shoakbarov
//--Back-End qismi--Sardor Shoakbarov 