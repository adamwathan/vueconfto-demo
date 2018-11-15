<template>
  <demo-layout>
    <div class="bg-white p-12">
      <div class="max-w-sm mx-auto mb-12">
        <header>
          <div class="flex justify-between items-center mb-16">
            <div>
              <span class="font-pacifico text-3xl font-bold text-indigo">Cya!</span>
            </div>
            <div>
              <a href="#" class="text-grey-darker font-medium no-underline mr-4">Login</a>
              <a href="#" class="text-grey-darker font-medium no-underline">Sign up</a>
            </div>
          </div>

          <with-entered-viewport>
            <hero-section slot-scope="{ enteredViewport }" :class="{ 'slide-in-end': enteredViewport}" class="slide-in-from-bottom"></hero-section>
          </with-entered-viewport>

        </header>
        <div>

          <with-entered-viewport>
            <feature-section slot-scope="{ enteredViewport }" :class="{ 'slide-in-end': enteredViewport}" class="slide-in-from-left" icon="cog">
              <template slot="title">Fully automated</template>
              <template slot="body">Simply give us your boss's email address and we'll handle the rest. We'll even clean out your desk so you can avoid awkward confrontation.</template>
            </feature-section>
          </with-entered-viewport>

          <with-entered-viewport>
            <feature-section slot-scope="{ enteredViewport }" :class="{ 'slide-in-end': enteredViewport}" class="slide-in-from-right" icon="lock">
              <template slot="title">Totally anonymous</template>
              <template slot="body">Your boss will never find out that you're the person who quit. Well until you stop showing up for work, then they'll know.</template>
            </feature-section>
          </with-entered-viewport>

          <with-entered-viewport>
            <feature-section slot-scope="{ enteredViewport }" :class="{ 'slide-in-end': enteredViewport}" class="slide-in-from-left" icon="currency">
              <template slot="title">Free for quitters</template>
              <template slot="body">We send the bill to your next employer, not to you. Unless you don't already have another job lined up, then we'll send it to you.</template>
            </feature-section>
          </with-entered-viewport>

          <div class="relative my-16 pl-8">
            <span class="absolute text-5xl text-indigo opacity-25 pin-t pin-l -ml-10 -mt-4">
              <svg class="block h-16 w-16" fill="currentColor" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M134.342 174.384c-28.937-32.457-9.004-88.955 15.088-110.796 20.532-18.613 54.553-33.832 57.76-28.515 5.1 8.454-14.97 14.456-30.058 28.024-18.835 20.354-25.16 29.504.903 40.986 27.936 12.599 28.472 24.922 29.37 40.599 2.26 39.467-44.813 57.93-73.063 29.702zM26.342 173.384C-2.595 140.927 17.338 84.429 41.43 62.588c20.532-18.613 54.553-33.832 57.76-28.515 5.1 8.454-14.97 14.456-30.058 28.024-18.835 20.354-25.16 29.504.903 40.986 27.936 12.599 28.472 24.922 29.37 40.599 2.26 39.467-44.813 57.93-73.063 29.702z"/></g></svg>
            </span>
            <blockquote class="font-serif text-xl italic leading-normal text-grey-darkest mb-6">
              I couldn't believe how easy it was. One minute my boss was handing me an Angular 1 project to maintain, and a few clicks later I was free!
            </blockquote>
            <div class="flex items-center">
              <img class="block h-12 w-12 rounded-full mr-4" src="/img/adam.jpg" alt="">
              <div class="text-grey-darker">
                <span class="block text-indigo font-semibold">Adam Wathan</span>
                <span class="block">Regretfully unemployed software developer</span>
              </div>
            </div>
          </div>
          <div>
            <a href="#" class="text-center bg-indigo hover:bg-indigo-light text-white font-semibold text-2xl px-6 py-4 rounded shadow-md no-underline block">Sign up and quit today</a>
          </div>
        </div>
      </div>
    </div>
  </demo-layout>
</template>

<script>
import DemoLayout from "@/components/DemoLayout.vue"
import HeroSection from "@/components/HeroSection.vue"
import FeatureSection from "@/components/FeatureSection.vue"
import WithEnteredViewport from "@/components/WithEnteredViewport.vue"

export default {
  name: "LandingPage",
  components: {
    DemoLayout,
    HeroSection,
    FeatureSection,
    WithEnteredViewport,
  }
}
</script>

<style>
  .slide-in-from-bottom {
    opacity: 0;
    transform: translate(0, 50px);
    transition: all .5s ease-out;
  }
  .slide-in-from-left {
    opacity: 0;
    transform: translate(-150px, 0);
    transition: all 1s ease-out;
  }
  .slide-in-from-right {
    opacity: 0;
    transform: translate(150px, 0);
    transition: all 1s ease-out;
  }
  .slide-in-end {
    opacity: 1;
    transform: translate(0, 0);
  }
</style>
