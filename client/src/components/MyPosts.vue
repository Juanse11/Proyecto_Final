<template>
    <div>

    </div>
</template>

<script>
import PostService from '@/services/PostService'
export default {
	data () {
		return {
			posts: []
		}
	},
	methods: {
		async getPosts () {
			try {
				const response = await PostService.get({ _id: this.$store.state.user._id })
				console.log(response)
				this.posts = response.data.posts
			} catch (error) {
				this.error = error.response.data.error
			}
		}
	},
	mounted () {
		this.getPosts()
	}
}
</script>

<style scoped>

</style>