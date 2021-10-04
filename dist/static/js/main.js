"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener("DOMContentLoaded", function () {
  //  WHEEL  WHEEL  WHEEL
  var prizes,
      popUp = document.getElementById("infoPopUp"); // надписи и цвета на секторах

  prizes = [{
    text: "Bonus <br>",
    money: "1500€",
    result: "winner",
    win: true,
    color: "hsl(0 0% 0%)"
  }, {
    text: "Try again!",
    result: "losses",
    color: "hsl(44 100% 51%)"
  }, {
    text: "Bonus <br>",
    FS: "+150FS",
    result: "winner",
    win: true,
    color: "hsl(0 0% 0%)"
  }, {
    text: "Try again!",
    result: "losses",
    color: "hsl(44 100% 51%)"
  }, {
    text: "Bonus <br>",
    money: "1500€ ",
    FS: "+150FS",
    small: "small",
    result: "winner",
    win: true,
    color: "hsl(0 0% 0%)"
  }, {
    text: "Try again!",
    result: "losses",
    color: "hsl(44 100% 51%)"
  }]; // создаём переменные для быстрого доступа ко всем объектам на странице — блоку в целом, колесу, кнопке и язычку

  var wheel = document.querySelector(".deal-wheel");
  var spinner = wheel.querySelector(".spinner");
  var trigger = document.querySelector(".btn-spin");
  var ticker = wheel.querySelector(".ticker"); // на сколько секторов нарезаем круг

  var prizeSlice = 360 / prizes.length; // на какое расстояние смещаем сектора друг относительно друга

  var prizeOffset = Math.floor(180 / prizes.length); // прописываем CSS-классы, которые будем добавлять и убирать из стилей

  var spinClass = "is-spinning"; // получаем все значения параметров стилей у секторов

  var spinnerStyles = window.getComputedStyle(spinner); // переменная для анимации

  var tickerAnim; // угол вращения
  // ( !!! ПЕРЕОПРЕДЕЛИТЬ НА "0" ПРИ ИСПОЛЬЗОВАНИИ РАНДОМНОГО ВРАЩЕНИЯ !!! )

  var rotation = 4170; // текущий сектор

  var currentSlice = 0; // переменная для текстовых подписей

  var prizeNodes; // расставляем текст по секторам

  var createPrizeNodes = function createPrizeNodes() {
    // обрабатываем каждую подпись
    prizes.forEach(function (_ref, i) {
      var text = _ref.text,
          money = _ref.money,
          FS = _ref.FS,
          result = _ref.result,
          win = _ref.win,
          small = _ref.small,
          reaction = _ref.reaction;
      // каждой из них назначаем свой угол поворота
      var rotation = prizeSlice * i * -1 - prizeOffset; // добавляем код с размещением текста на страницу в конец блока spinner

      var moneySpan = "<span class='money ".concat(small ? "small-text" : "", "'> ").concat(money, " </span>"),
          FSSpan = "<span class='fs ".concat(small ? "small-text" : "", "'> ").concat(FS, " </span>"),
          bonusText = "<span class='lng-bonus'> ".concat(text, " </span>"),
          lossesText = "<span class='lng-losses'> ".concat(text, " </span>");
      spinner.insertAdjacentHTML("beforeend", // текст при этом уже оформлен нужными стилями
      "<li class=\"prize ".concat(result, "\" data-reaction=").concat(reaction, " style=\"--rotate: ").concat(rotation, "deg\">\n         <div class=\"text\">\n           ").concat(win ? bonusText : lossesText, "\n           ").concat(money ? moneySpan : "", " \n           ").concat(FS ? FSSpan : "", "\n         </div>\n         \n       </li>"));
    });
  }; // рисуем разноцветные секторы


  var createConicGradient = function createConicGradient() {
    // устанавливаем нужное значение стиля у элемента spinner
    spinner.setAttribute("style", "background: conic-gradient(\n     from -90deg,\n     ".concat(prizes // получаем цвет текущего сектора
    .map(function (_ref2, i) {
      var color = _ref2.color;
      return "".concat(color, " 0 ").concat(100 / prizes.length * (prizes.length - i), "%");
    }).reverse(), "\n   );"));
  }; // создаём функцию, которая нарисует колесо в сборе


  var setupWheel = function setupWheel() {
    // сначала секторы
    createConicGradient(); // потом текст

    createPrizeNodes(); // а потом мы получим список всех призов на странице, чтобы работать с ними как с объектами

    prizeNodes = wheel.querySelectorAll(".prize");
  }; // ( !!! РАСКОММЕНТИРОВАТЬ ПРИ ИСПОЛЬЗОВАНИИ РАНДОМНОГО ВРАЩЕНИЯ !!! )
  // определяем количество оборотов, которое сделает наше колесо
  // const spinertia = (min, max) => {
  //     min = Math.ceil(min);
  //     max = Math.floor(max);
  //     return Math.floor(Math.random() * (max - min + 1)) + min;
  // };
  // функция запуска вращения с плавной остановкой


  var runTickerAnimation = function runTickerAnimation() {
    // взяли код анимации отсюда: https://css-tricks.com/get-value-of-css-rotation-through-javascript/
    var values = spinnerStyles.transform.split("(")[1].split(")")[0].split(",");
    var a = values[0];
    var b = values[1];
    var rad = Math.atan2(b, a);
    if (rad < 0) rad += 2 * Math.PI;
    var angle = Math.round(rad * (180 / Math.PI));
    var slice = Math.floor(angle / prizeSlice); // анимация язычка, когда его задевает колесо при вращении
    // если появился новый сектор

    if (currentSlice !== slice) {
      // убираем анимацию язычка
      ticker.style.animation = "none"; // и через 10 миллисекунд отменяем это, чтобы он вернулся в первоначальное положение

      setTimeout(function () {
        return ticker.style.animation = null;
      }, 20); // после того, как язычок прошёл сектор - делаем его текущим

      currentSlice = slice;
    } // запускаем анимацию


    tickerAnim = requestAnimationFrame(runTickerAnimation);
  }; // функция выбора призового сектора


  var selectPrize = function selectPrize() {
    var selected = Math.floor(rotation / prizeSlice),
        resultWin = prizeNodes[selected].innerHTML,
        resultLos = prizeNodes[selected].innerText,
        popUpContent = popUp.querySelector(".infoPopUp__content"),
        btn = document.querySelector(".btn-spin");

    if (prizeNodes[selected].classList.contains("losses")) {
      btn.innerHTML = resultLos;
    } else {
      popUp.classList.add("show");
      popUpContent.innerHTML = resultWin;
    }
  }; // отслеживаем нажатие на кнопку


  trigger.addEventListener("click", function () {
    // делаем её недоступной для нажатия
    trigger.disabled = true; // ( !!! РАСКОММЕНТИРОВАТЬ ПРИ ИСПОЛЬЗОВАНИИ РАНДОМНОГО ВРАЩЕНИЯ !!! )
    // rotation = Math.floor(Math.random() * 360 + spinertia(2000, 12000));
    // добавляем колесу класс is-spinning, с помощью которого реализуем нужную отрисовку

    wheel.classList.add(spinClass); // через CSS говорим секторам, как им повернуться

    spinner.style.setProperty("--rotate", rotation); // возвращаем язычок в горизонтальную позицию

    ticker.style.animation = "none"; // запускаем анимацию вращение

    runTickerAnimation();
  }); // отслеживаем, когда закончилась анимация вращения колеса

  spinner.addEventListener("transitionend", function () {
    // останавливаем отрисовку вращения
    cancelAnimationFrame(tickerAnim); // получаем текущее значение поворота колеса

    rotation %= 360; // выбираем приз

    selectPrize(); // убираем класс, который отвечает за вращение

    wheel.classList.remove(spinClass); // отправляем в CSS новое положение поворота колеса

    spinner.style.setProperty("--rotate", rotation); // делаем кнопку снова активной

    trigger.disabled = false; // ( !!! УДАЛИТЬ ПРИ ИСПОЛЬЗОВАНИИ РАНДОМНОГО ВРАЩЕНИЯ !!! )
    // изменяем значение угла вращения колеса для фиксации на нужном нам поле

    rotation = 4230;
  }); // подготавливаем всё к первому запуску

  setupWheel();
  var linkBtn = document.querySelector(".infoPopUp__btn");
  linkBtn.addEventListener("click", function () {
    popUp.classList.remove("show");
  }); //  WHEEL  WHEEL  WHEEL

  ; //      определение языка указанного в ссылке

  var language = window.navigator ? window.navigator.language || window.navigator.systemLanguage || window.navigator.userLanguage : "ru",
      language = language.substr(0, 2).toLowerCase(); //  LOCALISATION  LOCALISATION  LOCALISATION

  var swhithLang = document.querySelectorAll(".langCheck__item:not(.selected) input");
  fetch("./static/localisation/localisation.json").then(function (response) {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText));
    }

    return Promise.resolve(response);
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    var localis = data,
        localArr = ["ru", "tr", "pt"],
        langDisplay = document.querySelector(".langCheck__item.selected"),
        langDisplayFlag = langDisplay.querySelector(".icon"),
        langDisplayContext = langDisplay.querySelector(".langContext"),
        languageHref = window.location.hash;

    if (languageHref.length != 0) {
      console.log("111");
      language = languageHref.substr(1);
      langDisplay.className = "langCheck__item langCheck__item-".concat(language, " selected");
      langDisplayFlag.className = "icon icon-".concat(language);
      langDisplayContext.innerHTML = language;
      document.querySelectorAll(".langCheck__item:not(.selected)").forEach(function (item) {
        if (item.classList.contains("langCheck__item-".concat(language))) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    } else if (language.length != 0 && localArr.includes(language)) {
      console.log("222");
      langDisplay.className = "langCheck__item langCheck__item-".concat(language, " selected");
      langDisplayFlag.className = "icon icon-".concat(language);
      langDisplayContext.innerHTML = language;
      document.querySelectorAll(".langCheck__item:not(.selected)").forEach(function (item) {
        if (item.classList.contains("langCheck__item-".concat(language))) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    }

    for (var key in localis) {
      var string = document.querySelectorAll(".lng-" + key),
          stringLocalis = localis[key][language];

      if (string && stringLocalis) {
        var _iterator = _createForOfIteratorHelper(string),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var elem = _step.value;
            elem.innerHTML = localis[key][language];
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
  })["catch"](function (error) {
    return console.log("error", error);
  }); //  LOCALISATION  LOCALISATION  LOCALISATION
  //  SWHITCH LOCALISATION  SWHITCH LOCALISATION  SWHITCH LOCALISATION

  swhithLang.forEach(function (item) {
    item.addEventListener("change", function () {
      var val = item.name;
      window.location.href = window.location.pathname + "#" + val;
      location.reload();
      language = val;
    });
  }); //  SWHITCH LOCALISATION  SWHITCH LOCALISATION  SWHITCH LOCALISATION

  ;
});
window.addEventListener('load', function () {
  var body = document.querySelector('body');
  body.classList.remove('loader');
});