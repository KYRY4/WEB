<template>
    <div>
      <a href="index.vue">
        <button>Назад</button>
      </a>
      <button @click="toggleForm">Форма регистрации</button>
      <div id="form-container" v-show="displayForm">
        <form>
          <label for="name">Ваш Email:</label>
          <input type="email" id="name" @change="handleChange"><br>
  
          <label for="age">Пароль:</label>
          <input type="password" id="age" @change="handleChange"><br>
  
          <label for="age">Потверждение пароля:</label>
          <input type="password" id="age" @change="handleChange"><br>
  
          <label for="city">Ваш город:</label>
          <select id="city" @change="handleChange">
            <option value="Москва">Москва</option>
            <option value="Санкт-Петербург">Санкт-Петербург</option>
            <option value="Сочи">Сочи</option>
            <option value="Хабаровкс">Хабаровкс</option>
          </select><br>
  
          <button type="button" @click="toggleForm">Отмена</button>
        </form>
      </div>
  
      <a href="main.vue">
        <button>Зарегистрироваться</button>
      </a>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        displayForm: false
      }
    },
    methods: {
      toggleForm() {
        this.displayForm = !this.displayForm;
      },
      handleChange() {
        // Выполнять действия при изменении данных в форме
        // например, можно записывать данные в базу данных или localStorage
        console.log('Данные формы изменились');
      }
    }
  }
  </script>