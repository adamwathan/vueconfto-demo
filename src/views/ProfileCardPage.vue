<template>
  <demo-layout>
    <div class="p-8">
      <div class="mx-auto mb-24" style="width: 600px">
        <input class="block w-full mb-6" type="range" min="250" max="600" v-model="width1">
        <div :style="{ 'max-width': `${width1}px` }" class="mx-auto mb-12">
          <profile-card></profile-card>
        </div>
      </div>

      <div class="mx-auto" style="width: 600px">
        <input class="block w-full mb-6" type="range" min="250" max="600" v-model="width2">
        <div :style="{ 'max-width': `${width2}px` }" class="mx-auto">
          <profile-card></profile-card>
        </div>
      </div>
    </div>
  </demo-layout>
</template>

<script>
import ProfileCard from "@/components/ProfileCard.vue"
import DemoLayout from "@/components/DemoLayout.vue"

export default {
  name: "ProfileCardPage",
  components: {
    ProfileCard,
    DemoLayout
  },
  data() {
    return {
      width1: 420,
      width2: 300,
    }
  }
}
</script>
