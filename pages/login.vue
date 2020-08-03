<template>
  <div class='container w-100 bg-green'>
    <div>
      <LoginForm :users='users' />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  async asyncData({ params, $axios }) {
    const res = await $axios.get('http://localhost:8080/users');
    return { users: res.data };
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
