<script setup>

import { reactive, ref } from 'vue'
const showSearch = ref(false)
function toggleSearch() {
  showSearch.value = !showSearch.value
}
const form = reactive({
  name: '',
  phone: '',
  email: '',
  adults: '',
  children: '',
  startDate: '',
  endDate: '',
})

const errors = reactive({
  name: '',
  phone: '',
  email: '',
  adults: '',
  children: '',
  startDate: '',
  endDate: '',
})

function validateForm() {
  let valid = true
  Object.keys(errors).forEach(key => {
    errors[key] = ''
  })
  if (!form.name.trim()) {
    errors.name = 'Введите имя'
    valid = false
  }
  const phoneRegex = /^[0-9+()\-\s]{7,20}$/
  if (!phoneRegex.test(form.phone)) {
    errors.phone = 'Неправильный номер телефона'
    valid = false
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.email)) {
    errors.email = 'Неправильный email'
    valid = false
  }
  if (!form.adults) {
    errors.adults = 'Выберите взрослых'
    valid = false
  }
  if (!form.children) {
    errors.children = 'Выберите детей'
    valid = false
  }
  if (!form.startDate) {
    errors.startDate = 'Выберите дату начала'
    valid = false
  }
  if (!form.endDate) {
    errors.endDate = 'Выберите дату конца'
    valid = false
  }
  if (
      form.startDate &&
      form.endDate &&
      form.startDate > form.endDate
  ) {
    errors.endDate = 'Дата конца раньше даты начала'
    valid = false
  }
  return valid
}

function submitForm() {
  if (validateForm()) {
    alert('Форма успешно отправлена!')
  }
}
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
    })
  }
}

const footerDocuments = [
  {
    title: "О компании",
    file: "/docs/company.png",
  },

  {
    title: "Договор оферты",
    file: "/docs/dogovor.pdf",
  },

  {
    title: "Политика конфиденциальности",
    file: "/docs/policy.pdf",
  },

  {
    title: "Реквизиты (по запросу)",
    file: "/docs/req.pdf",
  },
];
</script>

