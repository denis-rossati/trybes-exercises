//divs do documento
let text = document.getElementById("text");
let title = document.getElementById("title");
let AllContent = document.querySelectorAll(".content");
let container = document.getElementById("container");

//valores do input
let inputBackground = (document.getElementById("inputBackground").value);
let inputColorText = (document.getElementById("inputColor").value);
let inputFontSize = (document.getElementById("inputSize").value);
let inputLineHeight = (document.getElementById("inputSpacement").value);
let inputFontFamily = (document.getElementById("inputFamily").value);

//botoes
let buttonBackground = document.getElementById("btBackground");
let buttonColor = document.getElementById("btColor");
let buttonSize = document.getElementById("btSize");
let buttonHeight = document.getElementById("btSpacement");
let buttonFontFamily = document.getElementById("btFamily");

//eventos dos botoes



localStorage.setItem("colorBackground", "lightgray");

localStorage.setItem("colorText", "black");
localStorage.setItem("colorTitle", "green");

localStorage.setItem("fontSizeText", "20px");
localStorage.setItem("fontSizeTitle", "30px");

localStorage.setItem("lineHeightText", "30px");
localStorage.setItem("lineHeightTitle", "30px");

localStorage.setItem("fontFamlyText", "monospace");
localStorage.setItem("fontFamilyTitle", "monospace");

container.style.backgroundColor = (localStorage.getItem("colorBackground"));

text.style.color = (localStorage.getItem("colorText"));
title.style.color = (localStorage.getItem("colorTitle"));

text.style.fontSize = (localStorage.getItem("fontSizeText"));
title.style.fontSize = (localStorage.getItem("fontSizeTitle"));

text.style.lineHeight = (localStorage.getItem("lineHeightText"));
title.style.lineHeight = (localStorage.getItem("lineHeightTitle"));

text.style.fontFamily = (localStorage.getItem("fontFamlyText"));
title.style.fontFamily = (localStorage.getItem("fontFamilyTitle"));