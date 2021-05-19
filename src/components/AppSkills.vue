<template>
  <section id="skills" class="skills">
    <div class="container">
      <div class="circles-2 circles-2_skills">
        <h2 class="title title_center sign">What I use in my work</h2>
      </div>
      <div class="divider"></div>
      <div class="skills__wrapper">

        <div class="skills__item animate__animated animate__fadeInUp wow" data-wow-duration="1s" data-wow-delay="0.4s">
          <img src="@/assets/icn/skills/html5.svg" alt="html5" class="skills__icon">
          <div class="skills__header">HTML5</div>
          <div class="skills__descr">That is what creates the skeleton of your site or application, and the fifth version allows you to create a more SEO-optimized structure of your product.</div>
        </div>

        <div class="skills__item animate__animated animate__fadeInUp wow" data-wow-duration="1s" data-wow-delay="0.4s">
          <img src="@/assets/icn/skills/css3.svg" alt="css3" class="skills__icon">
          <div class="skills__header">CSS3</div>
          <div class="skills__descr">This style language allows you to create absolutely any look and feel for your site or application. Everything is limited only by your imagination!</div>
        </div>

        <div class="skills__item animate__animated animate__fadeInUp wow" data-wow-duration="1s" data-wow-delay="0.4s">
          <img src="@/assets/icn/skills/js.svg" alt="java script" class="skills__icon">
          <div class="skills__header">Java Script</div>
          <div class="skills__descr">This programming language allows you to bring anything to life: sliders, windows, tooltips, tabs, getting data from the server and much more.</div>
        </div>

        <div class="skills__item animate__animated animate__fadeInUp wow" data-wow-duration="1s" data-wow-delay="0.4s">
          <img src="@/assets/icn/skills/vuejs.svg" alt="vue.js" class="skills__icon">
          <div class="skills__header">Vue.js</div>
          <div class="skills__descr">Vue.js is a library for building interactive web interfaces. The goal of Vue.js is to provide the benefits of reactive data binding and composable view components with an API that is as simple as possible</div>
        </div>

        <div class="skills__item animate__animated animate__fadeInUp wow" data-wow-duration="1s" data-wow-delay="0.4s">
          <img src="@/assets/icn/skills/nuxt-logo.svg" alt="nuxt" class="skills__icon">
          <div class="skills__header">Nuxt</div>
          <div class="skills__descr">Nuxt.js is a free and open source web application framework based on Vue.js, Node.js, Webpack and Babel.js. Nuxt is inspired by Next.js, which is a framework of similar purpose, based on React.js. The framework is advertised as a "meta-framework for universal applications.</div>
        </div>

        <div class="skills__item animate__animated animate__fadeInUp wow" data-wow-duration="1s" data-wow-delay="0.4s">
          <img src="@/assets/icn/skills/vuetify-logo.svg" alt="jquery" class="skills__icon">
          <div class="skills__header">Vuetify</div>
          <div class="skills__descr">Vuetify is a complete UI framework built on top of Vue. js. The goal of the project is to provide developers with the tools they need to build rich and engaging user experiences.</div>
        </div>

        <div class="skills__item animate__animated animate__fadeInUp wow" data-wow-duration="1s" data-wow-delay="0.4s">
          <img src="@/assets/icn/skills/bootstrap_logo.svg" alt="bootstrap" class="skills__icon">
          <div class="skills__header">Bootstrap</div>
          <div class="skills__descr">It's is an open source front end development framework for the creation of websites and web apps. It's built on HTML, CSS, and JavaScript to facilitate the development of responsive, mobile-first sites and apps.</div>
        </div>

        <div class="skills__item animate__animated animate__fadeInUp wow" data-wow-duration="1s" data-wow-delay="0.4s">
          <img src="@/assets/icn/skills/git-logo.svg" alt="git" class="skills__icon">
          <div class="skills__header">Git</div>
          <div class="skills__descr">Git is a version control system which enables you to track changes to files. It enables you to revert files back to previous versions, restore deleted files and provides other useful abilities.</div>
        </div>
      </div>

      <div class="skills__wrapper-percentages">
        <div class="skills__item2">
          <div class="skills__item-percentages">
            <div class="subtitle">Websites</div>
            <div class="skills__number">75%</div>
          </div>
          <div class="skills__line">
            <div class="skills__line skills__line_pecr"></div>
          </div>
        </div>

        <div class="skills__item2">
          <div class="skills__item-percentages">
            <div class="subtitle">Landing pages</div>
            <div class="skills__number">95%</div>
          </div>
          <div class="skills__line">
            <div class="skills__line skills__line_pecr"></div>
          </div>
        </div>

        <div class="skills__item2">
          <div class="skills__item-percentages">
            <div class="subtitle">Applications</div>
            <div class="skills__number">60%</div>
          </div>
          <div class="skills__line">
            <div class="skills__line skills__line_pecr"></div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    const percentages = document.querySelectorAll('.skills__number');
    const lines = document.querySelectorAll('.skills__line_pecr');

    percentages.forEach((item, i) => {
      lines[i].style.width = item.innerHTML;
    });
  }
}
</script>

<style lang="scss">
.skills {
  padding-top: 70px;
  padding-bottom: 100px;
  background-color: $bg;

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(4, minmax(275px, auto));
    grid-template-rows: repeat(2, minmax(275px, auto));
    gap: 13px;
    padding-top: 50px;
  }

  &__item {
    border: 1px solid $middle;
    border-radius: 4px;
    padding: 25px;
    background-color: #f9fbfc;
    transition: 0.4s all;
    &:hover {
      box-shadow: 0 0 9px rgba(46, 97, 113, 0.13);
      border-color: #f9fbfc;
      background-color: white;
    }
  }

  &__icon {
    filter: grayscale(.3);
  }

  &__header {
    margin-top: 20px;
    font-weight: bold;
  }

  &__descr {
    font-size: 14px;
    line-height: 18px;
    margin-top: 15px;
  }

  &__wrapper-percentages {
    padding-top: 120px;
    display: grid;
    grid-template-columns: repeat(3, 350px);
    grid-template-rows: 65px;
    gap: 45px;
  }

  &__item-percentages {
    display: flex;
    justify-content: space-between;
  }

  &__number {
    line-height: 32px;
  }

  &__line {
    height: 7px;
    width: 100%;
    background-color: $light;
    border-radius: 4px;
    margin-top: 20px;
    &_pecr {
      background-color: $middle;
    }
  }

  .subtitle {
    position: relative;
    padding-left: 15px;
    @include before-circle;
    &:before {
      top: -4px;
    }
  }
}
</style>
