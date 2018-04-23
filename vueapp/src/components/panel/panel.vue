<template>
  <div class="panel-container">
    <div class="panel-header">
      <span>{{title}}</span>
      <slot name="subtitle"></slot>
    </div>
    <div class="panel-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {}
  },
  props: {
    title: {
      type: String
    }
  }
}
</script>
