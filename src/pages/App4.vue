<script setup>
import { ref } from 'vue'

import bgImage from '../assets/Group 35.png'
import tours from '../tours.json'

const showSearch = ref(false)
const currentTour = ref(0)

function toggleSearch() {
  showSearch.value = !showSearch.value
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
    })
  }
}

function nextTour() {
  currentTour.value++

  if (currentTour.value >= tours.length) {
    currentTour.value = 0
  }
}

function prevTour() {
  currentTour.value--

  if (currentTour.value < 0) {
    currentTour.value = tours.length - 1
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
  <div id="app4">

    <section
        class="hero"
        :style="{ backgroundImage: `url(${bgImage})` }"
    >

      <header class="header">

        <div class="logo">

          <span class="logo-main">
            SE
          </span>

          <div class="logo-text">
            <span>Swiss</span>
            <span>Escape</span>
          </div>

          <img
              src="../assets/Line 1.png"
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

            <span @click="toggleSearch">
              ⌕
            </span>

          </div>

        </nav>

      </header>

      <div class="content">

        <h1>
          Путешествуйте по
          Швейцарии, как
          местные
        </h1>

        <p>
          «Швейцария без переплат
          и языкового барьера».
        </p>

      </div>

      <div class="hero-buttons">

        <div class="buttons">
          <router-link to="/app2">
            <button>Рассчитать тур</button>
          </router-link>
          <router-link to="/app3">
            <button>Подать заявку</button>
          </router-link>

      </div>
      </div>
    </section>

    <section class="tours-section" id="tours-section">

      <h1 class="title">
        Туры
      </h1>

      <div
          v-if="tours.length"
          class="tour-card"
      >

        <img
            :src="tours[currentTour].image"
            alt=""
            class="tour-image"
        >

        <div class="tour-content">

          <h2>
            {{ tours[currentTour].title }}
          </h2>

          <p>
            <span>Кому:</span>
            {{ tours[currentTour].forWho }}
          </p>

          <p>
            <span>Длительность:</span>
            {{ tours[currentTour].duration }}
          </p>

          <p>
            <span>Маршрут:</span>
            <br>

            {{ tours[currentTour].route }}
          </p>

          <div>

            <span>
              Что входит:
            </span>

            <ul>

              <li
                  v-for="(item, index) in tours[currentTour].includes"
                  :key="index"
              >
                {{ item }}
              </li>

            </ul>

          </div>

          <p class="price">

            <span>
              Цена ориентир:
            </span>

            {{ tours[currentTour].price }}

          </p>

        </div>

      </div>

      <div class="tour-buttons">

        <button @click="prevTour">
          <img src="../assets/strela.png">
        </button>

        <button @click="nextTour">
          <img src="../assets/strela2.png">
        </button>

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
  src: url('../assets/Oranienbaum-Regular.ttf')
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
.header {
  position: relative;
  z-index: 3;
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
  font-family: 'Oranienbaum', sans-serif;
  background: #f4f1ee;
  border: none;
  padding: 18px 42px;
  border-radius: 999px;
  font-size: 28px;
  cursor: pointer;
  transition: 0.25s;
}

.buttons button:hover {
  transform: translateY(-2px);
  background: white;
}
.advantages {
  padding: 80px 40px;
  background: #f5f5f5;
  font-family: "Georgia", serif;
}

.advantages__container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 60px;
}

.advantages__content {
  flex: 1;
}

.advantages h2 {
  font-size: 72px;
  font-weight: 400;
  margin-bottom: 80px;
  line-height: 1;
  align-items: center;
  margin-left: 80px;
}

.advantage-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 35px;
  max-width: 650px;
}

.icon {
  font-size: 32px;
  line-height: 1;
  margin-top: 4px;
}

.advantage-item p {
  font-size: 30px;
  line-height: 1.3;
  margin: 0;
  color:#36494C;
}

.advantages__images {
  position: relative;
  width: 600px;
  height: 600px;
  flex-shrink: 0;
  margin-top: 60px;
}

