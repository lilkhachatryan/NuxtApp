<template>
    <div class="about-us">
        <div class="top-space">

        </div>
        <b-container>
            <div class="article-content bg-white">
                <b-row>
                    <b-col lg="8" class="blog-box article-content-wrapper">
                        <div class="article-title">
                            <h2 class="inner-main-title title-color">Search Results for: phone</h2>
                            <div class="divide"></div>
                        </div>

                        <article class="blog-post">
                            <h2 class="blog-post__title">This ten-minute phone call could save you hundreds</h2>
                            <div class="blog-post__date">
                                <i class="icon-fa text-success text-sm"><fa :icon="fas.faCalendarAlt"/></i>
                                <span class="main-blog-post-date">Friday, October 25, 2019</span>
                            </div>
                            <img class="img img-fluid mb-5" src="~/assets/img/adult-cutting-daylight-facial-expression.jpg" alt="blog post image">
                            <p class="main-blog-excerpt mb-4">Rude call centre staff. Irritatingly chipper elevator music. You’ve been put on hold three times in the past half hour,......</p>
                            <div class="text-right">
                                <a href="" class="btn btn-default btn-r btn-success btn-w-shadow">Read More <fa :icon="fas.faArrowRight"/></a>
                            </div>
                        </article>

                          <div class="overflow-auto">
                            <b-pagination
                                v-model="currentPage"
                                :total-rows="rows"
                                :per-page="perPage"
                                aria-controls="my-table"
                                :hide-goto-end-buttons="true">

                                <template v-slot:prev-text><span class="text-danger">Prev</span></template>
                                <template v-slot:next-text><span class="text-warning">Next</span></template>
                                <template v-slot:ellipsis-text>...</template>
                            </b-pagination>
                        </div>
                    </b-col>

                    <b-col lg="4" class="category-wrapper">
                        <b-form class="search-box">
                            <h4 class="text-white text-uppercase mt-0">Search</h4>
                            <b-input-group>
                                <b-form-input v-model="text" placeholder="Enter keyword..."></b-form-input>
                                <b-input-group-append>
                                    <b-button variant="success" class="text-sm">
                                        <fa :icon="fas.faSearch"/>
                                    </b-button>
                                </b-input-group-append>
                            </b-input-group>
                        </b-form>

                        <b-form class="compare-s-box">
                            <h4 class="text-white mt-0">Compare health insurance quotes.</h4>
                            <b-input-group>
                                <template v-slot:prepend>
                                    <b-input-group-text><fa :icon="fas.faUser"/></b-input-group-text>
                                </template>
                                <b-form-select v-model="categorySelect">
                                    <option value="default">Life Stage...</option>
                                    <option value="a">Single</option>
                                    <option value="b">Couple</option>
                                    <option value="c">Family</option>
                                    <option value="d">Single Parent Family</option>
                                    <option value="e">Family + Young Aduls</option>
                                </b-form-select>
                                <i class="fa-icon text-sm">
                                    <fa :icon="fas.faChevronDown"/>
                                </i>
                            </b-input-group>
                            <b-input-group>
                                <template v-slot:prepend>
                                    <b-input-group-text><fa :icon="fas.faMapMarker"/></b-input-group-text>
                                </template>
                                <b-form-input v-model="text" placeholder="Enter Suburb or Postcode"></b-form-input>
                            </b-input-group>
                            <b-input-group>
                                <b-button variant="success" class="btn-default btn-block btn-r text-capitalize">Start Search</b-button>
                            </b-input-group>
                            <div class="compare-phone text-center">
                                <span class="d-block text-sm text-white">Prefer to talk? Call us at:</span>
                                <a class="text-white d-block" href="tel:1300 163 402"><i class="icon-fa d-inline-block bg-white"><fa :icon="fas.faPhoneAlt"/></i>1300 163 402</a>
                            </div>
                        </b-form>

                        <h3 class="blog-category-heading text-uppercase title-color">Popular posts</h3>
                        <hr>
                        <div class="popular-post">
                            <div class="media d-flex align-items-center">
                                <div class="media__image">
                                    <img src="~/assets/img/user.png" alt="media image" width="50" height="50">
                                </div>
                                <div class="media__content">
                                    <small class="text-success">Tuesday, December 3, 2019</small>
                                    <h5 class="text-sm m-0">What to buy a health nut for Christmas in 2019</h5>
                                </div>
                            </div>
                            <div class="media d-flex align-items-center">
                                <div class="media__image">
                                    <img src="~/assets/img/user.png" alt="media image" width="50" height="50">
                                </div>
                                <div class="media__content">
                                    <small class="text-success">Tuesday, December 3, 2019</small>
                                    <h5 class="text-sm m-0">What to buy a health nut for Christmas in 2019</h5>
                                </div>
                            </div>
                            <div class="media d-flex align-items-center">
                                <div class="media__image">
                                    <img src="~/assets/img/user.png" alt="media image" width="50" height="50">
                                </div>
                                <div class="media__content">
                                    <small class="text-success">Tuesday, December 3, 2019</small>
                                    <h5 class="text-sm m-0">What to buy a health nut for Christmas in 2019</h5>
                                </div>
                            </div>
                        </div>

                    </b-col>

                </b-row>
            </div>
        </b-container>
    </div>

</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


export default {
    components: {
    },
    data() {
        return {
            categorySelect: 'default',
            text: '',
            perPage: 2,
                currentPage: 1,
                items: [
                { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
                { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
                { id: 3, first_name: 'Barney', last_name: 'Rubble' },
                { id: 4, first_name: 'Betty', last_name: 'Rubble' },
                { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
                { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
                { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
                { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
                { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' },
                { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
                { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
                { id: 3, first_name: 'Barney', last_name: 'Rubble' },
                { id: 4, first_name: 'Betty', last_name: 'Rubble' },
                { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
                { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
                { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
                { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
                { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
                ]
        }
    },
    computed: {
        fas () {
            return fas
        },
        fab () {
            return fab
        },
        rows() {
            return this.items.length
        }
    },
}
</script>

<style lang="scss">

</style>
