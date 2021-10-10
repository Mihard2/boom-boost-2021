// //      определение языка указанного в ссылке
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
