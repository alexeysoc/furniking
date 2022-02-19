// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener("DOMContentLoaded", () => {
  //Раскрыть-закрыть категории
  const navIcon = document.querySelector(".nav__icon");
  const mainAside = document.querySelector(".main__aside");

  if (navIcon) {
    navIcon.addEventListener("click", function (e) {
      mainAside.classList.toggle("active");
    });
  }

  //Раскрыть-закрыть меню
  const menuIcon = document.querySelector(".menu__icon");
  const headerMenu = document.querySelector(".header__menu-list");

  if (menuIcon) {
    menuIcon.addEventListener("click", function (e) {
      headerMenu.classList.toggle("active");
    });
  }
  //Раскрыть-закрыть поиск
  const searchBtn = document.querySelector(".search__btn");
  const searchInput = document.querySelector(".search__input");

  if (searchBtn) {
    searchBtn.addEventListener("click", function (e) {
      searchInput.classList.toggle("active");
    });
  }

  // window.addEventListener('resize', function () {
  // 	const pageWidth = document.documentElement.scrollWidth;
  // 	if (pageWidth > 1000) {
  // 		lim = 8;
  // 	console.log(mixer.getState().activePagination.limit === 8);
  // 	 }
  // 	if (pageWidth < 1000) {
  // 		lim = 6;
  // 		console.log(mixer.getState().activePagination.limit === 6);
  // 	}
  // 	if (pageWidth < 700) {
  // 		lim = 4;
  // 		console.log(mixer.getState().activePagination.limit === 4);
  // 	}
  // 	if (pageWidth < 500) {
  // 		lim = 2;
  // 		console.log(lim);
  // 	}
  // });

  //////////////////////////////////////////////// Управление кнопкой переход вверх
  const gotoTop = document.querySelector(".goto-top");
  window.addEventListener("scroll", function () {
     if (pageYOffset > document.documentElement.clientHeight) {
      gotoTop.classList.add("visible");
    }else{
      gotoTop.classList.remove("visible");
    }
  });

  //////Миксеры
  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  const mixer = mixitup(containerEl1, {
    //'.product_list'

    load: {
      filter: ".top",
    },

    animation: {
      duration: 300,
    },

    pagination: {
      limit: 8, // impose a limit of 8 targets per page
    },
    controls: {
      scope: "local", //Строка, определяющая “область действия”, которую следует использовать при привязке или запросе элементов управления по умолчанию. Доступные значения являются "глобальными" или "локальными".
    },
  });

  const mixer2 = mixitup(containerEl2, {
    //'.our_product_list'

    load: {
      filter: "all",
    },

    animation: {
      duration: 300,
    },

    controls: {
      scope: "local", //Строка, определяющая “область действия”, которую следует использовать при привязке или запросе элементов управления по умолчанию. Доступные значения являются "глобальными" или "локальными".
    },

    pagination: {
      limit: 8, // impose a limit of 8 targets per page
      generatePageList: true, //true
    },
  });

  //////////////////////////////////////Прокрутка при клике
  const menuLinks = document.querySelectorAll(".header__menu-link[data-goto]");

  if (menuLinks.length > 0) {
    menuLinks.forEach((menuLink) => {
      menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
      const menuLink = e.target;
      console.log(menuLink);
      if (
        menuLink.dataset.goto &&
        document.querySelector(menuLink.dataset.goto)
      ) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue =
          gotoBlock.getBoundingClientRect().top +
          pageYOffset -
          document.querySelector(".header").offsetHeight;

        // if (iconMenu.classList.contains('_active')){
        //   document.body.classList.remove('_lock');
        //   iconMenu.classList.remove('_active');
        //   menuBody.classList.remove('_active');
        // }

        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth",
        });
        e.preventDefault();
      }
    }
  }
});
