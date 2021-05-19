<template>
  <section id="portfolio" class="portfolio">
    <div class="portfolio__moon">
      <div class="container">
        <h2 class="title title_center sign title-portfolio">My works</h2>
        <div class="divider"></div>

        <div class="portfolio__wrapper">
          <a v-for="(work, i) in works" :key="i"
             target="_blank"
             :href="work.link"
             :class="['portfolio__item', 'animate__animated', 'wow', work.class]"
             data-wow-duration="1s"
             :data-wow-delay="work.delay"
          >
            <img :src="work.image" :alt="work.src">
          </a>


        </div>

      </div>
    </div>

  </section>
</template>

<script>
export default {
  data() {
    return {
      works: [
        { link: 'http://perfectfloor.3dw.by/', image: require('@/assets/img/works/work1.jpg'), alt: 'perfect floor', class: 'animate__fadeInUp', delay: '0.4s' },
        { link: 'https://beclever.by/', image: require('@/assets/img/works/work2.jpg'), alt: 'be clever', class: 'animate__fadeInUp', delay: '0.5s' },
        { link: 'http://cdc-logistics.3dw.by/', image: require('@/assets/img/works/work3.jpg'), alt: 'cdc-logistics', class: 'animate__fadeInUp', delay: '0.6s' },
        { link: 'http://la-salute.3dw.by/', image: require('@/assets/img/works/work4.jpg'), alt: 'la salute', class: 'animate__fadeInRight vertical', delay: '0.4s' },
        { link: 'http://woodoo.3dw.by/', image: require('@/assets/img/works/work5.jpg'), alt: 'woodoo', class: 'animate__fadeInUp', delay: '0.4s' },
        { link: 'http://futurenews.3dw.by/', image: require('@/assets/img/works/work6.jpg'), alt: 'future news', class: 'animate__fadeInUp horizontal', delay: '0.4s' },
        { link: 'http://pig-game.3dw.by/', image: require('@/assets/img/works/work7.jpg'), alt: 'future news', class: 'animate__fadeInLeft', delay: '0.4s' },
        { link: 'http://molisana.3dw.by/', image: require('@/assets/img/works/work8.jpg'), alt: 'molisana', class: 'animate__fadeInLeft', delay: '0.5s' },
        { link: 'https://www.behance.net/gallery/100726849/Website-Remote-control-toys-shop', image: require('@/assets/img/works/work9.jpg'), alt: 'remote controls', class: 'animate__fadeInLeft', delay: '0.6s' },
        { link: 'https://www.breegy.com/', image: require('@/assets/img/works/work10.jpg'), alt: 'charity website', class: 'animate__fadeInLeft', delay: '0.7s' },
      ]
    }
  }
}
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
