<template>
  <section id="prices" class="prices">
    <div class="container">
      <div class="circles-2 circles-2_prices">
        <h2 class="title title_center sign">Services</h2>
      </div>
      <div class="divider"></div>
      <div class="prices__wrapper">

        <div class="prices__item animate__animated animate__fadeInDown wow" data-wow-duration="1s" data-wow-delay="0.7s">
          <div class="prices__header">Landing-page</div>
          <div class="prices__descr">
            One-page website for the presentation of services / goods / ...
          </div>
        </div>

        <div class="prices__item animate__animated animate__fadeInDown wow" data-wow-duration="1s" data-wow-delay="0.7s">
          <div class="prices__header">Corporate website</div>
          <div class="prices__descr">Website for your business or company</div>
        </div>

        <div class="prices__item animate__animated animate__fadeInUp wow" data-wow-duration="1s" data-wow-delay="0.7s">
          <div class="prices__header">Web-application</div>
          <div class="prices__descr">Application inside the browser for better comfort</div>
        </div>

        <div class="prices__item animate__animated animate__fadeInUp wow" data-wow-duration="1s" data-wow-delay="0.7s">
          <div class="prices__header">Design</div>
          <div class="prices__descr">Create a design for your website / application </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.prices {
  padding-top: 80px;
  padding-bottom: 120px;
  background-color: $bg;

  &__wrapper {
    padding-top: 70px;
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(2, 415px);
    grid-template-rows: repeat(2, minmax(50px, auto));
    grid-auto-rows: minmax(50px, auto);
    row-gap: 20px;
  }

  &__item {
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: space-between;
    grid-template-rows: repeat(2, auto);
    padding-left: 25px;
  }
  &__descr {
    grid-column: 1/3;
    grid-row: 2/3;
    font-size: 14px;
  }
  &__header {
    font-weight: bold;
    position: relative;
    &:before {
      content: '';
      width: 15px;
      height: 15px;
      background: $light;
      border-radius: 50%;
      position: absolute;
      top: 5px;
      left: -25px;
    }
  }
}
</style>
