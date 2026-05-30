<script setup>
import { ref } from "vue";
import bgImage from "../assets/Group 35.png";

const showSearch = ref(false);
const toggleSearch = () => {
  showSearch.value = !showSearch.value;
};
const scrollToSection = (sectionId) => {
  const element =
      document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
};

const defaultAvatar =
    "https://avatars.mds.yandex.net/i?id=13df2213112aa3e088d2a3b9614c7d1c_l-9847423-images-thumbs&n=13";
const userName = ref("");
const reviewText = ref("");
const selectedRating = ref(0);
const selectedAvatar = ref(defaultAvatar);
const reviews = ref([
  {
    name: "Boy Cat",
    text: "Очень хороший сервис! Красивые виды Швейцарии.",
    rating: 5,
    avatar: defaultAvatar,
  },
]);
const changeAvatar = (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    selectedAvatar.value =
        e.target.result;
  };
  reader.readAsDataURL(file);
};

const addReview = () => {
  if (selectedRating.value === 0) {
    alert("Выберите оценку");
    return;
  }
  reviews.value.unshift({
    name: userName.value,
    text: reviewText.value,
    rating: selectedRating.value,
    avatar: selectedAvatar.value,
  });

  userName.value = "";
  reviewText.value = "";
  selectedRating.value = 0;
  selectedAvatar.value = defaultAvatar;
};

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
    <section class="reviews">

      <h2 class="reviews-title">ОТЗЫВЫ</h2>

      <form class="review-form" @submit.prevent="addReview">

        <div class="avatar-box">

          <img
              :src="selectedAvatar"
              class="avatar-preview"
          >

          <input
              type="file"
              ref="fileInput"
              accept="image/*"
              hidden
              @change="changeAvatar"
          >

          <button
              type="button"
              class="change-avatar"
              @click="$refs.fileInput.click()"
          >
            +
          </button>

        </div>

        <div class="form-content">

          <div class="form-top">
            <input
                v-model="userName"
                type="text"
                placeholder="Введите имя"
                class="name-input"
                required
            >
            <div class="stars">
            <span
                v-for="star in 5"
                :key="star"
                @click="selectedRating = star"
                :class="{ active: star <= selectedRating }"
            >
              ★
            </span>

            </div>

          </div>

          <textarea
              v-model="reviewText"
              placeholder="Введите отзыв..."
              class="review-textarea"
              required
          ></textarea>

          <button class="submit-btn">
            Отправить отзыв
          </button>

        </div>

      </form>

      <div class="reviews-list">

        <div
            class="review-card"
            v-for="(review, index) in reviews"
            :key="index"
        >

          <img
              :src="review.avatar"
              class="review-avatar"
          >

          <div class="review-content">

            <div class="review-header">

              <h3 class="review-name">
                {{ review.name }}
              </h3>

              <div class="review-rating">

                <span>Оценка</span>

                <div class="review-stars">
                  {{ "★".repeat(review.rating) }}
                </div>

              </div>

            </div>

            <div class="review-text">
              {{ review.text }}
            </div>

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
.reviews{
  max-width:900px;
  margin:auto;
  padding:30px 20px;
  font-family:"Cormorant Garamond", serif;
}

.reviews-title{
  text-align:center;
  font-size:58px;
  margin-bottom:35px;
  font-weight:500;
}
.review-form{
  background:#d4dbdb;
  border-radius:28px;
  padding:18px;
  display:flex;
  gap:20px;
  margin-bottom:45px;
}

.avatar-box{
  position:relative;
  width:95px;
  height:95px;
}

.avatar-preview{
  width:95px;
  height:95px;
  border-radius:50%;
  object-fit:cover;
}

.change-avatar{
  position:absolute;
  right:-5px;
  bottom:-5px;
  width:28px;
  height:28px;
  border:none;
  border-radius:50%;
  background:#5E6B6E;
  color:#fff;
  font-size:22px;
  cursor:pointer;
}

.form-content{
  flex:1;
}

.form-top{
  display:flex;
  justify-content:space-between;
  align-items:center;
}

.name-input{
  border:none;
  background:transparent;
  outline:none;
  font-size:44px;
  width:100%;
  font-family:inherit;
}

.name-input::placeholder{
  color:#000;
}
.stars{
  display:flex;
  gap:5px;
}

.stars span{
  font-size:34px;
  cursor:pointer;
  color:#92a0a0;
}

.stars span.active{
  color:#f1c54f;
}

.review-textarea{
  width:100%;
  height:70px;
  margin-top:10px;
  border-radius:22px;
  border:1px solid #555;
  background:transparent;
  resize:none;
  padding:15px;
  font-size:22px;
  font-family:inherit;
}

.submit-btn{
  margin-top:15px;
  padding:10px 25px;
  border:none;
  border-radius:14px;
  background:#5E6B6E;
  color:#fff;
  font-size:22px;
  cursor:pointer;
  font-family:inherit;
}


.review-card{
  display:flex;
  gap:22px;
  margin-bottom:45px;
}

.review-avatar{
  width:95px;
  height:95px;
  border-radius:50%;
  object-fit:cover;
}

.review-content{
  flex:1;
}

.review-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
}

.review-name{
  font-size:54px;
  margin:0;
  font-weight:500;
}

.review-rating{
  text-align:center;
}

.review-rating span{
  display:block;
  color:#9f9f9f;
  font-size:24px;
}

.review-stars{
  color:#f1c54f;
  font-size:34px;
  letter-spacing:3px;
}

.review-text{
  margin-top:10px;
  background:#d4dbdb;
  border-radius:24px;
  padding:18px 25px;
  font-size:24px;
  line-height:1.1;
}
@media (max-width: 700px) {

  .hero {
    height: auto;
    padding-bottom: 40px;
  }

  .header {
    flex-direction: column;
    align-items: center;
    padding: 20px 15px;
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
    padding: 12px 18px;
  }

  .content {
    max-width: 100%;
    padding: 30px 20px 0;
    text-align: center;
  }

  .content h1 {
    font-size: 38px;
    margin-bottom: 20px;
  }

  .content p {
    font-size: 24px;
    margin-bottom: 30px;
  }

  .buttons {
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top: 30px;
    padding: 0 20px;
  }

  .buttons button {
    width: 100%;
    max-width: 320px;
    font-size: 22px;
    padding: 15px;
  }

  .reviews {
    padding: 20px 15px;
  }

  .reviews-title {
    font-size: 36px;
    margin-bottom: 25px;
  }

  .review-form {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .avatar-box {
    width: 80px;
    height: 80px;
  }

  .avatar-preview {
    width: 80px;
    height: 80px;
  }

  .form-content {
    width: 100%;
  }

  .form-top {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .name-input {
    font-size: 26px;
  }

  .stars {
    align-self: center;
  }

  .stars span {
    font-size: 28px;
  }

  .review-textarea {
    font-size: 18px;
    height: 100px;
  }

  .submit-btn {
    width: 100%;
    font-size: 18px;
  }

  .review-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 15px;
  }

  .review-avatar {
    width: 80px;
    height: 80px;
  }

  .review-header {
    flex-direction: column;
    gap: 10px;
  }

  .review-name {
    font-size: 30px;
  }

  .review-rating span {
    font-size: 16px;
  }

  .review-stars {
    font-size: 24px;
  }

  .review-text {
    font-size: 18px;
    padding: 15px;
  }

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
    flex-wrap: wrap;
    gap: 10px;
    text-align: center;
  }

  .contact-item img {
    width: 20px;
    height: 20px;
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