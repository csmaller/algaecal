<template>
  <div class='row bg-white'>
    <div class='col-2 bg-white'>
       <nuxt-link to='/'><Logo /></nuxt-link>
    </div>
    <div class='col-10'>
      <nav class='mt-4 text-right pr-5 w-100'>
        <nuxt-link v-if='!$store.state.user.user.loggedIn' to='/login'>Login</nuxt-link>
        <nuxt-link v-if='$store.state.user.user.loggedIn' to='/login?logout=true'>Logout</nuxt-link>
        <nuxt-link to='/videos'>Videos</nuxt-link>
      </nav>
    </div>
  </div>
</template>

<style>

  a {
    margin-right: 15px;
  }

</style>
