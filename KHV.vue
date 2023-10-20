<template>
    <div>
      <a href="main.vue">
        <button>Назад</button>
      </a>
      <h1 class="center">Квартиры в городе Хабаровске</h1>
      <div>
        <p class="txt-color"> Квартира-Студия, 35 кв. м.</p>   
        <a href="">
          <img src="picture/studia.jpg" class="kvartira">
        </a>
        <h1 class="txt-color">Цена: 4 700 000 руб.</h1>
      </div> 
      <div>
        <p class="txt-color"> 2-к Квартира, 52 кв. м.</p>   
        <a href="">
          <img src="picture/2komn.jpeg" class="kvartira">
        </a>
        <h1 class="txt-color">Цена: 5 000 000 руб.</h1>
      </div> 
      <div>
        <p class="txt-color"> 3-к Квартира, 68 кв. м.</p>   
        <a href="">
          <img src="picture/3komn.jpg" class="kvartira">
        </a>
        <h1 class="txt-color">Цена: 7 500 000 руб.</h1>
      </div> 
      <div>
        <p class="txt-color"> 4-к Квартира, 89 кв. м.</p>   
        <a href="">
          <img src="picture/4komn.jpg" class="kvartira">
        </a>
        <h1 class="txt-color">Цена: 9 000 000 руб.</h1>
      </div> 
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d169316.65524903193!2d134.94861975843983!3d48.4647268516195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5efae9c6b0368ac9%3A0xfa97bc0e5fba7f50!2z0KXQsNCx0LDRgNC-0LLRgdC6LCDQpdCw0LHQsNGA0L7QstGB0LrQuNC5INC60YDQsNC5!5e0!3m2!1sru!2sru!4v1697101388946!5m2!1sru!2sru" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
    // data, methods, etc.
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Raleway:wght@400;700&family=Roboto:wght@300&display=swap');
  
  body {
    font-family: 'Roboto', sans-serif;
  }
  
  .center {
    text-align: center;
  }
  
  .txt-color {
    color: #000;
  }
  
  .kvartira {
    width: 100px;
    height: 100px;
  }
  </style>