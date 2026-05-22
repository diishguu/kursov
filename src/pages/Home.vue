<script>
import bgImage from '../assets/Group 35.png'

export default {
  data() {
    return {
      showSearch: false,
      bgImage
    }
  },

  methods: {
    toggleSearch() {
      this.showSearch = !this.showSearch
    },

    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        })
      }
    }
  }
}
</script>

<template>
  <div id="app">
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
          <a href="#" @click.prevent="scrollToSection('routes')">Маршруты</a>

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


    <section class="advantages">
      <div class="advantages__container">

        <div class="advantages__content">
          <h2>Наши плюсы</h2>

          <div class="advantage-item">
            <span class="icon"><img src="../assets/aero.png"></span>
            <p>
              Билет на все поезда — включим Swiss Travel Pass,
              вы сэкономите до 50%.
            </p>
          </div>

          <div class="advantage-item">
            <span class="icon"><img src="../assets/home.png"></span>
            <p>
              Проживание 3, 4, хостелы или шале — на ваш бюджет.
            </p>
          </div>

          <div class="advantage-item">
            <span class="icon"><img src="../assets/yoga.png"></span>
            <p>
              Без скрытых платежей – чаевые, вход в горные музеи и
              канатные дороги показаны ДО покупки.
            </p>
          </div>

          <div class="advantage-item">
            <span class="icon"><img src="../assets/Ellipse.png"></span>
            <p>
              Гастро-бонусы — дегустация сыра/шоколада в каждом втором маршруте.
            </p>
          </div>
        </div>

        <div class="advantages__images">
          <img
              src="../assets/image2.png"
              alt="Горы"
              class="img-back"
          />
          <img
              src="../assets/image1.png"
              alt="Город"
              class="img-front"
          />
        </div>

      </div>
    </section>


    <section class="routes" id="routes">
      <div class="routes__container">
        <h2>Популярные маршруты</h2>

        <div class="route-card">
          <img src="../assets/image3.png" alt="Классика за 8 дней">
          <div class="route-content">
            <h3>Классика за 8 дней</h3>
            <p>Цюрих → Люцерн → Интерлакен → Бриенцское озеро → Берн → Женева</p>
            <span>от 1650 € (включая ж/д билет 2 класса)</span>
            <button>Выбрать</button>
          </div>
        </div>

        <div class="route-card">
          <img src="../assets/image4.png" alt="Горы за 5 дней">
          <div class="route-content">
            <h3>Горы за 5 дней</h3>
            <p>Поезд «Ледниковый экспресс» + ночевка в горной хижине на 2300 м</p>
            <span>от 2200 €</span>
            <button>Выбрать</button>
          </div>
        </div>

        <div class="route-card">
          <img src="../assets/image5.png" alt="С детьми за 7 дней">
          <div class="route-content">
            <h3>С детьми за 7 дней</h3>
            <p>Зоопарк, Природа, шоколадная фабрика Cailler, музей транспорта</p>
            <span>от 1800 €</span>
            <button>Выбрать</button>
          </div>
        </div>

        <div class="route-card">
          <img src="../assets/image6.png" alt="Бюджетный вояж">
          <div class="route-content">
            <h3>Бюджетный вояж на поездах за 7 дней</h3>
            <p>Хостелы + завтраки, Swiss Travel Pass 2-го класса, трекинги</p>
            <span>от 890 €</span>
            <button>Выбрать</button>
          </div>
        </div>
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

</style>
