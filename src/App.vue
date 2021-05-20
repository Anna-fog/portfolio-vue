<template>
  <div id="nav">
  </div>
  <router-view/>

  <side-panel></side-panel>
  <app-menu></app-menu>
  <app-promo></app-promo>
  <app-about></app-about>
  <app-spheres></app-spheres>
  <app-skills></app-skills>
  <app-portfolio></app-portfolio>
  <app-services></app-services>
  <app-contacts></app-contacts>
  <page-up></page-up>

</template>

<script>
import SidePanel from './components/SidePanel';
import AppMenu from './components/AppMenu';
import AppPromo from './components/AppPromo';
import AppAbout from './components/AppAbout';
import AppSpheres from './components/AppSpheres';
import AppSkills from './components/AppSkills';
import AppPortfolio from "./components/AppPortfolio";
import AppServices from "./components/AppServices";
import AppContacts from "./components/AppContacts";
import PageUp from "./components/PageUp";

import { WOW } from 'wowjs'

export default {
  components: {
    SidePanel,
    AppMenu,
    AppPromo,
    AppAbout,
    AppSpheres,
    AppSkills,
    AppPortfolio,
    AppServices,
    AppContacts,
    PageUp
  },

  mounted() {
    new WOW().init();

    window.addEventListener('scroll', () => {
      const pageUp = document.querySelector('.pageup');
      if (window.scrollY > 1600) {
        pageUp.classList.add('fadeIn');
      } else {
        pageUp.classList.remove('fadeIn');
      }
    });
  }
}
</script>

<style lang="scss">
@import "assets/styles/base/variables";
@import "assets/styles/base/mixins";
@import "assets/styles/base/animations";

.circles {
  &:before {
    content: url('assets/img/dots.svg');
    display: block;
    opacity: 0.14;
    position: absolute;
    transform: rotate(90deg);
    z-index: -1;
    left: -2.5%;

    @media (max-width: 1200px) {
      top: -10px;
    }
  }
}

.circles-2 {
  &:after {
    content: url('assets/img/dots.svg');
    position: absolute;
    top: 11px;
    left: 180px;
    z-index: 0;

    @media (max-width: 576px) {
      left: 140px;
      top: 4px;
    }
  }

  &_skills {
    position: relative;

    @media (max-width: 576px) {
      max-width: 370px;
      margin: 0 auto;
    }

    &:after {
      top: 9px;
      left: 330px;
      transform: rotate(90deg);

      @media (max-width: 1200px) {
        left: 249px;
      }
      @media (max-width: 990px) {
        left: 160px;
      }
      @media (max-width: 768px) {
        left: 49px;
      }
      @media (max-width: 576px) {
        top: 0;
        left: 0;
      }
    }
  }

  &_prices {
    position: relative;

    @media (max-width: 576px) {
      max-width: 200px;
      margin: 0 auto;
    }

    &:after {
      right: 445px;
      left: auto;

      @media (max-width: 1200px) {
        right: 354px;
      }
      @media (max-width: 990px) {
        right: 249px;
        left: auto;
      }
      @media (max-width: 768px) {
        right: 138px;
      }
      @media (max-width: 576px) {
        right: 0;
        top: 5px;
      }
    }
  }
}
</style>
