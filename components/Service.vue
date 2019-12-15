<template>
    <b-col md="6" lg="3" class="mb-lg-0 mb-4">
        <a href="" class="services-card d-block h-100 text-center">
            <img :src="imgUrl" alt="services icon" width="123" height="79">
            <h4>{{filteredTitle}}</h4>
            <p class="m-0 text-sm text-muted">{{filteredContent}}</p>
        </a>
    </b-col>
</template>

<script>
export default {
    props: ['img', 'content', 'title'],
    computed:{
        imgUrl() {
            return this.img || '../assets/img/s-icon-1.jpg';
        },
        filteredTitle() {
            return this.$getInnerHtml(this.title)
        },
        filteredContent() {
            return this.$removeHtmltags(this.content);
        }
    },
}
</script>