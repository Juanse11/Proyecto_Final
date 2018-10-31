<template>
  <div class="hello">
    <div class="ui middle aligned center aligned grid">
      <div class="column">
        <h2 class="ui teal image header">
          <div class="content">
            Create your account
          </div>
        </h2>
        <form class="ui large form">
          <div class="ui stacked segment">
            <div class="field">
              <div class="ui left icon input">
                <i class="user icon"></i>
                <input v-model="email" type="text" name="email" placeholder="E-mail address">
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input v-model="password" type="password" name="password" placeholder="Password">
              </div>
            </div>
            <div @click="register" class="ui fluid large teal submit button">Sign Up</div>
          </div>

          <div class="ui error message"></div>

        </form>

        <div class="ui message">
          Already have an account? <router-link to="/login">Login</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      username: "",
      password: "",
      error: null
    };
  },
  methods: {
    async register() {
      try {
          const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
          })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css">
    body {
      background-color: #DADADA;
    }
    body > .grid {
      height: 100%;
    }

    .column {
      max-width: 450px;
    }
    .hello{
      margin-top: 100px;
    }
  </style>
