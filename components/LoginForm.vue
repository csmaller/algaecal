<template>
  <b-card class='bg-white px-4'>
    <h1 class='text-green text-arial'>User Login</h1>
    <b-form @submit='onSubmit' class='mt-4'>
      <b-form-group class='py-3' id='input-group-1' label-for='input-1'>
        <b-form-input
          id='input-1'
          v-model='form.email'
          type='text'
          required
          placeholder='enter your username'
        ></b-form-input>
      </b-form-group>
      <b-button :disabled='isDisabled' type='submit' variant='primary' class='button--green'>Login</b-button>
    </b-form>
  </b-card>
</template>

<script>
export default {
  props: ['users'],
  mounted() {
    if (this.$route.query.logout) {
      this.removeUser();
      this.$toast.success('You have been logged out');
    }
    if (this.$route.query.redirect) {
      this.$toast.error('You must be logged in to access that page');
    }
  },
  computed: {
    isDisabled() {
      // you can  check your form is filled or not here.
      return this.form.email.length < 3;
    },
  },
  data() {
    return {
      form: {
        email: '',
      },
      message: '',
    };
  },
  methods: {
    addUser(user) {
      this.$store.commit('user/add', user);
    },
    removeUser() {
      this.$store.commit('user/remove');
    },
    async getUsers() {
      this.users = await this.$axios.get('http://localhost:8080/users');
    },
    validateUser(user) {
      // remove any whitespace and make lowercase for comparison
      const compareUsername = this.form.email.toLowerCase().trim();

      const validUser = this.users.data.find((u) => {
        return compareUsername === u.username.toLowerCase().trim();
      });

      if (validUser) {
        this.addUser(this.form.email);
        this.$router.push('/videos');
      } else {
        this.$toast.show(
          'sorry that user does not exist in our database.Try again'
        );
      }
    },

    onSubmit(event) {
      event.preventDefault();
      this.validateUser(this.form.email);
    },
  },
};
</script>

<style>
.main {
  background-color: #3b8070;
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
.card {
  width: 450px;
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
