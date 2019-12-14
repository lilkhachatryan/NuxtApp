<template>
  <div class="homepage">
  <!-- Navbar -->
    <b-navbar toggleable="lg" type="light" variant="white">
      <b-navbar-brand href="#">
        <img src="../assets/img/logo.svg"  width="200" height="46" class="d-inline-block align-top" alt="Logo">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto mr-auto">
              <b-nav-item href="#">Compare Policies</b-nav-item>
              <b-nav-item-dropdown text="Health Funds" class="f-w-open" no-caret>
                  <b-dropdown-text>
                    <b-container>
                      <b-row class="justify-content-center mb-3">
                        <b-col lg="2" md="3">
                          <a href="" class="d-block dropdown-menu-list">
                            <h4 class="dropdown-menu-list__title">BURA</h4>
                            <p class="m-0 text-white">Bupa has existed for over 60 years and is one of Australia’s leading health fund...</p>
                          </a>
                        </b-col>
                        <b-col lg="2" md="3">
                          <a href="" class="d-block dropdown-menu-list">
                            <h4 class="dropdown-menu-list__title">NIB</h4>
                            <p class="m-0 text-white">Originally known as Newcastle Industrial Benefits (nib) Hospital Fund, nib was set...</p>
                          </a>
                        </b-col>
                        <b-col lg="2" md="3">
                          <a href="" class="d-block dropdown-menu-list">
                            <h4 class="dropdown-menu-list__title">AHM</h4>
                            <p class="m-0 text-white">AHM has been around for over 40 years, having started out as a small club in 1971</p>
                          </a>
                        </b-col>
                        <b-col lg="2" md="3">
                          <a href="" class="btn btn-success btn-default btn-block btn-r">Compare Policies</a>
                          <a href="" class="req-call-link"><fa :icon="fas.faPhoneAlt"/>  Request a call</a>
                        </b-col>
                      </b-row>
                      <b-row class="justify-content-center">
                        <b-col lg="2" md="3">
                          <a href="" class="d-block dropdown-menu-list">
                            <h4 class="dropdown-menu-list__title">HCF</h4>
                            <p class="m-0 text-white">Originally known as the Metropolitan Hospital Contributions Fund, HCF was set up i...</p>
                          </a>
                        </b-col>
                        <b-col lg="2" md="3">
                          <a href="" class="d-block dropdown-menu-list">
                            <h4 class="dropdown-menu-list__title">HBA</h4>
                            <p class="m-0 text-white">HBA is a private health insurance provider that is owned by Bupa Group Internation...</p>
                          </a>
                        </b-col>
                        <b-col lg="2" md="3">
                          <a href="" class="d-block dropdown-menu-list">
                            <h4 class="dropdown-menu-list__title">HBF</h4>
                            <p class="m-0 text-white">The Hospital Benefit Fund, or HBF, was established in 1941 as a not-for-profit org...</p>
                          </a>
                        </b-col>
                        <b-col lg="2" md="3" class="text-center">
                          <a href="" class="btn btn-default btn-outline-light mt-4">View All</a>
                        </b-col>
                      </b-row>
                    </b-container>
                  </b-dropdown-text>
              </b-nav-item-dropdown>
              <b-nav-item-dropdown text="Guides" class="f-w-open" no-caret>
                  <b-dropdown-text>
                    <b-container>
                      <b-row class="justify-content-center mb-3">
                        <b-col md="3">
                          <a href="" class="link-w-icon text-white text-sm"><fa :icon="fas.faHeart"/> By Relationship Status</a>
                          <a href="" class="link-w-icon text-white text-sm"><fa :icon="fas.faChessBishop"/> By State</a>
                          <a href="" class="link-w-icon text-white text-sm"><fa :icon="fas.faChartLine"/> Rate Rise Hub</a>
                        </b-col>
                        <b-col md="3">
                          <a href="" class="link-w-icon text-white text-sm"><fa :icon="fas.faListAlt"/> By Cover Type</a>
                          <a href="" class="link-w-icon text-white text-sm"><fa :icon="fas.faChild"/> For Children</a>
                        </b-col>
                        <b-col md="3">
                          <a href="" class="link-w-icon text-white text-sm"><fa :icon="fas.faUsers"/> By Life Stage</a>
                          <a href="" class="link-w-icon text-white text-sm"><fa :icon="fas.faBook"/> General Guides</a>
                        </b-col>
                        <b-col md="2" class="text-center">
                          <a href="" class="btn btn-success btn-default btn-block btn-r">Compare Policies</a>
                          <a href="" class="req-call-link"><fa :icon="fas.faPhoneAlt"/>  Request a call</a>
                          <a href="" class="btn btn-default btn-outline-light mt-4">See All</a>
                        </b-col>
                      </b-row>
                    </b-container>
                  </b-dropdown-text>
              </b-nav-item-dropdown>
              <b-nav-item-dropdown text="Calculators" class="f-w-open" no-caret>
                  <b-dropdown-text>
                    <b-container>
                      <b-row class="justify-content-center mb-3">
                        <b-col lg="3">
                          <a href="" class="link-w-icon text-white"><fa class="text-success text-sm" :icon="fas.faPlay"/> Waiting Period Calculator</a>
                          <a href="" class="link-w-icon text-white"><fa class="text-success text-sm" :icon="fas.faPlay"/> Medicare Levy Calculator</a>
                        </b-col>
                        <b-col lg="3">
                          <a href="" class="link-w-icon text-white"><fa class="text-success text-sm" :icon="fas.faPlay"/> Rebate Calculator</a>
                          <a href="" class="link-w-icon text-white"><fa class="text-success text-sm" :icon="fas.faPlay"/> Waiting List Calculator</a>
                        </b-col>
                        <b-col lg="3">
                          <a href="" class="link-w-icon text-white"><fa class="text-success text-sm" :icon="fas.faPlay"/> Policy Cost Calculator</a>
                          <a href="" class="link-w-icon text-white"><fa class="text-success text-sm" :icon="fas.faPlay"/> Premium Increase Calculator</a>
                        </b-col>
                        <b-col lg="3" class="text-center">
                          <a href="" class="btn btn-success btn-default btn-block btn-r">Compare Policies</a>
                          <a href="" class="req-call-link"><fa :icon="fas.faPhoneAlt"/>  Request a call</a>
                        </b-col>
                      </b-row>
                    </b-container>
                  </b-dropdown-text>
              </b-nav-item-dropdown>
              <b-nav-item-dropdown text="About Us" class="f-w-open" no-caret>
                  <b-dropdown-text>
                    <b-container>
                      <b-row class="justify-content-center mb-3">
                        <b-col lg="3">
                          <a href="" class="link-w-icon text-white"><fa class="text-success text-sm" :icon="fas.faPlay"/> What We Do</a>
                          <a href="" class="link-w-icon text-white"><fa class="text-success text-sm" :icon="fas.faPlay"/> How Our Service Works</a>
                          <a href="" class="link-w-icon text-white"><fa class="text-success text-sm" :icon="fas.faPlay"/> How We Make Money</a>
                        </b-col>
                        <b-col lg="3">
                          <a href="" class="link-w-icon text-white"><fa class="text-success text-sm" :icon="fas.faPlay"/> Meet The Team</a>
                          <a href="" class="link-w-icon text-white"><fa class="text-success text-sm" :icon="fas.faPlay"/> Concierge</a>
                          <a href="" class="link-w-icon text-white"><fa class="text-success text-sm" :icon="fas.faPlay"/> Customer Reviews</a>
                        </b-col>
                        <b-col lg="3">
                          <a href="" class="link-w-icon text-white"><fa class="text-success text-sm" :icon="fas.faPlay"/> Industry Newsroom</a>
                          <a href="" class="link-w-icon text-white"><fa class="text-success text-sm" :icon="fas.faPlay"/> Privacy Policy</a>
                          <a href="" class="link-w-icon text-white"><fa class="text-success text-sm" :icon="fas.faPlay"/> Contact Us</a>
                        </b-col>
                        <b-col lg="3" class="text-center">
                          <a href="" class="btn btn-success btn-default btn-block btn-r">Compare Policies</a>
                          <a href="" class="req-call-link"><fa :icon="fas.faPhoneAlt"/>  Request a call</a>
                        </b-col>
                      </b-row>
                    </b-container>
                  </b-dropdown-text>
              </b-nav-item-dropdown>
              <b-nav-item href="#">Health & Lifestyle</b-nav-item>

              <b-nav-form class="nav-search">
                <b-button :variant="isSearchActive ? 'success' : ''" class="text-sm" @click="isSearchActive = !isSearchActive">
                    <fa :icon="fas.faSearch"/>
                </b-button>
                <b-form-input v-model="text" :class="{'active': isSearchActive}" placeholder="Enter keyword..."></b-form-input>
              </b-nav-form>

              <b-nav-item href="tel:1300163402" class="nav-item--phone">
                <span class="fa-icon text-white text-sm bg-success d-inline-block">
                  <fa :icon="fas.faPhoneAlt"/>
                </span>
                 1300 163 402 <small>Mon-Fri 8am-8pm AEST <br> Sat 10am-5pm AEST</small>
              </b-nav-item>
          </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  <!-- Navbar End -->

    <header class="header">
        <b-container class="text-center">
          <h1 class="header__title">Compare health insurance quotes.</h1>
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

  <!-- Footer -->
    <footer class="footer">
      <section class="compare-banner">
        <b-container>
          <b-row class="row">
            <b-col md="12" class="d-flex flex-md-row flex-column justify-content-center align-items-center">
              <h5 class="text-white text-md-right text-center mt-0 mb-2 mr-3">Compare health insurance policies & save</h5>
              <a href="" class="btn btn-default btn-success">Compare now <fa :icon="fas.faArrowRight"/></a>
            </b-col>
          </b-row>
        </b-container>
      </section>
      <section class="section-sm bg-white">
        <b-container>
          <b-row>
            <b-col md="6" lg="3" class="footer__logo">
              <a href="">
                <img src="../assets/img/logo.svg"  width="180" height="41" class="d-inline-block align-top" alt="Logo">
              </a>
              <p class="text-sm mt-4">724-728 George St, Sydney <br> New South Wales 2000</p>
            </b-col>
            <b-col md="3" lg="2" class="col-6">
              <ul class="list-unstyled footer__list">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Health Funds</a></li>
                <li><a href="#">Guides</a></li>
                <li><a href="#">Tools & Calculators</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul> 
            </b-col>
            <b-col md="3" lg="2" class="col-6">
              <ul class="list-unstyled footer__list">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of use</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Complaints</a></li>
              </ul> 
            </b-col>
            <b-col md="6" lg="2">
              <a href="">
                <img class="d-block mb-md-0 mb-2" src="../assets/img/6b29f88.jpg"  width="135" alt="about banner">
              </a>
            </b-col>
            <b-col md="6" lg="3">
              <div class="footer__social d-flex">
                <a href="https://www.facebook.com/HealthInsuranceComparison"><fa :icon="fab.faFacebookF"/></a>
                <a href="https://www.instagram.com/healthinsurancecomparison/"><fa :icon="fab.faInstagram"/></a>
                <a href="https://twitter.com/HIC_AU"><fa :icon="fab.faTwitter"/></a>
                <a href="https://www.youtube.com/channel/UCyDFGpwMd-9gBlWjzuSJu5w"><fa :icon="fab.faYoutube"/></a>
              </div>
              <p class="footer__copyright">© Copyright Health Insurance Comparison 2019. <br> All right reserved.</p>
            </b-col>
          </b-row>
        </b-container>
      </section>
    </footer>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


export default {
  components: {
    Logo
  },
  data() {
    return {
      isSearchActive: false,
      compareSelect: 'a',
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
