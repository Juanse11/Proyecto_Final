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
                                <router-link :to="{name: 'myposts'}" class="active nav-link">
                                    <font-awesome-icon icon="file-alt" /> My Posts
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name: 'notifications'}" class="nav-link">
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
                        <div class="row mx-5">
                            <div class="col-12 mt-4">
                                <h2>My Offers</h2>
                                <br>
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Post Title</th>
                                            <th scope="col">Fee</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Accept/Reject</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                            <tr  v-for="(offer, index) in offers"  :key="offer._id" class="table-row">
                                                <th scope="row">{{index}}</th>
                                                <td>{{offer.postTitle}}</td>                                               
                                                <td>{{offer.offer}}</td>                                               
                                                <td>{{offer.status}}</td>                                              
                                                <td v-show="offer.status === 'Work in progress'"><div class="btn-group justify-content-center">
                                                    <button class="btn btn-sm btn-outline-secondary" @click="payment(offer._id, offer.customerID, index, false)">
                                                        <i class="fas fa-shopping-cart"></i>Cancel
                                                    </button>
                                                    <button
                                                        type="button"
                                                        class="btn btn-sm btn-secondary"
                                                        @click="payment(offer._id, offer.workerID, index, true)"
                                                    >Done</button>
                                                </div></td>                                              
                                            </tr>
                                            
                                    </tbody>
                                    
                                </table>
                                <div v-if="offers.length<1" class="col-12 mt-5 pl-2">
                                    <h3 class="text-center text-muted">No offers available</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- row.// -->
                </main>
            </div>
        </div>
    </div>
</template>

<script>
import PostService from '@/services/PostService'
import OrderService from '@/services/OrderService'
import AuthenticationService from '@/services/AuthenticationService'
export default {
	data () {
		return {
			userID: this.$store.state.user,
			offers: [],
			notification: {
				fromUserID: this.$store.state.user,
				message: '',
				notifType: '',
				postTitle: ''
			}
		}
	},
	methods: {
		async getPosts () {
			try {
				const response = await PostService.getByQuery(this.userID)
				this.posts = response.data.posts
			} catch (error) {
				this.error = error.response.data.error
			}
		},
		async getOffers (postID, index) {
			try {
				const response = await OrderService.getByCustomer(this.userID)

				this.offers = response.data.orders
			} catch (error) {
				this.error = error.response.data.error
			}
		},
		async logOut () {
			try {
				this.$store.dispatch('logOut', null)
				this.$router.replace({ name: 'login' })
			} catch (error) {}
		},
		async payment (offerID, toUserID, index, isPayment) {
			try {
				if (isPayment) {
					this.offers[index].status = 'Completed'
					this.notification.message = 'has confirmed the completion of the job'
					this.notification.notifType = 'completed'
					await OrderService.updateStatus(offerID, { status: 'Completed' })
				} else {
					this.offers[index].status = 'Canceled'
					this.notification.message = 'has canceled the job'
					this.notification.notifType = 'canceled'
					await OrderService.updateStatus(offerID, { status: 'Canceled' })
				}
				this.notification.postTitle = this.offers[index].postTitle
				this.notification.dateCreated = Date.now()
				await AuthenticationService.addNotification(this.notification, toUserID)
			} catch (error) {
				console.log('error')
			}
		}
	},
	mounted () {
		this.getOffers()
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
.table-row{
cursor:pointer;
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