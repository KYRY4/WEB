<template>
    <div>
      <a href="main.vue">
        <button>Назад</button>
      </a>
      <h1 class="center"> Квартиры в городе Сочи</h1>
      <div>
        <h2 class="txt-color"> Квартира-Студия, 29 кв. м.</h2>   
        <a href="">
          <img src="picture/studia.jpg" class="kvartira">
        </a>
        <h1 class="txt-color">Цена: 4 000 000 руб. </h1>
      </div>
      <div>
        <h2 class="txt-color"> 2-к Квартира, 75 кв. м.</h2>   
        <a href="">
          <img src="picture/2komn.jpeg" class="kvartira">
        </a>
        <h1 class="
  txt-color">Цена: 9 500 000 руб. </h1>
      </div>
      <div>
        <h2 class="txt-color"> 3-к Квартира, 106 кв. м.</h2>   
        <a href="">
          <img src="picture/3komn.jpg" class="kvartira">
        </a>
        <h1 class="txt-color">Цена: 10 000 000 руб. </h1>
      </div>
      <div>
        <h2 class="txt-color"> 4-к Квартира, 170 кв. м.</h2>   
        <a href="">
          <img src="picture/4komn.jpg" class="kvartira">
        </a>
        <h1 class="txt-color">Цена: 17 000 000 руб. </h1>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92455.45311278003!2d39.64272812287582!3d43.601691908762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f5d4e111834423%3A0x6e6f61866a5d5df8!2z0KHQvtGH0LgsINCa0YDQsNGB0L3QvtC00LDRgNGB0LrQuNC5INC60YDQsNC5!5e0!3m2!1sru!2sru!4v1697187641862!5m2!1sru!2sru" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
  }
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Raleway:wght@400;700&family=Roboto:wght@300&display=swap');
  
  .center {
    text-align: center;
  }
  
  .txt-color {
    color: #000;
  }
  
  .kvartira {
    width: 100%;
  }
  </style> 