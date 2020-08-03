<template>
  <div class='video-container'>
    <nuxt-link :to='`/videos/${video.id}`'>
      <div class='video-box text-center d-flex align-items-center px-4'>
        <button name='play'></button>
      </div>
    </nuxt-link>
    <VideDetails :video='video' />
  </div>
</template>

<script>
export default {
  props: ['video'],
};
</script>

<style>
.video-container {
  width: 400px;
}

.video-box {
  background-color: #073b30;
  width: 100%;
  height: 240px;
  position: relative;
}

.video-box:hover {
  border: 15px solid #187d61;
}

button[name='play'] {
  width: 60px;
  height: 40px;
  background: #187d61;
  border: none;
  border-radius: 5px;
  margin: auto;
  cursor: pointer;
}

button[name='play']:focus {
  outline: 0;
  border: 1px solid hsl(210, 58%, 69%);
  box-shadow: 0 0 0 3px hsla(210, 76%, 57%, 0.5);
}

button[name='play']::after {
  content: '';
  display: inline-block;
  position: relative;
  top: 3px;
  left: 3px;
  border-style: solid;
  border-width: 10px 0 10px 20px;
  border-color: transparent transparent transparent white;
}
</style>
