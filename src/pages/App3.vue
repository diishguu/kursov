<script setup>
import { reactive, ref } from 'vue'

const step = ref(1)
const showSearch = ref(false)

function toggleSearch() {
  showSearch.value = !showSearch.value
}

const form = reactive({


  name: '',
  phone: '+7 ',
  email: '',
  birthDate: '',
  adults: '',
  children: '',
  startDate: '',
  endDate: '',


  passport: '',
  passportDate: '',
  departureCity: '',
  budget: '',
  selectedTour: '',
  hotelType: '',
  insurance: '',

})

const errors = reactive({

  name: '',
  phone: '',
  email: '',
  birthDate: '',
  adults: '',
  children: '',
  startDate: '',
  endDate: '',

  passport: '',
  passportDate: '',
  departureCity: '',
  budget: '',

})

function formatPhone() {

  let numbers = form.phone.replace(/\D/g, '')

  if (numbers.startsWith('7')) {
    numbers = numbers.substring(1)
  }

  let result = '+7 '

  if (numbers.length > 0) {
    result += '(' + numbers.substring(0, 3)
  }

  if (numbers.length >= 4) {
    result += ') ' + numbers.substring(3, 6)
  }

  if (numbers.length >= 7) {
    result += '-' + numbers.substring(6, 8)
  }

  if (numbers.length >= 9) {
    result += '-' + numbers.substring(8, 10)
  }

  form.phone = result
}


function formatPassport() {

  let numbers = form.passport.replace(/\D/g, '')

  if (numbers.length > 10) {
    numbers = numbers.substring(0, 10)
  }

  if (numbers.length > 4) {

    form.passport =
        numbers.substring(0, 4) +
        ' - ' +
        numbers.substring(4)

  }
  else {
    form.passport = numbers
  }

}


function onlyLetters() {

  form.name =
      form.name.replace(/[^а-яА-ЯёЁa-zA-Z\s]/g, '')

}


function onlyCityLetters() {

  form.departureCity =
      form.departureCity.replace(
          /[^а-яА-ЯёЁa-zA-Z\s-]/g,
          ''
      )

}


function onlyNumbersBudget() {

  form.budget =
      form.budget.replace(/\D/g, '')

}


function clearErrors() {

  Object.keys(errors).forEach(key => {
    errors[key] = ''
  })

}

function validateStep1() {

  let valid = true

  clearErrors()


  if (!form.name.trim()) {
    errors.name = 'Введите ФИО'
    valid = false
  }


  const phoneRegex =
      /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/

  if (!phoneRegex.test(form.phone)) {
    errors.phone = 'Введите номер полностью'
    valid = false
  }


  const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(form.email)) {
    errors.email = 'Неверный email'
    valid = false
  }


  if (!form.birthDate) {
    errors.birthDate =
        'Выберите дату рождения'

    valid = false
  }


  if (!form.adults) {
    errors.adults =
        'Выберите взрослых'

    valid = false
  }

  if (!form.startDate) {
    errors.startDate =
        'Выберите дату начала'

    valid = false
  }


  if (!form.endDate) {
    errors.endDate =
        'Выберите дату конца'

    valid = false
  }


  if (
      form.startDate &&
      form.endDate &&
      form.startDate > form.endDate
  ) {

    errors.endDate =
        'Дата конца раньше даты начала'

    valid = false

  }

  return valid

}

function validateStep2() {

  let valid = true

  clearErrors()


  const passportRegex =
      /^\d{4}\s-\s\d{6}$/

  if (!passportRegex.test(form.passport)) {

    errors.passport =
        'Формат: 0000 - 000000'

    valid = false

  }

  if (!form.passportDate) {

    errors.passportDate =
        'Выберите срок действия'

    valid = false

  }


  if (!form.departureCity.trim()) {

    errors.departureCity =
        'Введите город вылета'

    valid = false

  }


  if (!form.budget) {

    errors.budget =
        'Введите бюджет'

    valid = false

  }

  return valid

}

