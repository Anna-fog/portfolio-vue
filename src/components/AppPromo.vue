<template>
  <section id="promo" class="promo">
    <a href="#contacts" class="black-link"></a>
    <div @click="openMenu" class="burger">
      <span></span>
      <span class="middle"></span>
      <span></span>
    </div>

    <div class="container">

      <div class="promo__wrapper">
        <div class="subtitle subtitle_promo circles">Anna Krivoruchko</div>
        <h1 class="title title_promo">Front-end developer <br>
          <span>& UI | UX designer</span>
        </h1>
        <button class="btn btn_promo">
          <a href="#portfolio" class="promo__link">Portfolio</a>
        </button>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  methods: {
    openMenu() {
      const menu = document.querySelector('.menu');
      menu.classList.add('active')
    }
  }
}
</script>

<style lang="scss">
.promo {
  min-height: 100vh;
  position: relative;
  padding-top: 32vh;
  padding-left: 0;
  background: url('../assets/img/main_bg-min.jpg') no-repeat 50%/cover;
  background-color: #547F89;
  background-attachment: fixed;
  transition: 0.5s all;

  @media (max-width: 990px) {
    padding-left: 50px;
  }

  @media (max-width: 768px) {
    padding-left: 0;
  }

  &__wrapper {
    @media (max-width: 1440px) {
      padding-left: 100px;
    }

    @media (max-width: 1200px) {
      padding-left: 60px;
    }

    @media (max-width: 768px) {
      padding-left: 0;
    }
  }

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 45px;
    color: white;
    text-decoration: none;
    transition: 0.5s color;
    &:hover {
      text-decoration: none;
      color: white;
    }
  }

  .black-link {
    position: absolute;
    width: 94px;
    height: 94px;
    top: 47%;
    left: 48%;
    transition: 0.5s all;
  }
}

.promo-filter {
  background-blend-mode: luminosity;
}
</style>
