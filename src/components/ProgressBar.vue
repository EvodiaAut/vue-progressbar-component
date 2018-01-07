<template>
  <div class="progressbar">
    <div class="progressbar-bar" :style="barStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    value: {
      type: Number,
      default: 0
    },
    origin: {
      type: String,
      default: 'left'
    },
    scale: {
      type: String,
      default: 'X'
    }
  },
  data() {
    return {
      domReady: false
    }
  },
  mounted() {
    // DOM rdy
    setTimeout(() => { this.domReady = true }, 0)
  },
  computed: {
    barStyle() {
      if (!this.domReady) {
        return {
          transform: `scale${this.scale}(0)`
        }
      }

      return {
        transform: `scale${this.scale}(${this.value * 0.01})`,
        transformOrigin: `${this.origin}`
      }
    }
  }
}
</script>
