<template>
  <div class="min-h-screen flex flex-col justify-between p-8">
    <div class="flex-1 flex items-center max-w-md mx-auto text-center py-24">
      <div>
        <h1 class="font-bold text-6xl text-white leading-none mb-8">Advanced Vue Component Design</h1>
        <p class="text-2xl">
          <span class="text-grey italic">with </span>
          <span class="text-grey-lighter font-bold">Adam Wathan</span>
        </p>
      </div>
    </div>
    <links></links>
  </div>
</template>

<script>
import Links from "@/components/Links.vue"

export default {
  name: "home",
  components: {
    Links
  }
}
</script>