.advantages__images img {
  object-fit: cover;
  position: absolute;
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.img-back {
  width: 400px;
  height: 450px;
  top: 0;
  left: 0;
}

.img-front {
  width: 400px;
  height: 450px;
  bottom: 0;
  right: 0;
}
.routes {
  background: #eef2f1;
  padding: 60px 30px;
  font-family: "Georgia", serif;
}

.routes__container {
  max-width: 1200px;
  margin: 0 auto;
}

.routes h2 {
  font-size: 56px;
  font-weight: 400;
  margin-left: 300px;
  justify-content: center;
  align-items: center;
}

.route-card {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 70px;
  padding: 70px 0;
  border-top: 1px solid #7b8a87;
}

.route-card:first-of-type {
  border-top: none;
}

.route-card img {
  width: 550px;
  height: 350px;
  object-fit: cover;
  flex-shrink: 0;
}

.route-content {
  flex: 1;
}

.route-content h3 {
  font-size: 60px;
  font-weight: 400;
  margin-bottom: 10px;
  line-height: 1.1;
  color: #39504A;
}

.route-content p {
  font-size: 30px;
  margin-bottom: 10px;
  line-height: 1.4;
  color: #39504A;
}

.route-content span {
  display: block;
  font-size: 32px;
  margin-bottom: 20px;
}

.route-content button {
  padding: 18px 60px;
  border: none;
  border-radius: 40px;
  background: #8b9a96;
  color: white;
  font-size: 29px;
  font-family: inherit;
  cursor: pointer;
  transition: 0.3s;
}

.route-content button:hover {
  background: #73817d;
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

.tours-section {
  background: #f3f3f3;
  padding: 70px 40px;
  min-height: 100vh;
  font-family: Georgia, serif;
}

.title {
  text-align: center;
  font-size: 82px;
  font-weight: 400;
  margin-bottom: 50px;
  color: #111;
}

.tour-card {
  max-width: 1550px;
  margin: 0 auto;
  display: flex;
  gap: 50px;
  background: #d7dddf;
  padding: 45px;
  border-radius: 35px;
  align-items: flex-start;
}

.tour-image {
  width: 540px;
  height: 750px;
  object-fit: cover;
  border-radius: 28px;
  flex-shrink: 0;
}

.tour-content {
  flex: 1;
  color: #39504A;
}

.tour-content h2 {
  text-align: center;
  font-size: 52px;
  font-weight: 400;
  margin-bottom: 30px;
  color: #39504A;
}

.tour-content p {
  font-size: 31px;
  line-height: 1.45;

  margin-bottom: 18px;
}

.tour-content strong {
  font-weight: 500;
}

.tour-content ul {
  margin-top: 12px;
  padding-left: 30px;
}

.tour-content li {
  font-size: 31px;
  line-height: 1.5;
  color: #39504A;
}

.price {
  margin-top: 35px;
  font-size: 36px;
}

.tour-buttons {
  display: flex;
  justify-content: center;
  gap: 180px;
  margin-top: 35px;
}

.tour-buttons button {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: none;
  background: transparent;
  font-size: 38px;
  cursor: pointer;
  transition: 0.25s;
}

.tour-buttons button:hover {

  transform: scale(1.08);
}
.tours-section span{
  font-size: 31px;
  color: black;
}

@media (max-width: 768px) {

  .hero {
    height: auto;
    padding-bottom: 50px;
    background-position: center;
  }

  .header {
    flex-direction: column;
    align-items: center;
    padding: 16px;
    gap: 18px;
  }

  .nav {
    order: 1;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 14px;
    border-radius: 20px;
  }

  .nav a {
    font-size: 18px;
  }

  .search-box {
    width: 100%;
    margin-left: 0;
    padding: 12px 16px;
  }

  .logo {
    order: 2;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .logo-main {
    font-size: 78px;
  }

  .logo-text {
    font-size: 28px;
    align-items: center;
  }

  .line {
    display: none;
  }

  .content {
    padding: 20px;
    text-align: center;
    max-width: 100%;
  }

  .content h1 {
    font-size: 36px;
    line-height: 1.2;
    margin-bottom: 18px;
  }

  .content p {
    font-size: 24px;
    line-height: 1.4;
    margin-bottom: 25px;
  }
  .buttons {
    flex-direction: column;
    align-items: center;
    gap: 18px;
    margin-top: 20px;
  }

  .buttons button {
    width: 240px;
    padding: 14px;
    font-size: 20px;
  }

  .tours-section {
    padding: 40px 16px;
  }

  .title {
    font-size: 50px;
    margin-bottom: 28px;
  }

  .tour-card {
    flex-direction: column;
    gap: 24px;
    padding: 20px;
    border-radius: 24px;
  }

  .tour-image {
    width: 100%;
    height: 320px;
    border-radius: 20px;
  }

  .tour-content {
    text-align: center;
  }

  .tour-content h2 {
    font-size: 30px;
    margin-bottom: 20px;
  }

  .tour-content p {
    font-size: 20px;
    line-height: 1.5;
  }

  .tour-content li {
    font-size: 20px;
    line-height: 1.5;
    text-align: left;
  }

  .tours-section span {
    font-size: 20px;
  }

  .price {
    font-size: 24px;
  }

  .tour-buttons {
    gap: 30px;
    margin-top: 25px;
  }

  .tour-buttons button {
    width: 60px;
    height: 60px;
  }

  .tour-buttons img {
    width: 40px;
  }

  footer {
    height: auto;
    padding: 35px 20px;
  }

  footer .header {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 30px;
  }

  footer {
    height: auto;
    padding: 40px 20px;
  }

  footer .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    text-align: center;
  }

  footer .logo {
    order: 1;
  }

  .info {
    order: 2;
    position: static;
    margin: 0;
    font-size: 17px;
    line-height: 1.6;
  }

  .contact {
    order: 3;
    position: static;
    margin: 0;
    width: 100%;
  }

  .contact-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  .contact-item h3 {
    font-size: 17px;
  }

  .document {
    order: 4;
    position: static;
    margin: 15px 0 0;
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-items: center;
  }

  .document a {
    font-size: 17px;
  }
}
</style>