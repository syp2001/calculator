<template>
  <div class="container">
    
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private data!: object;
  
}
</script>
<style scoped>
.container {
  background-color: var(--mauve);
}
</style>