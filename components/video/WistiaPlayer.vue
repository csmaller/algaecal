<template>
  <div>
    <script v-bind:src="`https://fast.wistia.com/embed/medias/${video_id}.jsonp`" async></script>
    <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
    <div
      v-bind:class="`wistia_embed wistia_async_${video_id}`"
      style="height:360px;position:relative;width:640px"
    >
      <div
        class="wistia_swatch"
        style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"
      >
        <img
          v-bind:src="`https://fast.wistia.com/embed/medias/${video_id}/swatch`"
          style="filter:blur(5px);height:100%;object-fit:contain;width:100%;"
          alt
          aria-hidden="true"
          onload="this.parentNode.style.opacity=1;"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["video_id"],
};
</script>
