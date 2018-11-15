<template>
  <div>
    <slot :entered-viewport="enteredViewport"></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        enteredViewport: false,
      }
    },
    mounted() {
      const observer = new IntersectionObserver(([entry], observer) => {
        if (entry.intersectionRatio > 0) {
          this.enteredViewport = true
          observer.disconnect()
        }
      })

      observer.observe(this.$el)
    }
  }
</script>
