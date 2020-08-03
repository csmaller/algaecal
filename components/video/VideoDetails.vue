<template>
  <div class='video-details mt-1 px-1'>
    <h4>{{video.title}}</h4>
    <p v-if='video.category'><strong>Category:</strong> {{video.category}}</p>
    <p class="mt-1">{{video.description}}</p>
  </div>
</template>

<script>
export default {
  props: ['video'],
};
</script>

<style scoped>
.video-details h4 {
  color: #1d8368;
}

.video-details p {
  color: #295950;
  margin-top: 15px;
}
</style>
