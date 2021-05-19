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
  }
}
</script>

<style lang="scss">
@import "assets/styles/base/variables";
@import "assets/styles/base/mixins";
@import "assets/styles/base/animations";

</style>
