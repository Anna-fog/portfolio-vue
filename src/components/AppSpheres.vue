<template>
  <section id="spheres" class="spheres">
    <div class="spheres__circles">
      <div class="circle-img"><img src="@/assets/img/sphere.png" alt=""></div>
      <div class="circle-large"></div>
      <div class="circle-middle"></div>
      <div class="circle-small"></div>
    </div>
    <div class="container">
      <h2 class="title title_center sign">Spheres</h2>
      <div class="divider"></div>

      <div class="spheres__wrapper">

        <div class="spheres__column animate__animated animate__fadeInLeft wow" data-wow-duration="1s" data-wow-delay="0.4s">
          <h3 class="subtitle spheres__column-subtitle">Education</h3>
          <ul>
            <li class="spheres__li">
              <div class="spheres__item">
                <div class="spheres__item-head">
                  <div class="spheres__item-icon">
                    <img src="@/assets/icn/experience/courses.svg" alt="university">
                  </div>
                  <h4 class="subtitle subtitle_small">Courses</h4>
                  <div class="spheres__item-location">
                    Web-development courses
                  </div>
                </div>
                <ul class="spheres__item-body">
                  <h5>Udemy:</h5>
                  <li>- The Complete JavaScript Course. <br> (Jonas Schmedtmann)</li>
                  <li>- Vue js 2: from beginner to professional. <br>(Bo Andersen)</li>
                  <li>- Nuxt.js - Vue.js on Steroids <br>(Maximilian Schwarzmüller)</li>
                  <li>- Full JS course + React. (Ivan Petricheko)</li>
                  <li>- JavaScript, practical course. (Ivan Petricheko)</li>
                  <li>- Web Developer. (Ivan Petricheko)</li>
                  <br>
                  <h5>It-Academy:</h5>
                  <li>- Wed design & mobile UI design.</li>
                </ul>
              </div>
            </li>

            <li class="spheres__li">
              <div class="spheres__item">
                <div class="spheres__item-head">
                  <div class="spheres__item-icon">
                    <img src="@/assets/icn/experience/university.svg" alt="university">
                  </div>
                  <h4 class="subtitle subtitle_small">F.Skorina Gomel State University</h4>
                  <div class="spheres__item-location">
                    Foreign languages
                  </div>
                </div>
              </div>
            </li>

          </ul>
        </div>

        <div class="spheres__column animate__animated animate__fadeInRight wow" data-wow-duration="1s" data-wow-delay="0.4s">
          <h3 class="subtitle spheres__column-subtitle">Work experience</h3>
          <ul>
            <li class="spheres__li">
              <div class="spheres__item">
                <div class="spheres__item-head">
                  <div class="spheres__item-icon">
                    <img src="@/assets/icn/experience/developer.svg" alt="university">
                  </div>
                  <h4 class="subtitle subtitle_small">Front-End Developer</h4>
                  <div class="spheres__item-location">
                    Freelance
                  </div>
                </div>
                <ul class="spheres__item-body">
                  <li v-for="(work, i) in works" :key="i">
                    <a target="_blank" class="spheres__link" :href="work.link">
                      - {{ work.title }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li class="spheres__li">
              <div class="spheres__item">
                <div class="spheres__item-head">
                  <div class="spheres__item-icon">
                    <img src="@/assets/icn/experience/designer.svg" alt="university">
                  </div>
                  <h4 class="subtitle subtitle_small">UI/UX Designer</h4>
                  <div class="spheres__item-location">
                    Freelance
                  </div>
                </div>
                <ul class="spheres__item-body">
                  <li v-for="(work, i) in worksDesign" :key="i">
                    <a target="_blank" class="spheres__link" :href="work.link">- {{ work.title }}</a>
                  </li>
                </ul>
              </div>
            </li>

          </ul>
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
        { title: 'Kids smart club landing page', link: 'https://beclever.by/' },
        { title: 'European cuisine restaurant website', link: 'http://la-salute.3dw.by/' },
        { title: 'Promo site for pasta manufacturer', link: 'http://molisana.3dw.by/' },
        { title: 'Floor screed landing page', link: 'http://perfectfloor.3dw.by/' },
        { title: 'Pig game (simple JS game)', link: 'http://pig-game.3dw.by/' },
        { title: 'Guess my number game (simple JS game)', link: 'http://guess-number.3dw.by/' },
        { title: 'Mailbox (Vue.js app)', link: 'http://guess-number.3dw.by/' },
        { title: 'Notes app (note making app on Vue.js)', link: 'http://notes-app.3dw.by/' },
        { title: 'Charity website and landing page (made on Vue.js)', link: 'https://www.breegy.com/' },
      ],

      worksDesign: [
        { title: 'Infrared sauna main page', link: 'https://www.behance.net/gallery/97648161/Infrared-sauna-website-Design-and-development' },
        { title: 'European cuisine restaurant website', link: 'http://la-salute.3dw.by/' },
        { title: 'Kids smart club landing page', link: 'https://beclever.by/' },
        { title: 'Remote control toys shop', link: 'https://www.behance.net/gallery/100726849/Website-Remote-control-toys-shop' },
        { title: 'Promo site for pasta manufacturer', link: 'http://molisana.3dw.by/' },
        { title: 'Customs clearance landing page', link: 'https://www.behance.net/gallery/102530429/Customs-clearence-Web-design-development' },
      ]
    }
  },

  mounted() {
    if (window.screen.width > 990) {
      let circleSmall = document.querySelector('.circle-small');
      let circleMiddle = document.querySelector('.circle-middle');
      let circleLarge = document.querySelector('.circle-large');
      let circleImg = document.querySelector('.circle-img');

      window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        circleMiddle.style.transform = 'translate(-' + x * 30 + 'px, ' + y * 70 + 'px)';
        circleLarge.style.transform = 'translate(' + x * 90 + 'px, ' + y * 50 + 'px)';
        circleImg.style.transform = 'translate(' + x * 100 + 'px, -' + y * 70 + 'px)';
        circleSmall.style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0,' + (-x * 25) + ',' + (-y * 50) + ', 0, 1)';
      });
    }
  }
}
</script>

