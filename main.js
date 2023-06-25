"use strict";

{
  function render(quiz) {
    const main = document.querySelector("main");

    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    h2.textContent = quiz[0];

    const ul = document.createElement("ul");
    const li0 = document.createElement("li");
    li0.textContent = quiz[1];
    li0.addEventListener("click", () => {
      if (quiz[4] === 0) {
        li0.classList.add("correct");
      } else {
        li0.classList.add("wrong");
      }
    });
    const li1 = document.createElement("li");
    li1.textContent = quiz[2];
    li1.addEventListener("click", () => {
      if (quiz[4] === 1) {
        li1.classList.add("correct");
      } else {
        li1.classList.add("wrong");
      }
    });
    const li2 = document.createElement("li");
    li2.textContent = quiz[3];
    li2.addEventListener("click", () => {
      if (quiz[4] === 2) {
        li2.classList.add("correct");
      } else {
        li2.classList.add("wrong");
      }
    });

    ul.appendChild(li0);
    ul.appendChild(li1);
    ul.appendChild(li2);

    section.appendChild(h2);
    section.appendChild(ul);
    main.appendChild(section);
  }

  const quizzes = [
    ['Which is "TODAY"?', "明日　あした", "今日　きょう", "昨日　きのう", 1],
    ['Which is "TRAIN"?', "電車　でんしゃ", "電話　でんわ", "電気　でんき", 0],
    ['Which is "HUNDRED"?', "千　せん", "万　まん", "百　ひゃく", 2],
    [
      'Which is "FRYDAY"?',
      "月曜日　げつようび",
      "水曜日　すいようび",
      "金曜日　きんようび",
      2,
    ],
    [
      'Which is "BREAKFAST"?',
      "朝ごはん　あさごはん",
      "昼ごはん　ひるごはん",
      "夜ごはん　よるごはん",
      0,
    ],
    ['Which is "NORTH"?', "東　ひがし", "南　みなみ", "北　きた", 2],
    ['Which is "OATS"?', "フルーツ", "オーツ", "ナッツ", 1],
    ['Which is correct"?', "カプチーノ", "かこいい", "すばらし", 0],
    ['Which has "EAR" inside?', "話す　はなす", "聞く　きく", "見る　みる", 1],
    [
      'Which is inside of "Yuko\'s name"?',
      "右　みぎ",
      "左　ひだり",
      "上　うえ",
      0,
    ],
  ];

  quizzes.forEach((quiz) => {
    render(quiz);
  });
}
