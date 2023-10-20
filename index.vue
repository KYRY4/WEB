<template>
    <div class="main">
      <form>
        <div>
          <input placeholder="Ваш Email" class="input" type="email" name="password">
          <input placeholder="Ваш Пароль" class="input input-prgf" type="password" name="phone">
        </div>
        <div>
          <a href="main.vue">
            <button type="button">войти</button>
          </a>
        </div>
      </form>
      <a href="registr.html">
        <button>Зарегистрироваться</button>
      </a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
  }
  </script>
  
  <style>
  @import url('css/main.css');
  </style>