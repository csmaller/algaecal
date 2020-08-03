<template>
  <div class='video-details mt-3'>
    <h3>{{video.title}}</h3>
    <p v-if='video.category'>Category: {{video.category}}</p>
    <p>{{video.description}}</p>
  </div>
</template>

<script>
export default {
  props: ['video'],
};
</script>

<style scoped>
.video-details h3 {
  color: #1d8368;
}

.video-details p {
  color: #295950;
  margin-top: 15px;
}
</style>
