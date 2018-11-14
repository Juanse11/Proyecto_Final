<template>
  <div class="form-signin">
		<h1 class="h3 mb-3 font-weight-normal text-center">Login</h1>
		<label for="inputEmail" class="sr-only">Email address</label>
		<input type="email" v-model="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
		<label for="inputPassword" class="sr-only">Password</label>
		<input type="password" v-model="password" id="inputPassword" class="form-control" placeholder="Password" required>
		<div class="checkbox mb-3">
			<label>
				<input type="checkbox" value="remember-me"> Remember me
			</label>
		</div>
		<button class="btn btn-lg btn-primary btn-block" @click="login">Sign in</button>
		<p class="mt-3 mb-3 pl-4 pt-2 border-left-0 border-top-0 text-muted">Don't have an account?<router-link :to="{name: 'register'}"> Register </router-link></p>
  </div>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'
  export default {
  	data () {
  		return {
  			email: '',
  			username: '',
  			password: ''
  		}
  	},
  	methods: {
  		async login () {
  			const response = await AuthenticationService.login({
  				email: this.email,
  				password: this.password
  			})
  			if (response.data.user) {
  				this.$store.dispatch('setToken', response.data.token)
  				this.$store.dispatch('setUser', response.data.user._id)
  				this.$router.replace({ name: 'dashboard' })
  			}
  		}
  	}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css">
  html,
  body {
    height: 100%;
  }

  body {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
  }

  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }

  .form-signin .checkbox {
    font-weight: 400;
  }

  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }

  .form-signin .form-control:focus {
    z-index: 2;
  }

  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>