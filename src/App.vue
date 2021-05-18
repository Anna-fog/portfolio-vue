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
</template>

<script>
import SidePanel from './components/SidePanel';
import AppMenu from './components/AppMenu';
import AppPromo from './components/AppPromo';
import AppAbout from './components/AppAbout';
import AppSpheres from './components/AppSpheres';
import AppSkills from './components/AppSkills';
import AppPortfolio from "./components/AppPortfolio";

export default {
  components: {
    SidePanel,
    AppMenu,
    AppPromo,
    AppAbout,
    AppSpheres,
    AppSkills,
    AppPortfolio
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/styles";

</style>
