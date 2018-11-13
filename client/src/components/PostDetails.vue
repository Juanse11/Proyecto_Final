<template>
    <div class="dashboard">
        <nav class="navbar navbar-dark ju fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <router-link
                :to="{name: 'dashboard'}"
                class="navbar-brand col-sm-3 col-md-2 mr-0"
                href="#"
            >Officii</router-link>
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
                                <a class="nav-link active" href="#">
                                    <home-icon class="custom-class"></home-icon>Home
                                    <span class="sr-only">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <file-icon class="custom-class"></file-icon>My Posts
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <message-circle-icon class="custom-class"></message-circle-icon>Messages
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <user-icon class="custom-class"></user-icon>Profile
                                </a>
                            </li>
                        </ul>
                        <div class="d-flex h-75">
                            <a class="nav-link align-self-end mt-5" href="" @click="logOut">
                                <power-icon class="custom-class"></power-icon>Log Out
                            </a>
                        </div>
                    </div>
                </nav>
                <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="card">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div
                                                id="carouselExampleControls"
                                                class="carousel slide h-100"
                                                data-ride="carousel"
                                            >
                                                <ol class="carousel-indicators">
                                                    <li
                                                        data-target="#carouselExampleControls"
                                                        data-slide-to="0"
                                                        class="active"
                                                    ></li>
                                                    <li
                                                        data-target="#carouselExampleControls"
                                                        data-slide-to="1"
                                                    ></li>
                                                    <li
                                                        data-target="#carouselExampleControls"
                                                        data-slide-to="2"
                                                    ></li>
                                                </ol>
                                                <div class="carousel-inner h-100">
                                                    <div class="carousel-item active h-100">
                                                        <img
                                                            class="d-block w-100 h-100"
                                                            src="https://images7.alphacoders.com/750/750703.jpg"
                                                            alt="First slide"
                                                        >
                                                    </div>
                                                    <div class="carousel-item h-100">
                                                        <img
                                                            class="d-block w-100 h-100"
                                                            src="https://images.pexels.com/photos/1156684/pexels-photo-1156684.jpeg?cs=srgb&dl=lights-iphone-smartphone-1156684.jpg&fm=jpg"
                                                            alt="Second slide"
                                                        >
                                                    </div>
                                                    <div class="carousel-item h-100">
                                                        <img
                                                            class="d-block w-100 h-100"
                                                            src="data:image/jpeg;base64,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"
                                                            alt="Third slide"
                                                        >
                                                    </div>
                                                </div>
                                                <a
                                                    class="carousel-control-prev"
                                                    href="#carouselExampleControls"
                                                    role="button"
                                                    data-slide="prev"
                                                >
                                                    <span
                                                        class="carousel-control-prev-icon"
                                                        aria-hidden="true"
                                                    ></span>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                                <a
                                                    class="carousel-control-next"
                                                    href="#carouselExampleControls"
                                                    role="button"
                                                    data-slide="next"
                                                >
                                                    <span
                                                        class="carousel-control-next-icon"
                                                        aria-hidden="true"
                                                    ></span>
                                                    <span class="sr-only">Next</span>
                                                </a>
                                            </div>
                                            <!-- gallery-wrap .end// -->
                                        </div>
                                        <aside class="col-sm-6">
                                            <article class="card-body p-5">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <h3 class="title mb-3">{{post.title}}</h3>
                                                    </div>
                                                    <div class="col-6">
                                                        <fa-rating
                                                            :glyph="star"
                                                            :item-size="30"
                                                            inactive-color="#cfcfcf"
                                                            active-color="#000"
                                                            v-model="post.rating"
                                                            read-only
                                                            :increment="0.1"
                                                        ></fa-rating>
                                                    </div>
                                                </div>
                                                <p class="price-detail-wrap">
                                                    <span class="price h3">
                                                        <span class="currency">COP $</span>
                                                        <span class="num">{{post.fee}}</span>
                                                    </span>
                                                    <span>/per hr</span>
                                                </p>
                                                <!-- price-detail-wrap .// -->
                                                <dl class="item-property">
                                                    <dt>Description</dt>
                                                    <dd>
                                                        <p>{{post.description}}</p>
                                                    </dd>
                                                </dl>
                                                <div class="row">
                                                    <div class="col-sm-2">
                                                        <figure>
                                                            <img
                                                                src="cocinero.png"
                                                                alt=""
                                                                class="rounded-circle"
                                                                style="width:75px;"
                                                                id="user-img"
                                                            >
                                                        </figure>
                                                    </div>
                                                    <div class="col-sm-10">
                                                        <dt>{{user.email}}</dt>
                                                    </div>
                                                </div>
                                                <hr>
                                                
                                                <div class="btn-group justify-content-center">
                                                    <button
                                                        type="button"
                                                        class="btn btn-secondary"
                                                        data-toggle="modal"
                                                        data-target="#offerModal"
                                                    >Make Offer</button>
                                                    <button class="btn btn-outline-secondary">
                                                        <i class="fas fa-shopping-cart"></i>Contact
                                                    </button>
                                                </div>
                                                    
                                                <!-- Modal -->
                                                <div
                                                    class="modal fade"
                                                    id="offerModal"
                                                    tabindex="-1"
                                                    role="dialog"
                                                    aria-hidden="true"
                                                >
                                                    <div
                                                        class="modal-dialog modal-dialog-centered"
                                                        role="document"
                                                    >
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5
                                                                    class="modal-title"
                                                                    id="exampleModalLabel"
                                                                >Make an Offer</h5>
                                                                <button
                                                                    type="button"
                                                                    class="close"
                                                                    data-dismiss="modal"
                                                                >
                                                                </button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <div class="form-group">
                                                                    <label for="offer">Offer</label>
                                                                    <div class="input-group">
                                                                        <input
                                                                            type="text"
                                                                            class="form-control"
                                                                            v-model="offer.offer"
                                                                        >
                                                                        <div
                                                                            class="input-group-append"
                                                                        >
                                                                            <span
                                                                                class="input-group-text"
                                                                            >COP</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group">
                                                                    <label
                                                                        for="offerDescription"
                                                                    >Description</label>
                                                                    <textarea
                                                                        class="form-control"
                                                                        v-model="offer.description"
                                                                        rows="2"
                                                                    ></textarea>
                                                                </div>
                                                                <div class="form-group">
                                                                    <label
                                                                        for="exampleFormControlInput1"
                                                                    >Date</label>
                                                                    <input
                                                                        type="name"
                                                                        class="form-control"
                                                                        id="gender"
                                                                        placeholder="DD/MM/YYYY"
                                                                    >
                                                                </div>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button
                                                                    type="button"
                                                                    class="btn btn-outline-secondary"
                                                                    data-dismiss="modal"
                                                                >Close</button>
                                                                <button
                                                                    type="button"
                                                                    @click.prevent="makeOffer"
                                                                    class="btn btn-secondary"
                                                                >Submit offer</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </article>
                                            <!-- card-body.// -->
                                        </aside>
                                        <!-- col.// -->
                                    </div>
                                    <!-- row.// -->
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="d-flex mb-4">
                            <a
                                class="mb-1"
                                data-toggle="collapse"
                                href="#reviewBlock"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                            >Make a Review</a>
                        </div>
                        <div class="row justify-content-center">
                            <div class="review-block w-75">
                                <div class="row mb-4">
                                    <div class="col-12 mt-2">
                                        <div class="collapse" id="reviewBlock">
                                            <div class="card card-body">
                                                <form>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-8">
                                                            <label for="inputPassword4">Title</label>
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                id="inputPassword4"
                                                                placeholder="Title"
                                                                v-model="review.title"
                                                            >
                                                        </div>
                                                        <div
                                                            class="form-group col-md-4 border-left-0 pl-5"
                                                        >
                                                            <label for="inputEmail4">Rating</label>
                                                            <fa-rating
                                                                :glyph="star"
                                                                :item-size="20"
                                                                inactive-color="#cfcfcf"
                                                                active-color="#000"
                                                                v-model="rating"
                                                                :show-rating="false"
                                                            ></fa-rating>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="inputAddress">Description</label>
                                                        <textarea
                                                            v-model="review.description"
                                                            class="form-control"
                                                            id="exampleFormControlTextarea1"
                                                            rows="3"
                                                            placeholder="Description"
                                                        ></textarea>
                                                    </div>
                                                    <button
                                                        @click.prevent="createReview"
                                                        data-toggle="collapse"
                                                        href="#reviewBlock"
                                                        role="button"
                                                        class="btn btn-outline-secondary"
                                                    >Submit</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="row mb-4"
                                    v-for="review in post.reviews"
                                    :key="review._id"
                                >
                                    <div class="col-sm-3">
                                            <img
                                                src="http://dummyimage.com/60x60/666/ffffff&text=No+Image"
                                                class="rounded-circle ml-5"
                                            >
                                            <div class="review-block-name ml-5">
                                                <a href="#">estradus</a>
                                            </div>
                                            <div
                                                class="review-block-date ml-5"
                                            >{{new Date(review.dateCreated).toDateString()}}</div>
                                    </div>
                                    <div class="col-sm-9">
                                        <div class="review-block-rate">
                                            <fa-rating
                                                :glyph="star"
                                                :item-size="20"
                                                inactive-color="#cfcfcf"
                                                active-color="#000"
                                                v-model="review.rating"
                                                read-only
                                                :show-rating="false"
                                            ></fa-rating>
                                        </div>
                                        <div class="review-block-title">{{review.title}}</div>
                                        <div class="review-block-description">{{review.description}}</div>
                                    </div>
                                    <hr>
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
import PostService from '@/services/PostService'
import OrderService from '@/services/OrderService'
import ReviewService from '@/services/ReviewService'
import AuthenticationService from '@/services/AuthenticationService'
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
			postID: this.$route.params.id,
			star: '',
			user: {
				email: ''
			},
			post: {
				title: '',
				description: '',
				rating: 0,
				userID: null,
				fee: null,
				dateCreated: null,
				reviews: []
			},
			rating: 3,
			review: {
				title: '',
				userID: this.$store.state.user,
				postID: this.$route.params.id,
				description: '',
				rating: ''
			},
			offer: {
				workerID: '',
				customerID: this.$store.state.user,
				offer: '',
				description: '',
				postID: this.$route.params.id
			},
			reviews: []
		}
	},
	methods: {
		async logOut () {
			try {
				this.$store.dispatch('logOut', null)
				this.$router.replace({ name: 'login' })
			} catch (error) {}
		},
		async getPost () {
			try {
				const postDetails = await PostService.getById(this.postID)
				const userDetails = await AuthenticationService.getUser(
					postDetails.data.post.userID
				)
				this.post = postDetails.data.post
				this.user = userDetails.data.user
			} catch (error) {}
		},
		async makeOffer () {
			try {
				this.offer.workerID = this.post.userID
				await OrderService.create(this.offer)
			} catch (error) {
                console.log('hola hola hola hola hola')
			}
		},
		async createReview () {
			try {
				this.review.rating = this.rating
				this.review.dateCreated = Date.now()
				this.post.reviews.push(this.review)
				await ReviewService.create(this.review)
			} catch (error) {}
		}
	},
	mounted () {
		this.getPost()
	}
}
</script>

