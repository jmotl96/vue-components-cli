<template>
  <div class="card-columns">
    <library-item v-for="(item, i) in library"
                  :item="item"
                  :remove-function="function(item){library.removeItem(item)}"
                  :key="i"
    ></library-item>
    <div class="card">
      <p>Checked out: {{library.checkedOutItems().length}}</p>
    </div>
  </div>
</template>

<script>
import LibraryCollection from "@/models/Library";
import {Book, Movie, Album} from "@/models/LibraryItems";
import LibraryItem from "@/components/LibraryItem";

export default {
  name: "Library",
  components: {
    LibraryItem
  },
  data() {
    return {
      //library: libraryCollection

      library: new LibraryCollection()
          .addItem(new Book('Interaction Design', 200))
          .addItem(new Movie('Paw Patrol!', 78))
          .addItem(new Movie('Harriet', 122))
          .addItem(new Book('Brown Bear, Brown Bear', 0))
          .addItem(new Album('50 Big Ones: Greatest Hits','The Beach Boys', 50))
    }

  },

}
</script>

<style scoped>

</style>