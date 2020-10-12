<template>
  <div class="header">
      <h1>Scientific Calculator</h1>
   </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  public numClicks = 0;

  
}
</script>
<style scoped>
.header {
  background-color: var(--blue);
  position:fixed;
  left:0;
  top:0;
  width: 100%;
  height: 12%;
}
h1 {
    color: white;
    text-align: left;
    margin-left: 3%;
    font-family:'arial';
}
</style>