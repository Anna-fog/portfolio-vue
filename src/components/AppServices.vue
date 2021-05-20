<template>
  <section id="prices" class="prices">
    <div class="container">
      <div class="circles-2 circles-2_prices">
        <h2 class="title title_center sign">Services</h2>
      </div>
      <div class="divider"></div>
      <div class="prices__wrapper">

        <div v-for="(service, i) in services"
             :key="i"
             class="prices__item animate__animated animate__fadeInDown wow"
             data-wow-duration="1s" :data-wow-delay="service.delay"
        >
          <div class="prices__header">{{ service.title }}</div>
          <div class="prices__descr">
            {{ service.description }}
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
      services: [
        { title: 'Landing-page', description: 'One-page website for the presentation of services / goods / ...', delay: '0.4s' },
        { title: 'Corporate website', description: 'Website for your business or company', delay: '0.5s' },
        { title: 'Web-application', description: 'Application inside the browser for better comfort', delay: '0.6s' },
        { title: 'Design', description: 'Create a design for your website / application', delay: '0.7s' },
      ]
    }
  }
}
</script>

<style lang="scss">
.prices {
  padding-top: 80px;
  padding-bottom: 120px;
  background-color: $bg;

  @media (max-width: 576px) {
    padding: 50px 0;
  }

  &__wrapper {
    padding-top: 70px;
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(2, 415px);
    grid-template-rows: repeat(2, minmax(50px, auto));
    grid-auto-rows: minmax(50px, auto);
    row-gap: 20px;

    @media (max-width: 1440px) {
      justify-content: space-around;
    }

    @media (max-width: 1200px) {
      justify-content: space-around;
      column-gap: 40px;
    }

    @media (max-width: 990px) {
      grid-template-columns: repeat(auto-fit, 290px);
    }

    @media (max-width: 768px) {
      padding-top: 50px;
      grid-template-columns: minmax(auto, 600px);
    }

    @media (max-width: 576px) {
      padding-top: 40px;
      grid-template-columns: minmax(auto,400px);
    }
  }

  &__item {
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: space-between;
    grid-template-rows: repeat(2, auto);
    padding-left: 25px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  &__price {
    @media (max-width: 576px) {
      font-size: 14px;
    }
  }

  &__descr {
    grid-column: 1/3;
    grid-row: 2/3;
    font-size: 14px;
  }

  &__header {
    font-weight: bold;
    position: relative;

    @media (max-width: 576px) {
      font-size: 14px;
    }

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
