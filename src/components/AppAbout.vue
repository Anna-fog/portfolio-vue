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
  &__wrapper {
    display: grid;
    grid-template-columns: 350px 572px;
    grid-template-rows: minmax(150px, auto) minmax(120px, auto);
    column-gap: 55px;
    row-gap: 40px;
    padding-left: 65px;
  }

  &__photo {
    grid-row: 1/3;
    img {
      cursor: pointer;
      width: 100%;
      transition: .9s all ease-out;
      &:hover {
        filter: invert(.9);
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
  }
}

.invert-filter {
  filter: invert(.9);
}
</style>
