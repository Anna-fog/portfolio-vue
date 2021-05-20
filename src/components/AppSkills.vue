<template>
  <section id="skills" class="skills">
    <div class="container">
      <div class="circles-2 circles-2_skills">
        <h2 class="title title_center sign">What I use in my work</h2>
      </div>
      <div class="divider"></div>
      <div class="skills__wrapper">

        <div v-for="(skill, i) in skills"
             :key="i"
             class="skills__item animate__animated animate__fadeInUp wow"
             data-wow-duration="1s"
             data-wow-delay="0.4s"
        >
          <img :src="skill.icon" :alt="skill.title" class="skills__icon">
          <div class="skills__header">{{ skill.title }}</div>
          <div class="skills__descr">{{ skill.text }}</div>
        </div>
      </div>

      <div class="skills__wrapper-percentages">
        <div class="skills__item2">
          <div class="skills__item-percentages">
            <div class="subtitle">Websites</div>
            <div class="skills__number">45%</div>
          </div>
          <div class="skills__line">
            <div class="skills__line skills__line_pecr"></div>
          </div>
        </div>

        <div class="skills__item2">
          <div class="skills__item-percentages">
            <div class="subtitle">Landing pages</div>
            <div class="skills__number">35%</div>
          </div>
          <div class="skills__line">
            <div class="skills__line skills__line_pecr"></div>
          </div>
        </div>

        <div class="skills__item2">
          <div class="skills__item-percentages">
            <div class="subtitle">Applications</div>
            <div class="skills__number">20%</div>
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
  data() {
    return {
      skills: [
        {
          icon: require('@/assets/icn/skills/html5.svg'),
          title: 'HTML5',
          text: 'That is what creates the skeleton of your site or application, and the fifth version allows you to create a more SEO-optimized structure of your product.'
        },

        {
          icon: require('@/assets/icn/skills/css3.svg'),
          title: 'CSS3',
          text: 'This style language allows you to create absolutely any look and feel for your site or application. Everything is limited only by your imagination!'
        },

        {
          icon: require('@/assets/icn/skills/js.svg'),
          title: 'Java Script',
          text: 'This programming language allows you to bring anything to life: sliders, windows, tooltips, tabs, getting data from the server and much more.'
        },

        {
          icon: require('@/assets/icn/skills/vuejs.svg'),
          title: 'Vue.js',
          text: 'Vue.js is a library for building interactive web interfaces. The goal of Vue.js is to provide the benefits of reactive data binding and composable view components with an API that is as simple as possible.'
        },

        {
          icon: require('@/assets/icn/skills/nuxt-logo.svg'),
          title: 'Nuxt',
          text: 'Nuxt.js is a free and open source web application framework based on Vue.js, Node.js, Webpack and Babel.js. Nuxt is inspired by Next.js, which is a framework of similar purpose, based on React.js. The framework is advertised as a "meta-framework for universal applications.'
        },

        {
          icon: require('@/assets/icn/skills/vuetify-logo.svg'),
          title: 'Vuetify',
          text: 'Vuetify is a complete UI framework built on top of Vue. js. The goal of the project is to provide developers with the tools they need to build rich and engaging user experiences.'
        },

        {
          icon: require('@/assets/icn/skills/bootstrap_logo.svg'),
          title: 'Bootstrap',
          text: 'It\'s is an open source front end development framework for the creation of websites and web apps. It\'s built on HTML, CSS, and JavaScript to facilitate the development of responsive, mobile-first sites and apps.'
        },

        {
          icon: require('@/assets/icn/skills/git-logo.svg'),
          title: 'Git',
          text: 'Git is a version control system which enables you to track changes to files. It enables you to revert files back to previous versions, restore deleted files and provides other useful abilities.'
        },
      ]
    }
  },

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

  @media (max-width: 768px) {
    padding-top: 60px;
  }

  @media (max-width: 576px) {
    padding-bottom: 80px;
  }

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(4, minmax(275px, auto));
    grid-template-rows: repeat(2, minmax(275px, auto));
    gap: 13px;
    padding-top: 50px;

    @media (max-width: 1200px) {
      grid-template-columns: repeat(auto-fit,minmax(275px,300px));
      grid-template-rows: repeat(auto-fit,minmax(275px,300px));
      justify-content: center;
    }

    @media (max-width: 990px) {
      grid-template-columns: repeat(auto-fit, 300px);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, 243px);
    }

    @media (max-width: 576px) {
      padding-top: 40px;
      grid-template-columns: minmax(auto, 400px);
      grid-template-rows: repeat(auto-fit, minmax(270px, auto));
    }
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

      @media (max-width: 576px) {
        box-shadow: none;
        border-color: $middle;
      }
    }
  }

  &__item2 {
    &:last-child {
      @media (max-width: 1200px) {
        grid-column: 1 / 3;
      }
      @media (max-width: 768px) {
        grid-column: auto;
      }
    }
  }

  &__icon {
    filter: grayscale(.3);
  }

  &__header {
    margin-top: 20px;
    font-weight: bold;

    @media (max-width: 576px) {
      margin-top: 15px;
    }
  }

  &__descr {
    font-size: 14px;
    line-height: 18px;
    margin-top: 15px;

    @media (max-width: 576px) {
      margin-top: 10px;
    }
  }

  &__wrapper-percentages {
    padding-top: 120px;
    display: grid;
    grid-template-columns: repeat(3, 350px);
    grid-template-rows: 65px;
    gap: 45px;

    @media (max-width: 1200px) {
      padding-top: 90px;
      grid-template-columns: repeat(2,350px);
      grid-template-rows: repeat(2,65px);
      column-gap: 80px;
      row-gap: 45px;
      justify-content: center;
    }

    @media (max-width: 990px) {
      column-gap: 75px;
      grid-template-columns: repeat(2,300px);
    }

    @media (max-width: 768px) {
      padding-top: 45px;
      grid-template-columns: minmax(auto, 600px);
      row-gap: 35px;
    }

    @media (max-width: 576px) {
      grid-template-columns: minmax(300px, 400px);
      row-gap: 25px;
    }
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

    @media (max-width: 576px) {
      margin-top: 15px;
      height: 7px;
    }

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
