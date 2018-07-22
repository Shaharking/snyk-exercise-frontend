<template>
    <li>
        <span
        :class="{bold: isFolder}"
        @click="toggle"
        >
        {{ model.package.name }}@{{ model.package.version }}
            <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
        </span>
        <ul v-show="open" v-if="isFolder">
          <item
              class="item"
              v-for="(model, index) in model.children"
              :key="index"
              :model="model">
          </item>
        </ul>
  </li>
</template>

<script>
export default {
  name: 'item',
  props: {
    model: Object
  },
  data () {
    return {
      open: false
    }
  },
  computed: {
    isFolder: function () {
      return this.model && this.model.children &&
        this.model.children.length
    }
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open
      }
    }
  }
}
</script>

<style>
body {
  font-family: Menlo, Consolas, monospace;
  color: #444;
}
.item {
  cursor: pointer;
}
.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
span ~ ul {
  padding-left: 2em;
}
</style>