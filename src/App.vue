<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
#app {
  display: block;
  background-color: transparent;
  box-shadow: none;
  color: inherit;
  margin: 0;
  padding: 0;
  font-family: inherit;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  text-align: inherit;
}
</style>