<template>
    <button @click="$emit('click')" id="btn" >
        <slot></slot>
    </button>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
export default class Button extends Vue {

}
</script>
<style scoped>
#btn {
    height:2em;
    padding: 10px;
    background-color: var(--blue);
    color: white;
    outline: none;
    border: none;
    transition: all 250ms ease-in 0s;
    font-size: 1.5em;
}
#btn:hover {
    background-color: var(--light-blue);
}
</style>