<template>
  <section id="about" class="about">
    <div class="container">
      <div class="about__wrapper">
        <div @click="addPhotoFilter" class="about__photo">
          <img src="@/assets/img/main_photo.png" alt="photo">

        </div>
        <div class="about__descr circles-2">
          <h2 class="title sign">About me</h2>
          <p>Since my start in front-end development soon I realized, that's what I'm ready to devote all my free time. I enjoy starting new projects as well as dealing with once that already exist, they are all an opportunity to learn something new. I'm perpetually working on improving my skills and never bored.</p>
        </div>
        <div class="about__skills">
          <div class="about__item">
            <div class="about__skills-circle">
              <img src="@/assets/icn/about_me/web_development.svg" alt="wed-dev">
            </div>
            <div>
              <div class="subtitle subtitle_about">Front-end development</div>
              <div class="about__skills-text">
                <span>- Producing, maintaining and modifying websites and apps</span><br>
                <span>- Solving cross-browser compatibility issues</span><br>
                <span>- Optimizing web pages for speed and scalability</span><br>
                <span>- Conducting website testing</span><br>
              </div>
            </div>
          </div>

          <div class="about__item">
            <div class="about__skills-circle">
              <img src="@/assets/icn/about_me/design.svg" alt="wed-dev">
            </div>
            <div>
              <div class="subtitle subtitle_about">UI/UX Design</div>
              <div class="about__skills-text">
                <span>- Understanding of key design principles</span><br>
                <span>- Executing all visual design stages</span><br>
                <span>- Experience with graphic design applications</span><br>
                <span>- Responsive and adaptive design</span><br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    addPhotoFilter() {
      const promoBg = document.querySelector('.promo');
      const photo = document.querySelector('.about__photo > img');

      photo.classList.toggle('invert-filter');
      promoBg.classList.toggle('promo-filter');
    }
  }
}
</script>

<style lang="scss">

.about {
  padding-top: 120px;
  padding-bottom: 60px;

  @media (max-width: 768px) {
    padding-top: 40px;
  }

  &__wrapper {
    display: grid;
    grid-template-columns: 350px 572px;
    grid-template-rows: minmax(150px, auto) minmax(120px, auto);
    column-gap: 55px;
    row-gap: 40px;
    padding-left: 65px;

    @media (max-width: 1200px) {
      padding-left: 0;
      grid-template-columns: 350px 540px;
      column-gap: 40px;
    }

    @media (max-width: 990px) {
      grid-template-columns: 300px 380px;
      gap: 30px;
    }

    @media (max-width: 768px) {
      grid-template-columns: minmax(auto, 500px);
      grid-template-rows:  minmax(auto, 340px)
    }

    @media (max-width: 576px) {
      grid-template: 280px auto auto/1fr;
    }
  }

  &__photo {
    grid-row: 1/3;

    @media (max-width: 768px) {
      grid-row: 1/2;
      display: flex;
    }

    img {
      cursor: pointer;
      width: 100%;
      transition: .9s all ease-out;

      @media (max-width: 768px) {
        height: 100%;
        width: auto;
        margin: 0 auto;
      }

      @media (max-width: 576px) {
        width: 272px;
      }

      &:hover {
        filter: invert(.9);

        @media (max-width: 990px) {
          filter: none;
        }
      }
    }
  }

  &__descr {
    position: relative;

    p {
      margin-top: 10px;
      line-height: 22px;
    }
  }

  &__skills {
    display: grid;
    grid-template: 1fr / repeat(2, 1fr);
    grid-auto-rows: 1fr;
    column-gap: 25px;

    @media (max-width: 990px) {
      grid-template-columns: 360px;
      grid-auto-rows: minmax(115px, auto);
      row-gap: 20px;
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 250px) ;
      column-gap: 5px;
    }

    @media (max-width: 576px) {
      grid-template-columns: repeat(auto-fit, minmax(auto, 600px));
      justify-content: center
    }
  }

  &__skills-text {
    font-size: 16px;
    margin-top: 8px;
    line-height: 19px;
  }

  &__skills-circle {
    position: relative;
    padding: 15px 0 0 15px;
    @include before-circle;

    &:before {
      z-index: 0;
    }

    img {
      position: absolute;
    }
  }

  &__item {
    display: grid;
    grid-template-columns: 40px 212px;
    column-gap: 20px;

    @media (max-width: 990px) {
      grid-template-columns: 40px 322px;
    }

    @media (max-width: 768px) {
      grid-template-columns: 30px 200px;
    }

    @media (max-width: 576px) {
      grid-template-columns: 27px minmax(160px, 600px);
    }
  }

  p {
    @media (max-width: 990px) {
      margin-bottom: 0;
    }
  }
}

.invert-filter {
  filter: invert(.9);
}
</style>
