'use stript';
{
  //ラーメンを作る画像
  const imgRamen = [
    'img/thumbnail_food_ramen_topping.jpg',
    'img/food_men_chuka.png',
    'img/ryouri_man.png',
    'img/cooking_yuderu_otama_woman.png',
    'img/ramen_top_syouyu.png',
    'img/food_men_family_ramen.png'
  ]
  //ダンスの画像
  const imgDance = [
    'img/dance_isyou_girl.png',
    'img/dance_line_dance.png',
    'img/dance_shoot_dance.png',
    'img/dance_tapdance_man.png',
    'img/music_dance_lesson_woman.png',
    'img/otaku_otagei_woman.png',
    'img/pyoko_dance_ballet.png',
  ];
  let count = 1;
  const cooking =document.getElementById('cooking');
  const btn = document.getElementById('btn');
  const cooking2 =document.getElementById('cooking2');
  const btnR = document.getElementById('btnR');
  const dancing =document.getElementById('dancing');
  const btnD = document.getElementById('btnD');

  //ラーメン作りクリックしたら順番に表示
  //countの数が画像の数と同じになったらはじめcount 0からスタート
  btn.addEventListener('click',()=>{
      cooking.src = imgRamen[count];
      count++;
    if(imgRamen.length===count){
      count=0;
    }
  });

  //ラーメン作りをランダムに表示
  btnR.addEventListener('click',()=>{
    let rand = Math.floor(Math.random()*imgRamen.length);
    cooking2.src = imgRamen[rand];
  });
  //ダンスをランダムに表示
  btnD.addEventListener('click',()=>{
    let rand = Math.floor(Math.random()*imgDance.length);
    dancing.src = imgDance[rand];
  });


}