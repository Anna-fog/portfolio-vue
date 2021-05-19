<template>
  <section id="portfolio" class="portfolio">
    <div class="portfolio__moon">
      <div class="container">
        <h2 class="title title_center sign title-portfolio">My works</h2>
        <div class="divider"></div>

        <div class="portfolio__wrapper">

          <a target="_blank" href="http://perfectfloor.3dw.by/" class="portfolio__item animate__animated animate__fadeInUp wow" data-wow-duration="1s" data-wow-delay="0.4s">
            <img src="@/assets/img/works/work1.jpg" alt="Perfect floor">
          </a>

          <a target="_blank" href="https://beclever.by/" class="portfolio__item animate__animated animate__fadeInUp wow" data-wow-duration="1s" data-wow-delay="0.5s">
            <img src="@/assets/img/works/work2.jpg" alt="Be Clever">
          </a>

          <a target="_blank" href="http://cdc-logistics.3dw.by/" class="portfolio__item animate__animated animate__fadeInUp wow" data-wow-duration="1s" data-wow-delay="0.6s">
            <img src="@/assets/img/works/work3.jpg" alt="CDC-Logistics">
          </a>

          <a target="_blank" href="http://la-salute.3dw.by/" class="portfolio__item vertical animate__animated animate__fadeInRight wow" data-wow-duration="1s" data-wow-delay="0.7s">
            <img src="@/assets/img/works/work4.jpg" alt="La Salute">
          </a>

          <a target="_blank" href="http://woodoo.3dw.by/" class="portfolio__item animate__animated animate__fadeInUp wow" data-wow-duration="1s" data-wow-delay="0.4s">
            <img src="@/assets/img/works/work5.jpg" alt="Woodoo">
          </a>

          <a target="_blank" href="http://futurenews.3dw.by/" class="portfolio__item horizontal animate__animated animate__fadeInUp wow" data-wow-duration="1s" data-wow-delay="0.4s">
            <img src="@/assets/img/works/work6.jpg" alt="Future-news">
          </a>

          <a target="_blank" href="http://pig-game.3dw.by/" class="portfolio__item animate__animated animate__fadeInLeft wow" data-wow-duration="1s" data-wow-delay="0.4s">
            <img src="@/assets/img/works/work7.jpg" alt="Pig game">
          </a>

          <a target="_blank" href="http://molisana.3dw.by/" class="portfolio__item animate__animated animate__fadeInLeft wow" data-wow-duration="1s" data-wow-delay="0.5s">
            <img src="@/assets/img/works/work8.jpg" alt="Molisana">
          </a>

          <a target="_blank" href="https://www.behance.net/gallery/100726849/Website-Remote-control-toys-shop" class="portfolio__item animate__animated animate__fadeInLeft wow" data-wow-duration="1s" data-wow-delay="0.6s">
            <img src="@/assets/img/works/work9.jpg" alt="Remote controls toys">
          </a>

          <a target="_blank" href="https://www.breegy.com/" class="portfolio__item animate__animated animate__fadeInLeft wow" data-wow-duration="1s" data-wow-delay="0.7s">
            <img src="@/assets/img/works/work10.jpg" alt="Charity website">
          </a>


        </div>

      </div>
    </div>

  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">

.portfolio {
  background-image: url("../assets/img/portfolio-bg-min.jpg");
  background-size: 50%;
  background-attachment: fixed;

  &__moon {
    background-image: url("../assets/img/moon-min.png");
    background-size: 30%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-blend-mode: hard-light;
    background-position: 90% 25%;
    padding-top: 60px;
    padding-bottom: 60px;
  }

  &__wrapper {
    margin-top: 50px;
    display: grid;
    grid-template: repeat(2, 280px) / repeat(4, 280px);
    grid-auto-rows: 280px;
    gap: 5px;
    .vertical {
      grid-row: 1 / 3;
      grid-column: 4 / 5;
    }
    .horizontal {
      grid-row: 2 / 3;
      grid-column: 2 / 4;
    }
  }
  &__item {
    transition: 0.5s all;
    border-radius: 4px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.7s all ease-out;
    }
    &:hover {
      img {
        transform: scale(1.04);
        filter: contrast(75%);
      }
    }
  }
}

</style>
