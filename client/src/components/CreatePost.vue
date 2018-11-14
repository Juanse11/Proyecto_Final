<template>
    <div class="dashboard">
        <nav class="navbar navbar-dark ju fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <router-link
                :to="{name: 'dashboard'}"
                class="navbar-brand col-sm-3 col-md-2 mr-0"
                href="#"
            >Officii</router-link>
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
                        <div
                            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
                        >
                            <h1>Create a post</h1>
                        </div>
                        <div class="container">
                            <div class="row mx-5">
                                <div class="col-lg 12">
                                    <div class="form-group">
                                        <label>Title</label>
                                        <input
                                            type="name"
                                            class="form-control w-50"
                                            id="serviceName"
                                            placeholder="Service name"
                                            v-model="post.title"
                                        >
                                    </div>
                                    <div class="form-group">
                                        <label>Description</label>
                                        <textarea
                                            class="form-control w-50"
                                            id="Description"
                                            placeholder="Description of the service"
                                            rows="3"
                                            v-model="post.description"
                                        ></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label>Fee</label>
                                        <input
                                            type="number"
                                            class="form-control w-50"
                                            v-model="post.fee"
                                            placeholder="$"
                                        >
                                    </div>
                                    <div class="form-group">
                                        <label>Tags</label>
                                        <vue-tags-input
                                            v-model="tag"
                                            :tags="tags"
                                            @tags-changed="newTags => tags = newTags">
                                        </vue-tags-input>
                                    </div>
                                    <div>
                                        <button
                                            @click="createPost"
                                            type="button"
                                            class="btn btn-outline-secondary btn-sm"
                                        >Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
import VueTagsInput from '@johmun/vue-tags-input'
import PostService from '@/services/PostService'

export default {
	components: {
		VueTagsInput
	},
	data () {
		return {
			post: {
				title: null,
				description: null,
				image: null,
				jobType: null,
				userID: null,
				fee: null,
				tags: []
			},
			tag: '',
			tags: []
		}
	},
	methods: {
		async createPost () {
			try {
				this.post.tags = this.tags
				this.post.userID = this.$store.state.user
				const response = await PostService.create(this.post)
				console.log(response)
				this.$router.replace({ name: 'dashboard' })
			} catch (error) {
				this.error = error.response.data.error
			}
		}
	}
}
</script>

<style >
/*
 * bootstrap-tagsinput v0.8.0
 * 
 */
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
</style>