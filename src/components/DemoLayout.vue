<template>
  <div class="min-h-screen flex flex-col justify-between bg-grey-darkest">
    <div>
      <slot></slot>
    </div>
    <links></links>
  </div>
</template>

<script>
import Links from "@/components/Links.vue"

export default {
  components: {
    Links
  }
}
</script>
