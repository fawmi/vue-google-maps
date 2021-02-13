<template>
  <input
    ref="input"
    v-bind="$attrs"
    v-on="$attrs"
    />
</template>

<script>
export default (function (x) { return x.default || x })(require('./autocompleteImpl.js'))
</script>
