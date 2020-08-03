<template>
  <div>
    <div class='row mt-4'>
      <div class='col-12 text-left'>
        <nuxt-link to='/videos' class='ml-5'>Back</nuxt-link>
      </div>
    </div>
    <div class='d-flex justify-content-center align-items-center mt-4'>
      <script charset='ISO-8859-1' src='//fast.wistia.com/assets/external/E-v1.js' async></script>
      <div class='row'>
        <div class='wistia-container text-center'>
          <h3 class='text-left'>Video</h3>
          <client-only placeholder='Loading...'>
            <div
              v-bind:class='`d-inline-block wistia_embed wistia_async_${video.video_id}`'
              style='height:360px;width:640px; min-height:360px;'
            >&nbsp;</div>
          </client-only>
          <div class='text-left'>
            <VideoDetails :video='video' />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',
  data() {
    return {
      video: [],
    };
  },
  async asyncData({ params, $axios, route }) {
    const res = await $axios.get(
      `http://localhost:8080/videos/${route.params.id}`
    );
    if (res.data.data) {
      return { video: res.data.data };
    }
    return { video: [] };
  },
};
</script>

<style scoped>
a {
  text-decoration: underline;
  color: #187d61;
}
</style>
