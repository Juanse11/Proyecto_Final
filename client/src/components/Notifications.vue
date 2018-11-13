<template>
    <div class="dashboard">
        <nav class="navbar navbar-dark ju fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <router-link
                :to="{name: 'dashboard'}"
                class="navbar-brand col-sm-3 col-md-2 mr-0"
                href="#"
            >Company name</router-link>
            <input
                class="form-control form-control-dark w-100 mr-5"
                type="text"
                placeholder="Search"
            >
            <ul class="navbar-nav px-3 ml-5 mr-5">
                <li class="nav-item text-nowrap">
                    <router-link :to="{name: 'CreatePost'}">
                        <button class="btn btn-sm btn-outline-secondary">Create a posting</button>
                    </router-link>
                </li>
            </ul>
        </nav>
        <div class="container-fluid">
            <div class="row">
                <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                    <div class="sidebar-sticky">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <router-link :to="{name: 'dashboard'}" class="nav-link" >
                                    <font-awesome-icon icon="list-alt" /> Home 
                                    <span class="sr-only">(current)</span>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name: 'myposts'}" class="nav-link">
                                    <font-awesome-icon icon="file-alt" /> My Posts
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name: 'notifications'}" class="active nav-link">
                                    <font-awesome-icon icon="bell" /> Notifications
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name: 'profile'}" class="nav-link">
                                    <font-awesome-icon icon="address-card" /> Profile
                                </router-link>
                            </li>
                        </ul>
                        <div class="d-flex h-75">
                            <a class="nav-link align-self-end mt-5" href="" @click="logOut">
                                <font-awesome-icon icon="sign-out-alt" class="custom-class"/>Log Out
                            </a>
                        </div>
                            
                        
                    </div>
                </nav>
                <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                    
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="my-3 p-3 bg-white rounded shadow-sm">
                                    <h4
                                        class="border-bottom border-gray pb-2 mb-0"
                                    >Recent Notifications</h4>
                                    <div v-for="notification in user.notifications" :key="notification._id" class="media text-muted pt-3">
                                        <img
                                            src="http://dummyimage.com/60x60/666/ffffff&text=No+Image"
                                            alt=""
                                            class="mr-2 rounded"
                                        >
                                        <p
                                            class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"
                                        >
                                            <strong class="d-block text-gray-dark">Juan Estrada</strong>
                                            Juan Estrada {{notification.message}} Congratulations!
                                        </p>
                                    </div>
                                    
                                    
                                    <small class="d-block text-right mt-3">
                                        <a href="#">All updates</a>
                                    </small>
                                </div>
                            </div>
                            <!-- col // -->
                            <!-- col // -->
                        </div>
                    </div>
                    
                    <!-- row.// -->
                </main>
            </div>
        </div>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
	data () {
		return {
			userID: this.$store.state.user,
			user: {
				email: '',
				notifications: []
			}
		}
	},
	methods: {
		async logOut () {
			try {
				this.$store.dispatch('logOut', null)
				this.$router.replace({ name: 'login' })
			} catch (error) {

			}
		},
		async getNotifications () {
			try {
				const response = await AuthenticationService.getUser(this.userID)
				this.user = response.data.user
			} catch (error) {
				this.error = error.response.data.error
			}
		}
	},
	mounted () {
		this.getNotifications()
	}
}
</script>

<style type="text/css">
/* Some basic formatting */
.media.text-muted.pt-3 {
    font-size: 1rem;
}

body {
  font-size: 0.875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  /* Behind the navbar */
  padding: 48px 0 0;
  /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto;
  /* Scrollable contents if viewport is shorter than content. */
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: 0.75rem;
  text-transform: uppercase;
}

/*
 * Content
 */

[role="main"] {
  padding-top: 48px;
  /* Space for fixed navbar */
}

/*
 * Navbar
 */

.navbar-brand {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
}

.navbar .form-control {
  padding: 0.75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
}

.card-product .img-wrap {
  border-radius: 3px 3px 0 0;
  overflow: hidden;
  position: relative;
  height: 220px;
  text-align: center;
}
.card-product .img-wrap img {
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
}
.card-product .info-wrap {
  overflow: hidden;
  padding: 15px;
  border-top: 1px solid #eee;
}
.card-product .bottom-wrap {
  padding: 15px;
  border-top: 1px solid #eee;
}

.label-rating {
  margin-right: 10px;
  color: #333;
  display: inline-block;
  vertical-align: middle;
}

.card-product .price-old {
  color: #999;
}
</style>