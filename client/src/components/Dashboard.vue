<template>
    <div class="dashboard">
        <nav class="navbar navbar-dark ju fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <router-link :to="{name: 'dashboard'}" class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</router-link>

                 <input
                class="form-control form-control-dark w-100 mr-5"
                type="text"
                placeholder="Search"
                
            >
            <ul class="navbar-nav justify-content-center">
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
                                <router-link :to="{name: 'dashboard'}" class="active nav-link" >
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
                            <h1>Posts</h1>
                            <div class="btn-toolbar mb-2 mb-md-0">
                                
                                <label class="mt-1 mr-2" >Sort by: </label>
                                
                                <div class="btn-group">

                                
                                    <button class="bg-light btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" type="button" >
                                        <font-awesome-icon icon="arrow-alt-circle-down" class="custom-class mr-1" />Price: Low to High
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li class="dropdown-item px-0"><a @click='sort_by("fee", true)' class="w-100 "><font-awesome-icon icon="arrow-alt-circle-down" class="custom-class mr-1" />Price: High to Low</a></li>
                                        <li class="dropdown-item px-0"><a @click='sort_by("fee", false)' class=" w-100"><font-awesome-icon icon="arrow-alt-circle-up" class="custom-class mr-1" />Price: Low to High</a></li>
                                        <li class="dropdown-item px-0"><a @click='sort_by("rating", true)' class=" w-100"><font-awesome-icon icon="star" class="custom-class mr-1" />Rating: High to Low</a></li>
                                        <li class="dropdown-item px-0"><a @click='sort_by("rating", false)' class=" w-100"><font-awesome-icon icon="star" class="custom-class mr-1" />Rating: Low to High</a></li>
                                        <li class="dropdown-item px-0"><a @click='sort_by("dateCreated", true)' class="w-100"><font-awesome-icon icon="calendar-alt" class="custom-class mr-1" />Date: Most Recent</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="container">

                                <transition-group name="flip-list" tag="div" class="row mx-5 justify-content-center">
                                    <div v-for="post in sorted" :key="post._id" class="col-md-4">
                                        <figure class="card bg-light card-product">
                                            <div class="img-wrap">
                                                <img :src="post.image">
                                            </div>
                                            <figcaption class="info-wrap">
                                                <h4 class="title">{{post.title}}</h4>
                                                <div class="d-flex">
                                                    <a v-for="tag in post.tags" :key="tag.text" href="#" class="badge badge-secondary mr-1">{{tag.text}}</a>
                                                </div>
                                                    
                                                <div class="rating-wrap">
                                                    <div class="label-rating">{{post.reviews.length}} Reviews</div>
                                                    <div class="label-rating float-right">
                                                        <fa-rating
                                                        :glyph="star"
                                                        :item-size="10"
                                                        inactive-color="#cfcfcf"
                                                        active-color="#000"
                                                        v-model="post.rating"
                                                        read-only
                                                        ></fa-rating>
                                                    </div>
                                                    
                                                </div>
                                                <!-- rating-wrap.// -->
                                            </figcaption>
                                            <div class="bottom-wrap">
                                                <router-link :to="`/posts/${post._id}`">
                                                    <button
                                                    href=""
                                                    class="btn btn-sm btn-outline-secondary float-right"
                                                    >View Details</button>
                                                </router-link>
                                                
                                                <div class="price-wrap h5">
                                                    <span class="price-new">${{post.fee}}</span>
                                                </div>
                                                <p class="card-text"><small class="text-muted">{{new Date(post.dateCreated).toDateString()}}</small></p>
                                                <!-- price-wrap.// -->
                                            </div>
                                            <!-- bottom-wrap.// -->
                                        </figure>
                                    </div>
                                </transition-group>
                        
                        </div>
                        <b-pagination @click="e.preventDefault()" size="md" class="mt-3" align="center" :total-rows="10" v-model="currentPage" :per-page="10">
                        </b-pagination>
                    </div>
                    <!-- row.// -->
                    
                    
                </main>
            </div>
            
        </div>
        
    </div>
</template>

<script>
import PostService from '@/services/PostService'
import { FaRating } from 'vue-rate-it'
import Star from 'vue-rate-it/glyphs/star'
export default {
	components: {
		FaRating
	},
	created () {
		this.star = Star
	},
	data () {
		return {
			field: '',
			desc: false,
			star: '',
			currentPage: 1,
			posts: []
		}
	},
	methods: {
		async getPosts () {
			try {
				const response = await PostService.get({})
				this.posts = response.data.posts
			} catch (error) {
				this.error = error.response.data.error
			}
		},
		async logOut () {
			try {
				this.$store.dispatch('logOut', null)
				this.$router.replace({ name: 'login' })
			} catch (error) {

			}
		},
		sort_by (field, desc) {
			this.field = field
			this.desc = desc
		}
	},
	computed: {
		sorted () {
			if (this.field === '') {
				return this.posts
			}

			return this.posts.concat().sort((a, b) => {
				if (this.desc) {
					return a[this.field] > b[this.field] ? -1 : 1
				} else {
					return a[this.field] > b[this.field] ? 1 : -1
				}
			})
		}
	},
	mounted () {
		this.getPosts()
		$('.dropdown-menu li a').click(function () {
			var selText = $(this).text()
			$(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>')
		})
	}
}
</script>

<style type="text/css">
/* Some basic formatting */
.flip-list-move {
  transition: transform 1s;
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