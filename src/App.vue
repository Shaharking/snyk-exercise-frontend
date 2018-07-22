<template>
  <div id="app">
    <input v-model="name" placeholder="package name">
     <input v-model="version" placeholder="package version">
     <input type="button" value="Search" @click="getPackage()">
      <div v-if="isLoading" class="article-preview">
      Loading package ... / Package not searched
      </div>
      <div v-else>
        <tree-view :model="npmPackage"></tree-view>
      </div>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
import { FETCH_PACKAGE } from './store/actions.type'
import TreeView from './components/treeView'
import { mapGetters } from 'vuex'
export default {
  components: {
    TreeView
  },
  watch: {
    name: (newName, oldName) => {
      this.debouncedGetPackage()
    },
    version: (newVersion, oldVersion) => {
      this.debouncedGetPackage()
    }
  },
  created () {
    this.debouncedGetPackage = debounce(this.getPackage, 500)
  },
  methods: {
    getPackage () {
      this.$store.dispatch(FETCH_PACKAGE, this)
    }
  },
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  computed: {
    ...mapGetters([
      'npmPackage',
      'isLoading'
    ])
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
