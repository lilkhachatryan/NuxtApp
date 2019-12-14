<template>
  <div class="homepage">
    <client-only>

    <header class="header">
        <b-container class="text-center">
          <h1 class="header__title">{{title}}</h1>
          <b-row>
            <b-col md="12">
              <b-form class="row header__form">
                <b-col md="4" class="p-0">
                  <i class="fa-icon">
                    <fa :icon="fas.faChevronDown"/>
                  </i>
                  <b-form-select v-model="compareSelect" class="form-control">
                    <option value="a">Enter your Life Stage</option>
                    <option value="b">Single</option>
                    <option value="c">Couple</option>
                    <option value="d">Family</option>
                    <option value="e">Single Parent Family</option>
                  </b-form-select>
                </b-col>
                <b-col md="4" class="p-0">
                  <span class="tooltip-help" id="tooltip-help">
                    <fa :icon="fas.faQuestionCircle"/>
                  </span>                      
                  <b-tooltip target="tooltip-help" triggers="hover">
                    enter address in this format (e.g: Campbell, ACT, 2612)
                  </b-tooltip>
                  <b-form-input type="text" placeholder="Enter your postcode" class="form-control"></b-form-input>
                </b-col>
                <b-col md="4" class="p-0">
                  <b-button type="submit" variant="success">Compare Quotes <fa :icon="fas.faLongArrowAltRight"/></b-button>
                </b-col>
              </b-form>
            </b-col>
          </b-row>
        </b-container>
    </header><!-- Header End -->

    <section class="home-carousel-wrap bg-light">
      <b-container>
        <b-row>
          <b-col md="12">
            <b-carousel
              id="home-carousel"
              class="home-carousel"
              v-model="slide"
              :interval="5000"
              indicators
              fade
            >
              <b-carousel-slide>
                <b-row class="justify-content-around flex-md-row flex-column-reverse">
                  <b-col md="5">
                    <img class="img w-100 d-block" src="../assets/img/adbf96a.png" alt="" height="290">
                  </b-col>
                  <b-col md="7">
                    <div class="home-carousel__content">
                      <h2>Could you do better?</h2>
                      <p class="text-muted">If you haven't compared health insurance in the past year, you could be paying too much.</p>
                      <a href="" class="btn btn-default btn-lg btn-success">compare and switch <fa :icon="fas.faLongArrowAltRight"/></a>
                    </div>
                  </b-col>
                </b-row>
              </b-carousel-slide>
              <b-carousel-slide>
                <b-row class="justify-content-around flex-md-row flex-column-reverse">
                  <b-col md="5">
                    <img class="img w-100 d-block" src="../assets/img/fd04472.png" alt="" height="290">
                  </b-col>
                  <b-col md="7">
                    <div class="home-carousel__content">
                      <h2>7 Years Strong!</h2>
                      <p class="text-muted">Word of Mouth winner 7 years in a row for customer service. Read open and honest feedback from the people who know us best.</p>
                      <a href="" class="btn btn-default btn-lg btn-success">Customer Reviews <fa :icon="fas.faLongArrowAltRight"/></a>
                    </div>
                  </b-col>
                </b-row>
              </b-carousel-slide>
              <b-carousel-slide>
                <b-row class="justify-content-around flex-md-row flex-column-reverse">
                  <b-col md="5">
                    <img class="img w-100 d-block" src="../assets/img/268289b.png" alt="" height="290">
                  </b-col>
                  <b-col md="7">
                    <div class="home-carousel__content">
                      <h2>Rate Rise Hub</h2>
                      <p class="text-muted">If your premiums increased or your cover decreased, our 2019 Rate Rise hub was designed for you.</p>
                      <a href="" class="btn btn-default btn-lg btn-success">visit hub <fa :icon="fas.faLongArrowAltRight"/></a>
                    </div>
                  </b-col>
                </b-row>
              </b-carousel-slide>
            </b-carousel>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="section bg-white">
      <b-container>
        <div class="section-header text-center">
          <h2 class="title-color">How We Help You Compare Health Insurance</h2>
        </div>
        <b-row>
          <b-col md="6" lg="3" class="mb-lg-0 mb-4">
            <a href="" class="services-card d-block h-100 text-center">
              <img src="../assets/img/s-icon-1.jpg" alt="services icon" width="123" height="79">
              <h4>Enter A Few Details</h4>
              <p class="m-0 text-sm text-muted">We ask for a few details so we can better understand your individual needs. With this information, we can offer you the most suitable policies.</p>
            </a>
          </b-col>
          <b-col md="6" lg="3" class="mb-lg-0 mb-4">
            <a href="" class="services-card d-block h-100 text-center">
              <img src="../assets/img/s-icon-2.jpg" alt="services icon" width="123" height="79">
              <h4>Choose Cover Options</h4>
              <p class="m-0 text-sm text-muted">Let us know what type of cover you’re after, and we’ll search for policies tailored to those preferences.</p>
            </a>
          </b-col>
          <b-col md="6" lg="3" class="mb-md-0 mb-4">
            <a href="" class="services-card d-block h-100 text-center">
              <img src="../assets/img/s-icon-3.jpg" alt="services icon" width="123" height="79">
              <h4>Compare Policies</h4>
              <p class="m-0 text-sm text-muted">Review your health insurance comparison, or get more advice from our team over the phone.</p>
            </a>
          </b-col>
          <b-col md="6" lg="3">
            <a href="" class="services-card d-block h-100 text-center">
              <img src="../assets/img/s-icon-4.jpg" alt="services icon" width="123" height="79">
              <h4>Apply Online</h4>
              <p class="m-0 text-sm text-muted">When you’ve found the right policy, apply online in a secure environment or give us a call and we’ll set everything up for you.</p>
            </a>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="section bg-light">
      <b-container>
        <b-row>
          <b-col md="4" lg="3">
            <div class="rating-card h-100 d-flex flex-column justify-content-between">
              <h3 class="text-white m-0">OUR RATING</h3>
              <h2 class="text-white m-0">4.6 <small>/5</small></h2>
              <ul class="list-unstyled m-0 rating-stars">
                <li>
                  <i class="fa-icon">
                    <fa :icon="fas.faStar"/>
                  </i>
                </li>
                <li>
                  <i class="fa-icon">
                    <fa :icon="fas.faStar"/>
                  </i>
                </li>
                <li>
                  <i class="fa-icon">
                    <fa :icon="fas.faStar"/>
                  </i>
                </li>
                <li>
                  <i class="fa-icon">
                    <fa :icon="fas.faStar"/>
                  </i>
                </li>
                <li>
                  <i class="fa-icon">
                    <fa :icon="fas.faStar"/>
                  </i>
                </li>
              </ul>
            </div>
          </b-col>
          <b-col md="8" lg="9">
            <b-carousel
              id="h-testimonial"
              class="h-testimonial"
              v-model="slide"
              :interval="3000"
              indicators
            >
              <i class="fa-icon d-block mb-3 text-white">
                <fa :icon="fas.faQuoteLeft"/>
              </i>
              <b-carousel-slide>
                <p class="m-0 pr-3">My family have been loyal customers to our old health insurance and decided to give Health Insurance Comparison a go! We have now switched Health Insurance and made a saving of $1000.00 and a better cover. Have put my family and friends onto Health Insurance Comparison and they are loving the savings too!! Recommend anyone to give them ago!!</p>
                <h4 class="person"><span></span><p>Alan</p></h4>
              </b-carousel-slide>
              <b-carousel-slide>
                <p class="m-0 pr-3">My family have been loyal customers to our old health insurance and decided to give Health Insurance Comparison a go! We have now switched Health Insurance and made a saving of $1000.00 and a better cover. Have put my family and friends onto Health Insurance Comparison and they are loving the savings too!! Recommend anyone to give them ago!!</p>
                <h4 class="person"><span></span><p>Alan</p></h4>
              </b-carousel-slide>
              <b-carousel-slide>
                <p class="m-0 pr-3">My family have been loyal customers to our old health insurance and decided to give Health Insurance Comparison a go! We have now switched Health Insurance and made a saving of $1000.00 and a better cover. Have put my family and friends onto Health Insurance Comparison and they are loving the savings too!! Recommend anyone to give them ago!!</p>
                <h4 class="person"><span></span><p>Alan</p></h4>
              </b-carousel-slide>
            </b-carousel>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="section bg-white">
      <b-container>
        <b-row>
          <b-col md="6">
            <div class="desc-card d-flex flex-column h-100 bg-white text-center">
              <h2 class="title-color m-0">Compare Health Insurance Policies, Switch & Save</h2>
              <p class="text-muted mt-4 mb-3">Health Insurance is complicated! There are literally thousands of policies out there with all kinds of different coverage levels and features. We will help you filter out the policies that don’t meet your criteria and then compare the remaining policies from our panel of Australian health insurers side by side.</p>
              <a href="" class="btn btn-default btn-lg btn-success mt-auto">Compare Quotes <fa :icon="fas.faLongArrowAltRight"/></a>
            </div>
          </b-col>
          <b-col md="6">
            <div class="desc-card d-flex flex-column h-100 bg-white text-center border-0">
              <h2 class="title-color m-0">Avoid Paying Extra Taxes And Penalties</h2>
              <p class="text-muted mt-4 mb-3">If you earn over $90,000 per year and don’t have an eligible private health insurance policy the government may charge you additional taxes. In some cases paying for health cover will cost you less than the tax payable for not being covered.</p>
              <a href="" class="btn btn-default btn-lg btn-success mt-auto">Compare Quotes <fa :icon="fas.faLongArrowAltRight"/></a>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="section bg-light">
      <b-container>
        <b-row>
          <b-col sm="12" md="12" lg="6" class="mb-lg-0 mb-4">
            <div class="youtube-video">
              <iframe width="100%" height="270" src="https://www.youtube-nocookie.com/embed/0nB8TeWo3jg?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </b-col>
          <b-col sm="12" md="6" lg="3" class="mb-md-0 mb-4">
            <a href="#" class="post-card d-block">
              <div class="post-card__img" :style="{ backgroundImage: `url('/iphone-technology.jpg')` }" ></div>              
              <div class="post-card__cover"></div>
              <div class="post-card__content">
                <span>Guide</span>
                <p class="text-white m-0">Is Medicare Enough? Public vs. Private Health Care: Know Which is Right for You</p>
              </div>
            </a>
          </b-col>
          <b-col sm="12" md="6" lg="3">
            <a href="#" class="post-card d-block">
              <div class="post-card__img" :style="{ backgroundImage: `url('/accurate-alarm.jpg')` }" ></div>              
              <div class="post-card__cover"></div>
              <div class="post-card__content">
                <span>Guide</span>
                <p class="text-white m-0">Private Health Insurance: Can You Avoid the Waiting Period?</p>
              </div>
            </a>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="section bg-white">
      <b-container>
        <div class="section-header text-center">
          <h2 class="title-color">2019 health goals? We've got your back.</h2>
          <p class="text-muted">Browse our healthy food hacks, fitness tips, recipes and more.</p>
        </div>
        <b-row>
          <b-col md="4">
            <a href="" class="post-card post-card-lg d-block">
              <div class="post-card__img" :style="{ backgroundImage: `url('/photo-of-woman-wearing-round.jpg')` }" ></div>
              <div class="post-card__content">
                <h5 class="text-white text-sm">June 2019</h5>
                <div class="title-box">
                  <small class="font-weight-bold text-muted">Article</small>
                  <p class="text-muted text-sm mt-3">Need prescription glasses? The right health cover can help you save big on optical</p>
                </div>
              </div>
            </a>
          </b-col>
          <b-col md="4" class="d-md-block d-none">
            <a href="" class="post-card post-card-lg d-block">
              <div class="post-card__img" :style="{ backgroundImage: `url('/man-looking-at-postcards.jpg')` }" ></div>
              <div class="post-card__content">
                <h5 class="text-white text-sm">June 2019</h5>
                <div class="title-box">
                  <small class="font-weight-bold text-muted">Article</small>
                  <p class="text-muted text-sm mt-3">The Medicare Rebate Freeze: How To Avoid Increasing Out-Of-Pocket Fees</p>
                </div>
              </div>
            </a>
          </b-col>
          <b-col md="4" class="d-md-block d-none">
            <a href="" class="post-card post-card-lg d-block">
              <div class="post-card__img" :style="{ backgroundImage: `url('/adult-cutting-daylight-facial-expression.jpg')` }" ></div>
              <div class="post-card__content">
                <h5 class="text-white text-sm">June 2019</h5>
                <div class="title-box">
                  <small class="font-weight-bold text-muted">Health & Lifestyle</small>
                  <p class="text-muted text-sm mt-3">10 Signs something is wrong with your thyroid</p>
                </div>
              </div>
            </a>
          </b-col>
          <b-col md="12" class="text-center mt-5">
            <a href="#" class="btn btn-default btn-success btn-lg">View all <fa :icon="fas.faLongArrowAltRight"/></a>
          </b-col>  
        </b-row>
      </b-container>
    </section>
    <section class="section bg-light">
      <b-container>
        <div class="section-header text-center w-50 w-md-100 m-auto">
          <h2 class="title-color">A Few Things About Health Insurance</h2>
          <p class="text-muted">Whether you’re new to health insurance or reviewing your current policy, there are things you should keep in mind…</p>
        </div>
        <b-row>
          <b-col md="4" class="mb-4">
            <div class="benefits-tag text-center h-100">
              <img src="../assets/img/icon-check.png" alt="benefits icon" width="38" height="38"/>
              <h4 class="title-color">No ‘Lock-In’ Style Contracts</h4>
              <p class="text-muted m-0">Whether you pay for your policy weekly or annually, any unused premium is refundable.</p>
            </div>
          </b-col>
          <b-col md="4" class="mb-4">
            <div class="benefits-tag text-center h-100">
              <img src="../assets/img/icon-check.png" alt="benefits icon" width="38" height="38"/>
              <h4 class="title-color">Rebates Are Available</h4>
              <p class="text-muted m-0">Depending on your income, age and number of children, the Government may subsidise your policy by as much as 33.887%.</p>
            </div>
          </b-col>
          <b-col md="4" class="mb-4">
            <div class="benefits-tag text-center h-100">
              <img src="../assets/img/icon-check.png" alt="benefits icon" width="38" height="38"/>
              <h4 class="title-color">It Can Get More Expensive</h4>
              <p class="text-muted m-0">Are you over 30? If you haven’t had private health insurance before, the premiums you’ll pay increase by 2% a year.</p>
            </div>
          </b-col>
          <b-col md="4" class="mb-4">
            <div class="benefits-tag text-center h-100">
              <img src="../assets/img/icon-check.png" alt="benefits icon" width="38" height="38"/>
              <h4 class="title-color">30 Days Money Back</h4>
              <p class="text-muted m-0">All policies come with a no questions asked money back ‘cooling off’ period, provided you don’t make a claim.</p>
            </div>
          </b-col>
          <b-col md="4" class="mb-4">
            <div class="benefits-tag text-center h-100">
              <img src="../assets/img/icon-check.png" alt="benefits icon" width="38" height="38"/>
              <h4 class="title-color">Cover The Gaps</h4>
              <p class="text-muted m-0">Certain services are not covered my Medicare, such as Dental, Optical, Psychological Services and Non PBS Pharmaceuticals.</p>
            </div>
          </b-col>
          <b-col md="4" class="mb-md-4 mb-0">
            <div class="benefits-tag text-center h-100">
              <img src="../assets/img/icon-check.png" alt="benefits icon" width="38" height="38"/>
              <h4 class="title-color">There Are Tax Benefits</h4>
              <p class="text-muted m-0">If you earn above a certain threshold without holding a private health insurance policy, you will be charged up to 1.5% extra in taxes.</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    </client-only>
  </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios'


export default {
  async asyncData ({ params }) {
    let { data } = await axios.get(`https://healthinsurancecomparison.com.au/wp-json/wp/v2/pages/?slug=home-old&_embed`);
    return { data: data[0].acf.homepage_sections }
  },
  components: {
  },
  data: () => {
    return {
      isSearchActive: false,
      compareSelect: 'a',
      text: '',
      slide: 1
    }
  },
  computed: {
    fas () {
        return fas
    },
    fab () {
        return fab
    },
    title() {
      return this.removeTags(this.data[0].title);
    }
  },
  created() {
    console.log('data', this.data)
  },
  methods: {
    removeTags(str) {
      if ((str===null) || (str===''))
      return false;
      else
      str = str.toString();
      return str.replace( /(<([^>]+)>)/ig, '');
   }
  }
}
</script>

<style lang="scss">
  
</style>
