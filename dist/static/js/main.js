"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // // //  WHEEL  WHEEL  WHEEL
  // let prizes,
  //   popUp = document.getElementById("infoPopUp");
  // // надписи и цвета на секторах
  // prizes = [
  //   {
  //     text: "Bonus <br>",
  //     money: "1500€",
  //     result: "winner",
  //     win: true,
  //     color: "hsl(0 0% 0%)",
  //   },
  //   {
  //     text: "Try again!",
  //     result: "losses",
  //     color: "hsl(44 100% 51%)",
  //   },
  //   {
  //     text: "Bonus <br>",
  //     FS: "+150FS",
  //     result: "winner",
  //     win: true,
  //     color: "hsl(0 0% 0%)",
  //   },
  //   {
  //     text: "Try again!",
  //     result: "losses",
  //     color: "hsl(44 100% 51%)",
  //   },
  //   {
  //     text: "Bonus <br>",
  //     money: "1500€ ",
  //     FS: "+150FS",
  //     small: "small",
  //     result: "winner",
  //     win: true,
  //     color: "hsl(0 0% 0%)",
  //   },
  //   {
  //     text: "Try again!",
  //     result: "losses",
  //     color: "hsl(44 100% 51%)",
  //   },
  // ];
  // // создаём переменные для быстрого доступа ко всем объектам на странице — блоку в целом, колесу, кнопке и язычку
  // const wheel = document.querySelector(".deal-wheel");
  // const spinner = wheel.querySelector(".spinner");
  // const trigger = document.querySelector(".btn-spin");
  // const ticker = wheel.querySelector(".ticker");
  // // на сколько секторов нарезаем круг
  // const prizeSlice = 360 / prizes.length;
  // // на какое расстояние смещаем сектора друг относительно друга
  // const prizeOffset = Math.floor(180 / prizes.length);
  // // прописываем CSS-классы, которые будем добавлять и убирать из стилей
  // const spinClass = "is-spinning";
  // // получаем все значения параметров стилей у секторов
  // const spinnerStyles = window.getComputedStyle(spinner);
  // // переменная для анимации
  // let tickerAnim;
  // // угол вращения
  // // ( !!! ПЕРЕОПРЕДЕЛИТЬ НА "0" ПРИ ИСПОЛЬЗОВАНИИ РАНДОМНОГО ВРАЩЕНИЯ !!! )
  // let rotation = 4170;
  // // текущий сектор
  // let currentSlice = 0;
  // // переменная для текстовых подписей
  // let prizeNodes;
  // // расставляем текст по секторам
  // const createPrizeNodes = () => {
  //   // обрабатываем каждую подпись
  //   prizes.forEach(({ text, money, FS, result, win, small, reaction }, i) => {
  //     // каждой из них назначаем свой угол поворота
  //     const rotation = prizeSlice * i * -1 - prizeOffset;
  //     // добавляем код с размещением текста на страницу в конец блока spinner
  //     let moneySpan = `<span class='money ${
  //         small ? "small-text" : ""
  //       }'> ${money} </span>`,
  //       FSSpan = `<span class='fs ${small ? "small-text" : ""}'> ${FS} </span>`,
  //       bonusText = `<span class='lng-bonus'> ${text} </span>`,
  //       lossesText = `<span class='lng-losses'> ${text} </span>`;
  //     spinner.insertAdjacentHTML(
  //       "beforeend",
  //       // текст при этом уже оформлен нужными стилями
  //       `<li class="prize ${result}" data-reaction=${reaction} style="--rotate: ${rotation}deg">
  //          <div class="text">
  //            ${win ? bonusText : lossesText}
  //            ${money ? moneySpan : ""} 
  //            ${FS ? FSSpan : ""}
  //          </div>
  //        </li>`
  //     );
  //   });
  // };
  // // рисуем разноцветные секторы
  // const createConicGradient = () => {
  //   // устанавливаем нужное значение стиля у элемента spinner
  //   spinner.setAttribute(
  //     "style",
  //     `background: conic-gradient(
  //      from -90deg,
  //      ${prizes
  //        // получаем цвет текущего сектора
  //        .map(
  //          ({ color }, i) =>
  //            `${color} 0 ${(100 / prizes.length) * (prizes.length - i)}%`
  //        )
  //        .reverse()}
  //    );`
  //   );
  // };
  // // создаём функцию, которая нарисует колесо в сборе
  // const setupWheel = () => {
  //   // сначала секторы
  //   createConicGradient();
  //   // потом текст
  //   createPrizeNodes();
  //   // а потом мы получим список всех призов на странице, чтобы работать с ними как с объектами
  //   prizeNodes = wheel.querySelectorAll(".prize");
  // };
  // // ( !!! РАСКОММЕНТИРОВАТЬ ПРИ ИСПОЛЬЗОВАНИИ РАНДОМНОГО ВРАЩЕНИЯ !!! )
  // // определяем количество оборотов, которое сделает наше колесо
  // // const spinertia = (min, max) => {
  // //     min = Math.ceil(min);
  // //     max = Math.floor(max);
  // //     return Math.floor(Math.random() * (max - min + 1)) + min;
  // // };
  // // функция запуска вращения с плавной остановкой
  // const runTickerAnimation = () => {
  //   // взяли код анимации отсюда: https://css-tricks.com/get-value-of-css-rotation-through-javascript/
  //   const values = spinnerStyles.transform.split("(")[1].split(")")[0].split(",");
  //   const a = values[0];
  //   const b = values[1];
  //   let rad = Math.atan2(b, a);
  //   if (rad < 0) rad += 2 * Math.PI;
  //   const angle = Math.round(rad * (180 / Math.PI));
  //   const slice = Math.floor(angle / prizeSlice);
  //   // анимация язычка, когда его задевает колесо при вращении
  //   // если появился новый сектор
  //   if (currentSlice !== slice) {
  //     // убираем анимацию язычка
  //     ticker.style.animation = "none";
  //     // и через 10 миллисекунд отменяем это, чтобы он вернулся в первоначальное положение
  //     setTimeout(() => (ticker.style.animation = null), 20);
  //     // после того, как язычок прошёл сектор - делаем его текущим
  //     currentSlice = slice;
  //   }
  //   // запускаем анимацию
  //   tickerAnim = requestAnimationFrame(runTickerAnimation);
  // };
  // // функция выбора призового сектора
  // const selectPrize = () => {
  //   const selected = Math.floor(rotation / prizeSlice),
  //     resultWin = prizeNodes[selected].innerHTML,
  //     resultLos = prizeNodes[selected].innerText,
  //     popUpContent = popUp.querySelector(".infoPopUp__content"),
  //     btn = document.querySelector(".btn-spin");
  //   if (prizeNodes[selected].classList.contains("losses")) {
  //     btn.innerHTML = resultLos;
  //   } else {
  //     popUp.classList.add("show");
  //     popUpContent.innerHTML = resultWin;
  //   }
  // };
  // // отслеживаем нажатие на кнопку
  // trigger.addEventListener("click", () => {
  //   // делаем её недоступной для нажатия
  //   trigger.disabled = true;
  //   // ( !!! РАСКОММЕНТИРОВАТЬ ПРИ ИСПОЛЬЗОВАНИИ РАНДОМНОГО ВРАЩЕНИЯ !!! )
  //   // rotation = Math.floor(Math.random() * 360 + spinertia(2000, 12000));
  //   // добавляем колесу класс is-spinning, с помощью которого реализуем нужную отрисовку
  //   wheel.classList.add(spinClass);
  //   // через CSS говорим секторам, как им повернуться
  //   spinner.style.setProperty("--rotate", rotation);
  //   // возвращаем язычок в горизонтальную позицию
  //   ticker.style.animation = "none";
  //   // запускаем анимацию вращение
  //   runTickerAnimation();
  // });
  // // отслеживаем, когда закончилась анимация вращения колеса
  // spinner.addEventListener("transitionend", () => {
  //   // останавливаем отрисовку вращения
  //   cancelAnimationFrame(tickerAnim);
  //   // получаем текущее значение поворота колеса
  //   rotation %= 360;
  //   // выбираем приз
  //   selectPrize();
  //   // убираем класс, который отвечает за вращение
  //   wheel.classList.remove(spinClass);
  //   // отправляем в CSS новое положение поворота колеса
  //   spinner.style.setProperty("--rotate", rotation);
  //   // делаем кнопку снова активной
  //   trigger.disabled = false;
  //   // ( !!! УДАЛИТЬ ПРИ ИСПОЛЬЗОВАНИИ РАНДОМНОГО ВРАЩЕНИЯ !!! )
  //   // изменяем значение угла вращения колеса для фиксации на нужном нам поле
  //   rotation = 4230;
  // });
  // // подготавливаем всё к первому запуску
  // setupWheel();
  // let linkBtn = document.querySelector(".infoPopUp__btn");
  // linkBtn.addEventListener("click", () => {
  //   popUp.classList.remove("show");
  // });
  // //  WHEEL  WHEEL  WHEEL
  ; // // //      определение языка указанного в ссылке
  // var language = window.navigator
  //     ? window.navigator.language ||
  //       window.navigator.systemLanguage ||
  //       window.navigator.userLanguage
  //     : "ru",
  //   language = language.substr(0, 2).toLowerCase();
  // //  LOCALISATION  LOCALISATION  LOCALISATION
  // const swhithLang = document.querySelectorAll(
  //   ".langCheck__item:not(.selected) input"
  // );
  // fetch("./static/localisation/localisation.json")
  //   .then((response) => {
  //     if (response.status !== 200) {
  //       return Promise.reject(new Error(response.statusText));
  //     }
  //     return Promise.resolve(response);
  //   })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     const localis = data,
  //       localArr = ["ru", "tr", "pt"],
  //       langDisplay = document.querySelector(".langCheck__item.selected"),
  //       langDisplayFlag = langDisplay.querySelector(".icon"),
  //       langDisplayContext = langDisplay.querySelector(".langContext"),
  //       languageHref = window.location.hash;
  //     if (languageHref.length != 0) {
  //       console.log("111");
  //       language = languageHref.substr(1);
  //       langDisplay.className = `langCheck__item langCheck__item-${language} selected`;
  //       langDisplayFlag.className = `icon icon-${language}`;
  //       langDisplayContext.innerHTML = language;
  //       document
  //         .querySelectorAll(".langCheck__item:not(.selected)")
  //         .forEach((item) => {
  //           if (item.classList.contains(`langCheck__item-${language}`)) {
  //             item.classList.add("active");
  //           } else {
  //             item.classList.remove("active");
  //           }
  //         });
  //     } else if (language.length != 0 && localArr.includes(language)) {
  //       console.log("222");
  //       langDisplay.className = `langCheck__item langCheck__item-${language} selected`;
  //       langDisplayFlag.className = `icon icon-${language}`;
  //       langDisplayContext.innerHTML = language;
  //       document
  //         .querySelectorAll(".langCheck__item:not(.selected)")
  //         .forEach((item) => {
  //           if (item.classList.contains(`langCheck__item-${language}`)) {
  //             item.classList.add("active");
  //           } else {
  //             item.classList.remove("active");
  //           }
  //         });
  //     }
  //     for (let key in localis) {
  //       let string = document.querySelectorAll(".lng-" + key),
  //         stringLocalis = localis[key][language];
  //       if (string && stringLocalis) {
  //         for (let elem of string) {
  //           elem.innerHTML = localis[key][language];
  //         }
  //       }
  //     }
  //   })
  //   .catch((error) => console.log("error", error));
  // //  LOCALISATION  LOCALISATION  LOCALISATION
  // //  SWHITCH LOCALISATION  SWHITCH LOCALISATION  SWHITCH LOCALISATION
  // swhithLang.forEach((item) => {
  //   item.addEventListener("change", () => {
  //     let val = item.name;
  //     window.location.href = window.location.pathname + "#" + val;
  //     location.reload();
  //     language = val;
  //   });
  // });
  // //  SWHITCH LOCALISATION  SWHITCH LOCALISATION  SWHITCH LOCALISATION

  ;
}); // window.addEventListener('load', () => {
//     const body = document.querySelector('body');
//     body.classList.remove('loader');
// });