<template>
  <div>
    <slot :width="width"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: null,
    }
  },
  mounted() {
    const observer = new ResizeObserver(([entry]) => {
      this.width = entry.contentRect.width
    })

    observer.observe(this.$el)
  }
}
</script>
