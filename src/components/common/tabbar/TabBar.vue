<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script></script>

<style>
#tab-bar {
  display: flex;
  background-color: #e9e9e9;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.3);
}

</style>
