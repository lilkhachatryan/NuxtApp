<template>
    <b-carousel-slide>
        <p class="m-0 pr-3">{{ filteredContent }}</p>
        <h4 class="person"><span v-html="author"></span></h4>
    </b-carousel-slide>
</template>
<script>
export default {
    props: ['content', 'author'],
    computed: {
        filteredContent() {
            return this.$removeHtmltags(this.content);
        }
    }
}
</script>