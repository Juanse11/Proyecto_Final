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
                                <router-link :to="{name: 'myoffers'}" class="nav-link">
                                    <font-awesome-icon icon="money-bill-alt" /> My Offers
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name: 'notifications'}" class="nav-link">
                                    <font-awesome-icon icon="bell" /> Notifications
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name: 'profile'}" class="active nav-link">
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
                    <h1>Profile</h1>
                    <div class="container">
                        <div class="row mt-3">
                        <div class="col-6">
                            <form>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col">
                                            <label for="FName">First Name</label>
                                            <input type="text" id="FName" class="form-control" placeholder="First name">
                                        </div>
                                        <div class="col">
                                            <label for="LName" Last name="">Last Name</label>
                                            <input type="text" id="LName" class="form-control" placeholder="Last name">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="refImage">Profile Picture</label>
                                    <input type="file" class="form-control-file" id="refImage">
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Gender</label>
                                    <input type="name" class="form-control" id="gender">
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Date of Birth</label>
                                    <input type="name" class="form-control" id="gender" placeholder="DD/MM/YYYY">
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Address 1</label>
                                    <input type="name" class="form-control" id="address1">
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Address 2
                                        <small class="text-muted">Optional</small>
                                    </label>
                                    <input type="name" class="form-control" id="address2">
                                </div>
                                <div>
                                    <button type="button" class="btn btn-primary btn-sm">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div class="col-6">
                            <h3>Payment Method</h3>
                            <div class="card" style="width: 30em;">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-5">
                                            <font-awesome-icon icon="credit-card" class="custom-class" style="font-size: 9em"/>
                                        </div>
                                        <div class="col-sm-7 align-self-center">
                                            <h5 class="card-title">Credit Card</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">MasterCard</h6>
                                            <p class="card-text">1234 **** **** *****</p>
                                            <h6 class="card-subtitle mb-2 text-muted">12/21</h6>
                                        </div>
                                    </div>
                                </div>
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
export default {

	data () {
		return {}
	},
	methods: {
		async logOut () {
			try {
				this.$store.dispatch('logOut', null)
				this.$router.replace({ name: 'login' })
			} catch (error) {

			}
		}
	}
}
</script>

<style type="text/css">
/* Some basic formatting */
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