function submitForm() {


  if (step.value === 1) {

    if (validateStep1()) {
      step.value = 2
    }

    return
  }


  if (validateStep2()) {


    const data = {
      ...form
    }

    console.log('Отправлено:', data)

    // УСПЕШНО
    alert('Заявка успешно отправлена!')

    // ОЧИСТКА
    Object.keys(form).forEach(key => {

      if (key === 'phone') {
        form[key] = '+7 '
      }
      else {
        form[key] = ''
      }

    })


    step.value = 1

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
</script>

<template>

  <section
      class="hero"
      style="background: url('/src/assets/Group 35.png') center/cover no-repeat;"
  >


    <header class="header">


      <div class="logo">

        <div class="logo-left">

          <span class="logo-main">
            SE
          </span>

          <img
              src="/src/assets/Line 1.png"
              alt=""
              class="line"
          >

        </div>

        <div class="logo-text">

          <span>
            Swiss
          </span>

          <span>
            Escape
          </span>

        </div>

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

          <span @click="toggleSearch">
            ⌕
          </span>

        </div>

      </nav>

    </header>


    <div class="main-block">


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


      <div class="form-box">

        <h2>
          Введите данные
        </h2>

        <form @submit.prevent="submitForm">


          <template v-if="step === 1">

            <!-- NAME -->
            <input
                v-model="form.name"
                @input="onlyLetters"
                type="text"
                placeholder="ФИО"
                :class="{ errorInput: errors.name }"
            >

            <p
                v-if="errors.name"
                class="errorText"
            >
              {{ errors.name }}
            </p>


            <input
                v-model="form.phone"
                @input="formatPhone"
                type="text"
                maxlength="18"
                placeholder="+7 (999) 999-99-99"
                :class="{ errorInput: errors.phone }"
            >

            <p
                v-if="errors.phone"
                class="errorText"
            >
              {{ errors.phone }}
            </p>


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


            <input
                v-model="form.birthDate"
                type="date"
                :class="{ errorInput: errors.birthDate }"
            >

            <p
                v-if="errors.birthDate"
                class="errorText"
            >
              {{ errors.birthDate }}
            </p>


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
                    Выбрать (взрослые)
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

                <select v-model="form.children">

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

              </div>

            </div>


            <div class="date-row">

              <div class="date-label">
                Дата:
              </div>

              <div class="date-inputs">

                <input
                    v-model="form.startDate"
                    type="date"
                    :class="{ errorInput: errors.startDate }"
                >

                <input
                    v-model="form.endDate"
                    type="date"
                    :class="{ errorInput: errors.endDate }"
                >

              </div>

            </div>

            <p
                v-if="errors.startDate"
                class="errorText"
            >
              {{ errors.startDate }}
            </p>

            <p
                v-if="errors.endDate"
                class="errorText"
            >
              {{ errors.endDate }}
            </p>


            <div class="buttons">

              <button type="submit">
                Далее
              </button>

            </div>

          </template>



          <template v-else>


            <input
                v-model="form.passport"
                @input="formatPassport"
                type="text"
                maxlength="13"
                placeholder="0000 - 000000"
                :class="{ errorInput: errors.passport }"
            >

            <p
                v-if="errors.passport"
                class="errorText"
            >
              {{ errors.passport }}
            </p>


            <input
                v-model="form.passportDate"
                type="date"
                :class="{ errorInput: errors.passportDate }"
            >

            <p
                v-if="errors.passportDate"
                class="errorText"
            >
              {{ errors.passportDate }}
            </p>


            <input
                v-model="form.departureCity"
                @input="onlyCityLetters"
                type="text"
                placeholder="Город вылета"
                :class="{ errorInput: errors.departureCity }"
            >

            <p
                v-if="errors.departureCity"
                class="errorText"
            >
              {{ errors.departureCity }}
            </p>


            <div class="budget-wrapper">

              <input
                  v-model="form.budget"
                  @input="onlyNumbersBudget"
                  type="text"
                  placeholder="Бюджет"
                  :class="{ errorInput: errors.budget }"
              >

              <span class="currency">
                €
              </span>

            </div>

            <p
                v-if="errors.budget"
                class="errorText"
            >
              {{ errors.budget }}
            </p>


            <select v-model="form.selectedTour">

              <option value="">
                Выбранный тур
              </option>

              <option>
                Классический тур
              </option>

              <option>
                Поезда и горы
              </option>

              <option>
                Бюджетный тур
              </option>

              <option>
                Семейный тур
              </option>

              <option>
                Гастрономический тур
              </option>

            </select>


            <select v-model="form.hotelType">

              <option value="">
                Тип номера в отеле
              </option>

              <option>
                Одноместный
              </option>

              <option>
                Двухместный
              </option>

              <option>
                Трехместный
              </option>

            </select>


            <select v-model="form.insurance">

              <option value="">
                Страховка
              </option>

              <option>
                Включена
              </option>

              <option>
                Расширенная
              </option>

            </select>


            <div class="buttons">

              <button
                  type="button"
                  @click="step = 1"
              >
                Назад
              </button>

              <button type="submit">
                Подать заявку
              </button>

            </div>
          </template>

        </form>

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

  padding-bottom: 50px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 30px 40px;
}

.logo {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: white;
}

.logo-left {
  position: relative;
}

.logo-main {
  font-size: 130px;
  line-height: 0.8;
}

.line{
  position: absolute;
  margin-top: 110px;
  margin-left: -120px;
  width: 240px;
}

.logo-text {
  display: flex;
  flex-direction: column;
  font-size: 45px;
  margin-top: 10px;
  line-height: 1;
}

.nav {
  display: flex;
  align-items: center;
  gap: 45px;
  background: #1A252F;
  padding: 13px 26px;
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
  border-radius: 50px;
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
  font-size: 16px;
}

.search-box span {
  color: white;
  cursor: pointer;
  font-size: 20px;
}

.main-block {
  display: flex;
  justify-content: space-between;
  padding: 40px 60px;
}

.content {
  color: white;
  max-width: 700px;
}

.content h1 {
  margin-top: 40px;
  font-size: 68px;
  line-height: 1.1;
  font-weight: normal;
  margin-bottom: 30px;
}

.content p {
  font-size: 48px;
  line-height: 1.4;
}

.form-box {
  width: 700px;
  background: rgba(255,255,255,0.94);
  border-radius: 40px;
  padding: 35px;
}

.form-box h2 {
  text-align: center;
  font-size: 40px;
  margin-bottom: 25px;
  color: #222;
  font-weight: normal;
}

form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

input,
select {
  width: 100%;
  height: 55px;
  border-radius: 999px;
  border: 1px solid #bdbdbd;
  padding: 0 20px;
  font-size: 18px;
  font-family: Georgia, serif;
  outline: none;
}

.people-title {
  text-align: center;
  font-size: 34px;
  margin-top: 10px;
  margin-bottom: 5px;
}

.people-select {
  display: flex;
  gap: 10px;
}

.select-wrapper {
  width: 100%;
}

.date-row {
  display: flex;
  gap: 20px;
  margin-top: 10px;
}

.date-label {
  font-size: 34px;
  margin-top: 8px;
}

.date-inputs {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.budget-wrapper {
  position: relative;
}

.currency {
  position: absolute;
  right: 20px;
  top: 16px;
  font-size: 20px;
  color: #555;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 25px;
}

.buttons button {
  border: none;
  background: white;
  padding: 18px 40px;
  border-radius: 999px;
  font-size: 28px;
  font-family: 'Oranienbaum', sans-serif;
  cursor: pointer;
  transition: 0.2s;
  min-width: 240px;
}

.buttons button:hover {
  transform: translateY(-2px);
}

.errorText {
  color: red;
  font-size: 14px;
  margin-left: 10px;
}

.errorInput {
  border: 2px solid red !important;
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