<style lang="scss">
.spheres {
  padding-top: 80px;
  padding-bottom: 50px;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1200px) {
    max-width: 990px;
  }

  @media (max-width: 990px) {
    max-width: 768px;
  }

  @media (max-width: 768px) {
    padding-top: 60px;
    max-width: 576px;
  }

  @media (max-width: 576px) {
    max-width: 560px;
    padding-top: 40px;
  }

  &__wrapper {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2, 400px);
    padding: 50px 65px 0 65px;
    column-gap: 130px;

    @media (max-width: 1200px) {
      grid-template-columns: repeat(2,375px);
      column-gap: 80px;
    }

    @media (max-width: 990px) {
      grid-template-columns: repeat(2,275px);
      column-gap: 40px
    }

    @media (max-width: 768px) {
      grid-template-columns: minmax(490px, auto);
      row-gap: 40px;
      justify-content: center;
    }

    @media (max-width: 576px) {
      padding: 40px 0 0 0;
      grid-template-columns: minmax(270px, auto);
    }
  }

  &__column-subtitle {
    position: relative;
    padding-left: 35px;
    &:before {
      content: '';
      position: absolute;
      width: 15px;
      height: 15px;
      background: $light;
      border-radius: 50%;
      left: -7px;
      top: 50%;
      transform: translateY(-50%)
    }
  }

  &__li {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      width: 1px;
      height: calc(100% + 16px);
      top: -16px;
      left: 0;
      background: $middle;
    }
  }

  &__item {
    position: relative;

    &:before {
      content: '';
      height: 1px;
      width: 44px;
      position: absolute;
      background-color: $middle;
      top: 68px;

      @media (max-width: 576px) {
        width: 30px;
      }
    }

    &-head {
      padding: 47px 0 0 100px;
      position: relative;

      @media (max-width: 576px) {
        padding: 40px 0 0 85px;
      }
    }

    &-body {
      padding-left: 43px;
      margin-top: 12px;
      margin-bottom: 0;

      @media (max-width: 576px) {
        padding-left: 30px;
      }
    }

    &-icon {
      position: absolute;
      top: 50px;
      left: 44px;
      @include before-circle;

      @media (max-width: 576px) {
        left: 30px;
      }

      img {
        position: absolute;
        left: 17px;
        top: 14px;
      }
    }

    &-location {
      font-size: 14px;
    }

    &-body {
      line-height: 22px;
    }
  }

  &__circles {
    position: relative;
  }

  &__link {
    color: $dark;
    transition: .4s all;

    &:hover {
      color: $middle;

      @media (max-width: 990px) {
        grid-template-columns: repeat(2,275px);
        column-gap: 40px
      }
    }
  }

  // Circles

  .circle-img {
    position: absolute;
    right: 570px;
    top: 14px;

    @media (max-width: 1440px) {
      right: 390px;
    }

    @media (max-width: 1200px) {
      right: 290px;
    }

    @media (max-width: 990px) {
      right: 190px;
    }

    @media (max-width: 768px) {
      right: 90px;
    }

    @media (max-width: 576px) {
      top: -25px;
      right: 25px;
    }

    img {
      width: 150px;
      height: 150px;
      animation: rotate 10s infinite linear;

      @media (max-width: 576px) {
        width: 105px;
        height: 105px;
      }
    }
  }

  .circle-small {
    position: absolute;
    border-radius: 50%;
    width: 19px;
    height: 19px;
    background-color: $middle;
    left: 445px;
    top: 50px;

    @media (max-width: 1440px) {
      left: 345px;
    }

    @media (max-width: 1200px) {
      left: 245px;
    }

    @media (max-width: 990px) {
      left: 145px;
    }

    @media (max-width: 768px) {
      left: 45px;
    }

    @media (max-width: 576px) {
      display: none;
      left: 20px;
      width: 15px;
      height: 15px;
    }
  }

  .circle-middle {
    position: absolute;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: #D2DDE4;
    left: 525px;
    top: -7px;

    @media (max-width: 1440px) {
      left: 400px;
    }

    @media (max-width: 1200px) {
      left: 300px;
    }

    @media (max-width: 990px) {
      left: 200px;
    }

    @media (max-width: 768px) {
      left: 100px;
    }

    @media (max-width: 576px) {
      left: 45px;
      top: -8px;
      width: 30px;
      height: 30px;
    }
  }

  .circle-large {
    position: absolute;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    background-color: #F2F7FA;
    left: 620px;
    top: 100px;

    @media (max-width: 1440px) {
      left: 500px;
    }

    @media (max-width: 1200px) {
      left: 400px;
    }

    @media (max-width: 990px) {
      left: 300px;
    }

    @media (max-width: 768px) {
      left: 200px;
    }

    @media (max-width: 576px) {
      left: 110px;
      top: 64px;
      width: 60px;
      height: 60px;
    }
  }
}




</style>
