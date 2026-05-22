<script setup>
import bgImage from '../assets/Group 35.png'

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
    })
  }
}

</script>

<template>
<div id="app5">
  <section
      class="hero"
      :style="{ backgroundImage: `url(${bgImage})` }">
    <header class="header">
      <div class="logo">
        <span class="logo-main">SE</span>
        <div class="logo-text">
          <span>Swiss</span>
          <span>Escape</span>
        </div>
        <img src="../assets/Line 1.png" alt="" class="line">
      </div>

      <nav class="nav">
        <a href="#" @click.prevent="scrollToSection('contacts')">Контакты</a>
        <router-link to="/app5"><a href="#">Отзывы</a></router-link>
        <router-link to="/app4"><a href="">Туры</a></router-link>
        <router-link to="/home"><a href="#" @click.prevent="scrollToSection('routes')">Маршруты</a></router-link>

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

    <div class="content">
      <h1>Путешествуйте по
        Швейцарии, как
        местные</h1>

      <p>«Швейцария без переплат и
        языкового барьера».</p>


    </div>
    <div class="buttons">
      <router-link to="/app2">
        <button>Рассчитать тур</button>
      </router-link>
      <router-link to="/app3">
        <button>Подать заявку</button>
      </router-link>

    </div>
  </section>
  <footer class="footer" id="contacts">
    <header class="header">
      <div class="logo">
        <span class="logo-main">SE</span>
        <div class="logo-text">
          <span>Swiss</span>
          <span>Escape</span>
        </div>
        <p>© 2025 SwissEscape — Туры по Швейцарии</p>
      </div>
      <div class="info">
        <h3 style="font-weight: normal;">Оплата: Visa / Mastercard / СБП</h3>
        <h3 style="font-weight: normal;">Туристическая страховка включена в тур</h3>
        <h3 style="font-weight: normal;">Чеки и ЭДО (электронный документооборот)</h3>
      </div>
      <div class="contact">
        <div class="contact-item">
          <img src="../assets/phone.png" alt="">
          <h3 style="font-weight: normal;">+7 (495) 123-45-67  |  info@swiss-escape.ru</h3>
        </div>
        <div class="contact-item">
          <img src="../assets/planet.png" alt="">
          <h3 style="font-weight: normal;">Telegram | WhatsApp | Instagram</h3>
        </div>

        <div class="document" style="display: flex; justify-content: space-between; align-items: center; gap: 30px; ">
          <a href="#" style="text-decoration: none; white-space: nowrap;">О компании</a>
          <a href="#" style="text-decoration: none; white-space: nowrap;">Договор оферты</a>
          <a href="#" style="text-decoration: none; white-space: nowrap;">Политика конфиденциальности</a>
          <a href="#" style="text-decoration: none; white-space: nowrap;">Реквизиты (по запросу)</a>
        </div>
      </div>
    </header>
  </footer>
</div>
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
  position: relative;
  width: 100%;
  height: 100vh;
  background: #222 center/cover no-repeat;

}
/* Header */
.header {
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 28px 40px;
}

/* Logo */

.logo {
  display: flex;
  align-items: flex-start;
  color: white;
  gap: 8px;
}

.logo-main {
  font-size: 130px;
  line-height: 0.8;
  font-weight: 400;
}

.logo-text {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  font-size: 45px;
  line-height: 1;
}
.line{
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
  padding: 16px 26px;
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
}

/* Main content */
.content {
  position: relative;
  z-index: 3;
  padding-left: 50px;
  padding-top: 90px;
  color: white;
  max-width: 700px;
}

.content h1 {
  font-size: 68px;
  line-height: 1.08;
  font-weight: 400;
  margin-bottom: 40px;
}

.content p {
  font-size: 48px;
  line-height: 1.4;
  margin-bottom: 70px;
}

/* Buttons */
.buttons {
  display: flex;
  gap: 90px;
  justify-content: center;
  margin-top:200px;

}

.buttons button {
  background: #f4f1ee;
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
  margin-left: 1300px;
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
  margin-left: -700px;
  margin-top: 10px;
}
.document a{

  font-size: 16px;
  justify-content: space-around;
  color: white;

}
</style>