<template>
  <section
      class="hero"
      style="background: url('/src/assets/Group 35.png') center/cover no-repeat;"
  >

    <!-- HEADER -->
    <header class="header">

      <div class="logo">

        <span class="logo-main">SE</span>

        <div class="logo-text">
          <span>Swiss</span>
          <span>Escape</span>
        </div>

        <img
            src="/src/assets/Line 1.png"
            alt=""
            class="line"
        >

      </div>

      <nav class="nav">

        <a href="#" @click.prevent="scrollToSection('contacts')">Контакты</a>
        <router-link to="/app5"><a href="#">Отзывы</a></router-link>
        <router-link to="/app4"><a href="">Туры</a></router-link>
        <router-link to="home"><a href="#">Маршруты</a></router-link>

        <div class="search-box">

          <input
              v-if="showSearch"
              type="text"
              placeholder="Поиск"
          >

          <span @click="toggleSearch">⌕</span>
        </div>

      </nav>

    </header>

    <!-- MAIN -->
    <div class="main-block">

      <!-- TEXT -->
      <div class="content">

        <h1>
          Путешествуйте по
          Швейцарии, как
          местные
        </h1>

        <p>
          «Швейцария без переплат и
          языкового барьера».
        </p>

      </div>

      <!-- FORM -->
      <div class="form-box">

        <h2>Введите данные</h2>

        <form
            id="tour-form"
            @submit.prevent="submitForm"
        >

          <!-- ИМЯ -->
          <input
              v-model="form.name"
              type="text"
              placeholder="Имя"
              :class="{ errorInput: errors.name }"
          >

          <p
              v-if="errors.name"
              class="errorText"
          >
            {{ errors.name }}
          </p>

          <!-- ТЕЛЕФОН -->
          <input
              v-model="form.phone"
              type="tel"
              placeholder="Телефон"
              :class="{ errorInput: errors.phone }"
          >

          <p
              v-if="errors.phone"
              class="errorText"
          >
            {{ errors.phone }}
          </p>

          <!-- EMAIL -->
          <input
              v-model="form.email"
              type="email"
              placeholder="E-mail"
              :class="{ errorInput: errors.email }"
          >

          <p
              v-if="errors.email"
              class="errorText"
          >
            {{ errors.email }}
          </p>

          <!-- PEOPLE -->
          <div class="people-title">
            Количество человек
          </div>

          <div class="people-select">

            <div class="select-wrapper">

              <select
                  v-model="form.adults"
                  :class="{ errorInput: errors.adults }"
              >
                <option value="">
                  Выбрать взрослых
                </option>

                <option>
                  1 взрослый
                </option>

                <option>
                  2 взрослых
                </option>

                <option>
                  3 взрослых
                </option>

              </select>

              <p
                  v-if="errors.adults"
                  class="errorText"
              >
                {{ errors.adults }}
              </p>

            </div>

            <div class="select-wrapper">

              <select
                  v-model="form.children"
                  :class="{ errorInput: errors.children }"
              >
                <option value="">
                  Дети (если есть)
                </option>

                <option>
                  1 ребенок
                </option>

                <option>
                  2 ребенка
                </option>

              </select>

              <p
                  v-if="errors.children"
                  class="errorText"
              >
                {{ errors.children }}
              </p>

            </div>

          </div>

          <!-- DATE -->
          <div class="date-title">
            Дата :
          </div>

          <!-- START DATE -->
          <div class="date-group">

            <label>Начало</label>

            <div class="date-wrapper">

              <input
                  v-model="form.startDate"
                  type="date"
                  :class="{ errorInput: errors.startDate }"
              >

              <p
                  v-if="errors.startDate"
                  class="errorText"
              >
                {{ errors.startDate }}
              </p>

            </div>

          </div>

          <!-- END DATE -->
          <div class="date-group">

            <label>Конец</label>

            <div class="date-wrapper">

              <input
                  v-model="form.endDate"
                  type="date"
                  :class="{ errorInput: errors.endDate }"
              >

              <p
                  v-if="errors.endDate"
                  class="errorText"
              >
                {{ errors.endDate }}
              </p>

            </div>

          </div>

          <!-- BUTTON -->
          <div class="buttons">

            <button type="submit">
              Рассчитать тур
            </button>

          </div>

        </form>

      </div>

    </div>

  </section>

  <!-- FOOTER -->
  <footer
      class="footer"
      id="contacts"
  >

    <header class="header">

      <div class="logo">

        <span class="logo-main">SE</span>

        <div class="logo-text">
          <span>Swiss</span>
          <span>Escape</span>
        </div>

        <p>
          © 2025 SwissEscape — Туры по Швейцарии
        </p>

      </div>

      <div class="info">

        <h3>
          Оплата: Visa / Mastercard / СБП
        </h3>

        <h3>
          Туристическая страховка включена в тур
        </h3>

        <h3>
          Чеки и ЭДО
        </h3>

      </div>

      <div class="contact">

        <div class="contact-item">

          <img
              src="/src/assets/phone.png"
              alt=""
          >

          <h3>
            +7 (495) 123-45-67 |
            info@swiss-escape.ru
          </h3>

        </div>

        <div class="contact-item">

          <img
              src="/src/assets/planet.png"
              alt=""
          >

          <h3>
            Telegram | WhatsApp | Instagram
          </h3>

        </div>

        <div class="document" style="display: flex; justify-content: space-between; align-items: center; gap: 30px; ">
          <a
              v-for="doc in footerDocuments"
              :key="doc.title"
              :href="doc.file"
              download
              style="
      text-decoration:none;
      white-space:nowrap;
    "
          >
            {{ doc.title }}
          </a>
        </div>

      </div>

    </header>

  </footer>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Oranienbaum', sans-serif;
}
@font-face {
  font-family: 'Oranienbaum';
  src: url('/src/assets/Oranienbaum-Regular.ttf')
  format('truetype');
}
body {
  font-family: 'Oranienbaum', sans-serif;
  background: #111;
}
.hero {
  width: 100%;
  min-height: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 28px 40px;
}

.logo {
  display: flex;
  align-items: flex-start;
  color: white;
  gap: 8px;
  position: relative;
}

.logo-main {
  font-size: 130px;
  line-height: 0.8;
}

.logo-text {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  font-size: 45px;
  line-height: 1;
}

.line {
  position: absolute;
  margin-top: 110px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 45px;
  background: #1A252F;
  padding: 14px 26px;
  border-radius: 50px;
  width: 1000px;
}
.nav a {
  color: white;
  text-decoration: none;
  font-size: 32px;
}

.search-box {
  display: flex;
  align-items: center;
  border: 1px solid rgba(255,255,255,0.6);
  border-radius: 30px;
  padding: 15px 14px;
  width: 400px;
  margin-left: 10px;
}

.search-box input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: white;
}

.search-box span {
  color: white;
  font-size: 18px;
  margin-left: 10px;
}

.main-block {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px 60px;
}

.content {
  color: white;
  max-width: 700px;
}

.content h1 {
  font-size: 68px;
  line-height: 1.08;
  margin-bottom: 33px;
  margin-right: 10px;
  margin-top: 40px;
  font-weight: normal;
}

