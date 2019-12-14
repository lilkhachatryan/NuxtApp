<template>
    <div class="about-us">
        <div class="top-space">

        </div>
        <b-container>
            <div class="article-content bg-white">
                <b-row>
                    <b-col lg="8" class="blog-box">
                        <div class="mb-5">
                            <div class="article-title">
                                <h2 class="title-color">About</h2>
                                <div class="divide"></div>
                            </div>
                            <p>Health Insurance Comparison gives you the low down on all things relevant to Australian Health Insurance. Whether you’re just trying to get an idea of the market in general or you have a specific policy in mind, we’ll help you find what you’re looking for from our panel of Australian funds. Our goal is to provide you with the tools and knowledge you’ll need to thoroughly and decisively compare health insurance policies, whilst also giving you a rundown of other important stuff like medicare, premiums, hospital and extra cover, and much more!</p>
                            <p>Have a good look around our site and check out what’s on offer – your wallet will thank you!</p>
                        </div>
                        <div class="mb-5">
                            <div class="article-title">
                                <h2 class="title-color">Contact</h2>
                                <p>t’s our pleasure to hear your feedback to constantly improve our service.</p>
                            </div>
                            <h4 class="mt-0">General Queries and Feedback</h4>
                            <p>For anything related to general feedback regarding our service or other feedback you may wish to send to us, please email us at: <a href="mailto:info@healthinsurancecomparison.com.au">info@healthinsurancecomparison.com.au</a> and we will endeavour to respond to you as soon as possible.</p>
                            <h4>PR/Marketing Enquiries</h4>
                            <p>If you are interested in contacting us regarding any PR related matters, written articles or other marketing initiatives. Please contact us at: <a href="mailto:info@healthinsurancecomparison.com.au">info@healthinsurancecomparison.com.au</a> or give us a ring on (02) 9291 9700 – Mon-Fri 8am to 8pm AEST.</p>
                            <h4>Write to us</h4>
                            <p>If you would prefer to send a written letter to us encompassing your enquiry and/or feedback please send your letter to the address below and we will do our best to respond to you as soon as we receive it.</p>
                            <p>
                                HealthInsuranceComparison.com.au
                                <br>
                                724-728 George St
                                <br>
                                Haymarket
                                <br>
                                NSW 2000 Australia
                            </p>
                            <h4>PHIIA compliant</h4>
                            <p>We are proudly a signatory to the <a href="http://phiia.com.au/" target="_blank">Private Health Insurance Intermediaries Association (PHIIA)</a> Code of Conduct 2015. This means that we have recently had our processes and procedures reviewed and are fully compliant with the code.</p>
                            <p>This certification confirms our commitment to quality and transparency for our customers, staff and industry.</p>
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
        }
  },
    computed: {
    fas () {
        return fas
    },
    fab () {
        return fab
    },
    },
}
</script>

<style lang="scss">

</style>
