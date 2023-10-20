<template>
    <div>
      <header>
        <a href="Index.html">
          <button type="button">Выйти</button>
        </a>
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <span class="brand-span">ЖИЛОЙ КОМПЛЕКС</span>
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">О комплексе</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Район</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Каталог квартир</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Ипотека</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Контакты</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="picture/picture1.jpg" class="d-block w-100" alt="slayder">
              <div class="carousel-caption d-none d-md-block">
                <h1 class="center">Жилой комплекс <span class="center-span">в историческом центре</span></h1>
              </div>
            </div>
            <div class="carousel-item">
              <img src="picture/picture2.jpg" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h1 class="center">Жилой комплекс <span class="center-span">в историческом центре</span></h1>
                <div class="street">
                  <div class="adress">
                    <img src="">
                    <p class="number-adress"></p>
                  </div>
                  <div class="phone">
                    <img src="">
                    <p class="number-phone"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </header>
      <section class="watch">
        <h1 class="center">Какой город вас интересует?</h1>
        <div class="input-wrapper">
          <a href="Moscow.vue">
            <img src="picture/Moscow.jpg" class="kartinka">
            <button class="btn" type="submit">Москва</button>
          </a>
          <a href="SPB.vue">
            <img src="picture/SPB.jpg" class="kartinka">
            <button class="btn" type="submit">Санкт-Петербург</button>
          </a>
          <a href="Sochi.vue">
            <img src="picture/sochi.jpg" class="kartinka">
            <button class="btn" type="submit">Сочи</button>
          </a>
          <a href="KHV.vue">
            <img src="picture/KHV.jfif" class="kartinka">
            <button class="btn" type="submit">Хабаровкс</button>
          </a>
        </div>
      </section>
      <footer>
        <div class="container">
          <div class="end-text">
            <div>
              <p></p>
              <p>ЖИЛОЙ КОМПЛЕКС</p>
            </div>
            <div>
              <p>О комплексе</p>
              <p>Район</p>
              <p>Католог квартир</p>
              <p>Ипотека</p>
              <p>Контакты</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </template>
  <template>
    <div>
      <div class="chat-container">
        <div class="chat-messages">
          <div v-for="message in messages" :key="message.id" class="chat-message">
            {{ message.content }}
          </div>
        </div>
        <input v-model="newMessage" @keyup.enter="sendMessage" class="chat-input" type="text" placeholder="Type your message...">
        <button @click="sendMessage" class="send-button">Send</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        messages: [],
        newMessage: "",
      };
    },
    methods: {
      sendMessage() {
        if (this.newMessage.trim() !== "") {
          this.messages.push({
            id: Date.now(),
            content: this.newMessage,
          });
          this.newMessage = "";
        }
      },
    },
  };
  </script>
  
  <style>
  .chat-container {
    display: flex;
    flex-direction: column;
  }
  
  .chat-messages {
    height: 200px;
    overflow-y: scroll;
  }
  
  .chat-message {
    background-color: lightgray;
    padding: 5px;
    margin-bottom: 5px;
  }
  
  .chat-input {
    margin-top: 10px;
    padding: 5px;
  }
  
  .send-button {
    margin-top: 10px;
    padding: 5px 10px;
  }
  </style> 
  
  <script>
  export default {
    name: 'App'
  }
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Raleway:wght@400;700&family=Roboto:wght@300&display=swap');
  
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f8f9fa;
    padding: 0;
    margin: 0;
  }
  
  .brand-span {
    color: #00A7E1;
  }
  
  .navbar-light .navbar-nav .nav-link.active {
    color: #00A7E1;
  }
  
  .center {
    text-align: center;
  }
  
  .center-span {
    font-size: 1.2rem;
    font-weight: 700;
  }
  
  .street {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  
  .adress img,
  .phone img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
  
  input[type="submit"] {
    background-color: #00A7E1;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  }
  
  .end-text {
    display: flex;
    justify-content: space-between;
  }
  
  footer {
    margin-top: 20px;
    background-color: #fff;
    border-top: 1px solid #ccc;
    padding: 20px;
  }
  </style>