<style type="text/css">
/* Some basic formatting */
body {
  font-size: 0.875rem;
}

.carousel-item > img {
  min-height: 360px;
  max-height: 360px;
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

body {
  padding-top: 70px;
}
.btn-grey {
  background-color: #d8d8d8;
  color: #fff;
}
.rating-block {
  background-color: #fafafa;
  border: 1px solid #efefef;
  padding: 15px 15px 20px 15px;
  border-radius: 3px;
}
.bold {
  font-weight: 700;
}
.padding-bottom-7 {
  padding-bottom: 7px;
}

.review-block {
  background-color: #fafafa;
  border: 1px solid #efefef;
  padding: 15px;
  border-radius: 3px;
  margin-bottom: 15px;
}
.review-block-name {
  font-size: 12px;
  margin: 10px 0;
}
.review-block-date {
  font-size: 12px;
}
.review-block-rate {
  font-size: 13px;
  margin-bottom: 15px;
}
.review-block-title {
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 10px;
}
.review-block-description {
  font-size: 13px;
}

.gallery-wrap .img-big-wrap img {
  height: 450px;
  width: auto;
  display: inline-block;
  cursor: zoom-in;
}

.gallery-wrap .img-small-wrap .item-gallery {
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  margin: 7px 2px;
  display: inline-block;
  overflow: hidden;
}

.gallery-wrap .img-small-wrap {
  text-align: center;
}
.gallery-wrap .img-small-wrap img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 4px;
  cursor: zoom-in;
}
</style>