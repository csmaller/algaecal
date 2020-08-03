<template>
  <div class='container-fluid'>
    <div class='row mx-4'>
      <div class='col'>
        <div class='flex-grid video-wrapper'>
          <div class='video-col m-3 bg-white p-4' v-for='video in videos.data' v-bind:key='video.id'>
            <VideoBox :video='video' />
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
      videos:[],
    };
  },
  async asyncData({ params,$axios}) {
    const res = await $axios.get('http://localhost:8080/videos');
    return { videos: res.data};
  },
  
};
</script>

<style>

.main{
  background-color:white;
}


.video-wrapper{
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(420px, 1fr));
}

.video-col {
  flex:1 1 25%;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
