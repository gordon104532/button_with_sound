<template>
  <div class="home">
    <PlayList></PlayList>
  </div>
</template>

<script>
// @ is an alias to /src
import PlayList from '@/components/PlayList.vue'

export default {
  name: 'HomeView',
  components: {
    PlayList
  }
}
</script>
