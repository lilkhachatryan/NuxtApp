<template>
    <b-carousel-slide>
        <b-row class="justify-content-around flex-md-row flex-column-reverse">
            <b-col md="12">
            <img class="img w-100 d-block" :src="imgUrl" alt="" height="290">
            </b-col>
        </b-row>
    </b-carousel-slide>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    props: ['slide'],
    computed:{
        ...mapGetters({
            width: 'getWindowWidth',
        }),
        imgUrl() {
            return (this.width && this.width < 767) ? this.slide.mobile_image.url : this.slide.image.url;
        },
    },
}
</script>