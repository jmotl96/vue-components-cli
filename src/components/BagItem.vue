<template>
  <div class="card">
    <div class="card-body">
      <component :is="typeOfItem" :item="item"></component>
    </div>
    <div class="card-footer">
      <button @click="item.remove()" class="btn btn-warning">Remove</button>
    </div>
  </div>
</template>

<script>
import Book from "./Book";
import Movie from "@/components/Movie";

export default {
  name: "BagItem",
  components: {
    Book,
    Movie
  },
  props: {
    item: Object,
    removeFunction: Function,
  },
  computed: {
    typeOfItem(){
      return this.item.constructor.name;
    }
  },
}
</script>

<style scoped>

</style>