.content p {
  font-size: 48px;
  line-height: 1.4;
}

.form-box {
  width: 720px;
  background: rgba(255,255,255,0.92);
  border-radius: 40px;
  padding: 35px;
}

.form-box h2 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: #222;
  font-weight: normal;
}

.form-box form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form-box input,
.form-box select {
  width: 100%;
  height: 52px;
  border-radius: 30px;
  border: 1px solid #aaa;
  padding: 0 18px;
  font-size: 18px;
  font-family: Georgia, serif;
  outline: none;
}

.people-title {
  text-align: center;
  font-size: 34px;
  margin-top: 10px;
  color: #222;
}

.people-select {
  display: flex;
  gap: 10px;
}

.select-wrapper {
  width: 100%;
}

.date-title {
  font-size: 34px;
  color: #222;
  margin-top: 10px;
}

.date-group {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.date-group label {
  font-size: 22px;
  color: #222;
  width: 90px;
  margin-top: 12px;
}

.date-wrapper {
  width: 100%;
}

.buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.buttons button {
  background: white;
  border: none;
  padding: 18px 42px;
  border-radius: 999px;
  font-size: 28px;
  font-family: 'Oranienbaum', sans-serif;
  cursor: pointer;
  transition: 0.25s;
}

.buttons button:hover {
  transform: translateY(-2px);
  background: white;
}

footer {
  background: #5E6B6E;
  height: 180px;

}
footer p {
  position: absolute;
  z-index: 3;
  margin-top: 115px;
  margin-right: 90px;
  color: white;
}
footer p {
  font-size: 18px;
  line-height: 1.08;
  font-weight: 400;
}
.info{
  position: absolute;
  justify-content: center;
  align-items: center;
  margin-left: 500px;
  line-height: 1.58;
  color: white;
  font-weight: normal;
  font-size: 17px;
  margin-top: 10px;
}
.contact{
  position: absolute;
  margin-left: 1100px;
}
.contact-item{
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-around;

}
.contact-item h3{
  font-size: 19px;
  color: white;
}
.document {
  position: absolute;
  display: flex;
  margin-left: -500px;
  margin-top: 10px;
}
.document a{
  font-size: 16px;
  justify-content: space-around;
  color: white;
}

/* ERRORS */
.errorText {
  color: red;
  font-size: 14px;
  margin-top: 5px;
  margin-left: 10px;
}

.errorInput {
  border: 2px solid red !important;
}
@media (max-width: 700px) {

  .hero {
    min-height: auto;
  }

  /* HEADER */
  .header {
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 20px;
  }

  .logo {
    justify-content: center;
    align-items: center;
  }

  .logo-main {
    font-size: 70px;
  }

  .logo-text {
    font-size: 24px;
    margin-top: 5px;
  }

  .line {
    display: none;
  }

  .nav {
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    padding: 15px;
    border-radius: 20px;
  }

  .nav a {
    font-size: 18px;
  }

  .search-box {
    width: 100%;
    margin-left: 0;
  }

  /* MAIN */
  .main-block {
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 30px;
  }

  .content {
    text-align: center;
    max-width: 100%;
  }

  .content h1 {
    font-size: 38px;
    margin: 0 0 20px;
  }

  .content p {
    font-size: 24px;
  }

  /* FORM */
  .form-box {
    width: 100%;
    padding: 25px 20px;
    border-radius: 25px;
  }

  .form-box h2 {
    font-size: 30px;
  }

  .people-title,
  .date-title {
    font-size: 24px;
  }

  .people-select {
    flex-direction: column;
  }

  .date-group {
    flex-direction: column;
    gap: 5px;
  }

  .date-group label {
    width: auto;
    margin-top: 0;
  }

  .buttons button {
    width: 100%;
    font-size: 22px;
    padding: 15px;
  }

  /* FOOTER */
  footer {
    height: auto;
    padding: 25px 15px;
  }

  footer .header {
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }

  footer p,
  .info,
  .contact,
  .document {
    position: static;
    margin: 0;
  }

  footer p {
    text-align: center;
    margin-top: 10px;
  }

  .info {
    text-align: center;
    font-size: 14px;
  }

  .contact {
    width: 100%;
  }

  .contact-item {
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    text-align: center;
  }

  .contact-item h3 {
    font-size: 15px;
  }

  .document {
    flex-direction: column !important;
    align-items: center;
    gap: 10px !important;
    margin-top: 20px;
  }

  .document a {
    font-size: 14px;
    text-align: center;
  }
}
</style>