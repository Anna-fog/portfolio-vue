<template>
  <a href="#promo" class="pageup">
    <img src="@/assets/icn/up.svg" alt="Up">
  </a>
</template>

<script>
export default {}
</script>

<style lang="scss">
.pageup {
  opacity: 0;
  cursor: default;
  position: fixed;
  bottom: 40px;
  right: 40px;
  height: 15px;
  width: 40px;
  transition: .5s all;

  &:hover {
    img {
      filter: brightness(0.5);
      transform: translateY(-7px);

      @media (max-width: 990px) {
        filter: none;
        transform: none;
      }
    }
  }

  img {
    width: 100%;
    transition: .7s all;
  }
}
</style>
