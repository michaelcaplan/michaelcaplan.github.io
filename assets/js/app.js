import {Client, Databases, ID} from "appwrite";

const appwrite = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("67acf9ba0003eef19598");

export default {
    data() {
        return {
            drawer: false,
            dialShare: false,
            donors: [],
        }
    },

    async created() {

        appwrite.subscribe(
            'databases.67acfa8f001b82489d37.collections.67acfaaf000e9833c9e6.documents',
            response => {
                this.donors.push(response.payload);
            }
        );

        const databases = new Databases(appwrite);

        let data = await databases.listDocuments(
            "67acfa8f001b82489d37",
            "67acfaaf000e9833c9e6"
        );

        this.donors = data.documents;
    },

    template: `
<v-app>
    <v-main>
        <v-app-bar>
            <template #title>
                <div class="d-inline-flex align-center text-h4 font-weight-bold my-5 text-primary">
                    <v-img src="/assets/images/50-icon.svg" width="2.125rem" class="mr-4" alt="50" />
                    Skateboards
                </div>
            </template>
        
            <template v-if="$vuetify.display.mdAndUp" #append>
                <div class="hidden-sm-and-down">
                    <v-btn
                      class="text-body-1 blue-grey-darken-4"
                      href="#about"
                      variant="text"
                    >
                        About
                    </v-btn>
                    
                    <v-btn
                      class="text-body-1 blue-grey-darken-4"
                      href="#organizations"
                      variant="text"
                    >
                        Organizations
                    </v-btn>
                    
                    <v-btn
                      class="text-body-1 blue-grey-darken-4"
                      href="#village"
                      variant="text"
                    >
                        Village
                    </v-btn>
                    
                    <v-btn
                      class="text-body-1 blue-grey-darken-4"
                      href="#donate"
                      variant="text"
                    >
                        Donate
                    </v-btn>
                </div>
            </template>
            
            <template v-slot:append>
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            </template>
        </v-app-bar>
        
        <v-navigation-drawer
            v-model="drawer"
            location="right"
            temporary
        >
            <v-list>
                <v-list-item>
                    <v-btn
                      class="text-body-1 blue-grey-darken-4"
                      href="#about"
                      variant="text"
                    >
                        About
                    </v-btn>
                </v-list-item>        
                <v-list-item>
                    <v-btn
                      class="text-body-1 blue-grey-darken-4"
                      href="#organizations"
                      variant="text"
                    >
                        Organizations
                    </v-btn>
                </v-list-item>        
                <v-list-item>
                    <v-btn
                      class="text-body-1 blue-grey-darken-4"
                      href="#village"
                      variant="text"
                    >
                        Village
                    </v-btn>
                </v-list-item> 
                <v-list-item>
                    <v-btn
                      class="text-body-1 blue-grey-darken-4"
                      href="#donate"
                      variant="text"
                    >
                        Donate
                    </v-btn>
                </v-list-item>       
            </v-list>
      </v-navigation-drawer>
          
        <v-sheet
            id="home"
            class="d-flex justify-center align-center text-center flex-column pb-4"
            color="primary"
            min-height="600"
        >
        
            <img src="/assets/images/50-header.svg" 
                style="max-width: 800px" 
                alt="50/50: Skateboarding For The Youth" 
                width="100%" />
        
            <h1 class="text-h4 text-sm-h2 text-md-h2 text-lg-h2 text-xl-h2">
                <span class="text-h6 text-sm-h4 text-md-h4 text-lg-h4 text-xl-h4">50/50</span><br>
                Skateboarding For The Youth
            </h1>
        
        
            <div class="text-subtitle-1 ma-5 text-lg-h6 text-md-h6 text-xl-h6" style="max-width: 468px;">
                <em>Our goal is simple:</em> offer free skateboarding 🛹 programming to youth 🧑‍🤝‍🧑 facing adversities in Kings County.  Giving them a push in the right direction 💪.
            </div>
        
            <div class="d-flex ga-5 flex-1-1-auto flex-wrap justify-center px-4">
                <stripe-buy-button
                    buy-button-id="buy_btn_1Qrj9NFSy4s51StpTW5GBs5j"
                    publishable-key="pk_test_51QrIh0FSy4s51StpeTydo1LoHGB19jHUUGZuiYOjHsp15TAKoWony99B2H8MODUJcpkT0DgRMMPn34GnG6J3IAlc00vIkX2am6"
                ></stripe-buy-button>
            </div>
        </v-sheet>
          
        <v-sheet id="about" class="py-16 text-center">
            <div class="text-h4 font-weight-bold">
                About 50/50
            </div>
            
            <v-container>
                <v-row>
                    <v-col
                        class="d-flex flex-column align-center"
                        cols="12"
                        lg="6"
                        md="6"
                    >
                        <v-icon 
                            color="secondary" 
                            icon="mdi-calendar-arrow-right"
                            size="x-large"></v-icon>
                    
                        <div class="text-h6 mt-1">
                            2025 Goal
                        </div>
                    
                        <div class="text-body-1 mt-2 text-medium-emphasis w-75">
                            <a href="https://www.instagram.com/ktown_skatehers/" target="_blank">KTown SkateHers+</a>, 
                            a project supported by <a href="https://kentville.ca/parks-and-recreation" target="_blank">Kentville Recreation</a>
                            and <a href="https://igotskate.com/" target="_blank">IGotSkate</a>, 
                            are embarking on an ambitious initiative leading into the 2025 skateboarding season:  <br>
                            Get skateboarding into the hands of more <strong>youth facing adversities</strong>.
                        </div>
                    </v-col>
                    
                    <v-col
                        class="d-flex flex-column align-center"
                        cols="12"
                        lg="6"
                        md="6"
                    >
                        <v-icon 
                            color="secondary" 
                            icon="mdi-skateboarding"
                            size="x-large"></v-icon>
                    
                        <div class="text-h6 mt-1">
                            What We Do
                        </div>
                    
                        <div class="text-body-1 mt-2 text-medium-emphasis w-75">
                            Kentville offers one of the best skateparks in Nova Scotia.
                            Capitalizing on this, for the past two years, SkateHers+ has offered <strong>free to access skate programming</strong> to help build a more 
                            diverse and inclusive skateboarding scene here in Kentville and the Annapolis Valley.
                        </div>
                    </v-col>
                    
                </v-row>
                
                <v-row>
                    
                    <v-col
                        class="d-flex flex-column align-center"
                        cols="12"
                        lg="6"
                        md="6"
                    >
                        <v-icon 
                            color="secondary" 
                            icon="mdi-lifebuoy"
                            size="x-large"></v-icon>
                    
                        <div class="text-h6 mt-1">
                            Supporting Frontline Youth Workers
                        </div>
                    
                        <div class="text-body-1 mt-2 text-medium-emphasis w-75">
                            As a continuation this activity we are making big moves to <strong>support the important work of community 
                            organizations</strong> who play a big role advocating for our local youth in need.
                        </div>
                    </v-col>
                    
                    <v-col
                        class="d-flex flex-column align-center"
                        cols="12"
                        lg="6"
                        md="6"
                    >
                        <v-icon 
                            color="secondary" 
                            icon="mdi-bomb"
                            size="x-large"></v-icon>
                    
                        <div class="text-h6 mt-1">
                            Blasting Barriers
                        </div>
                    
                        <div class="text-body-1 mt-2 text-medium-emphasis w-75">
                            The youth that we are targeting with this project cannot necessarily afford to outfit themselves with gear.
                            We want to <strong>blast this barrier away</strong> by raising enough cash to give away 50 skateboards as part of our learn to skate programming.
                        </div>
                    </v-col>
                </v-row>
                
                
                <v-row>
                    
                    <v-col
                        class="d-flex flex-column align-center"
                        cols="12"
                        lg="6"
                        md="6"
                    >
                        <v-icon 
                            color="secondary" 
                            icon="mdi-skateboard"
                            size="x-large"></v-icon>
                    
                        <div class="text-h6 mt-1">
                            Why Skateboarding?
                        </div>
                    
                        <div class="text-body-1 mt-2 text-medium-emphasis w-75">
                            Because that is what we love.  As skaters, we see skateboarding as a creative activity that teaches resiliency, pride in self, 
                            helps fight isolation and build community, while promoting stress busting exercise. Skateboarding 
                            can be an important anchor for youth who need a solid base to stand from as they tackle life’s challenges.  
                            <strong>Skating is self-directed creative physical play.</strong>

                            You don’t have to be a skater to appreciate these values. 
                        </div>
                    </v-col>
                    
                    <v-col
                        class="d-flex flex-column align-center"
                        cols="12"
                        lg="6"
                        md="6"
                    >
                        <v-icon 
                            color="secondary" 
                            icon="mdi-flash"
                            size="x-large"></v-icon>
                    
                        <div class="text-h6 mt-1">
                            50 Skateboards for 50 participants
                        </div>
                    
                        <div class="text-body-1 mt-2 text-medium-emphasis w-75">
                           
                           Our goal is to raise $5K to so we can donate the following package to 50 youth (10 per partner organization):

                            <v-list>
                                <v-list-item>⭐ 2 intro skateboarding lessons</v-list-item>
                                <v-list-item>⭐ Free skateboard.  This is the exclusive cost we are fundraising for - $100 for 1 skateboard provided by our pals at IGotSkate.</v-list-item>
                                <v-list-item>⭐ Protective gear rental (free - thanks Town of Kentville!)</v-list-item>
                                <v-list-item>⭐ An open invite to join us for our regular skate meetups!</v-list-item>
                            </v-list>
                            
                            Stretch goal is $10K so we can also include free pads to give to the 50 new skaters.
                           
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>
        
        <v-parallax src="/assets/images/skatehers.webp"></v-parallax>
          
        <v-sheet
            id="organizations"
            class="py-16 text-center"
            color="secondary"
        >
            <div class="text-h4 font-weight-bold">
                Organizations We Are Supporting with 50/50
            </div>
        
            <div class="text-body-1 font-weight-regular ma-3 text-medium-emphasis mb-12">
                These organizations do great things supporting youth who face a wide range of challenges.  
                Each group will get 10 skate packages for 10 of their constituents.
            </div>
            
            <v-container>
                <v-row>
                    <v-col cols="12" sm="6" md="4" lg="4" xl="4">
                        <v-card 
                            title="YREACH"
                            variant="outlined"
                        >
                            <v-card-text>
                                <strong>YREACH</strong> in Kentville provides settlement, employment and language support to Immigrants and Refugees and their families who are new to our community.
                            </v-card-text>
                            <v-card-actions>
                                <v-btn
                                    href="https://ymcahfx.ca/yreach/"
                                    target="_blank"
                                    variant="tonal"
                                    block
                                >
                                    <v-icon class="pr-4" icon="mdi-go-kart"></v-icon>
                                    Visit Them
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    
                    <v-col cols="12" sm="6" md="4" lg="4" xl="4">
                        <v-card 
                            title="The Portal"
                            variant="outlined"
                        >
                            <v-card-text>
                                <strong>The Portal</strong> is a resource centre for Annapolis Valley youth aged 16-24 who are at risk with a special focus on those currently experiencing homelessness.
                            </v-card-text>
                            <v-card-actions>
                                <v-btn
                                    href="https://ymcahfx.ca/yreach/"
                                    target="_blank"
                                    variant="tonal"
                                    block
                                >
                                    <v-icon class="pr-4" icon="mdi-google-downasaur"></v-icon>
                                    Check Them Out
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    
                    <v-col cols="12" sm="6" md="4" lg="4" xl="4">
                        <v-card 
                            title="Chrysalis House"
                            variant="outlined"
                        >
                            <v-card-text>
                                <strong>Chrysalis House</strong> provides crisis, shelter, support, outreach, advocacy and transitional services for women and their children who have experienced or are at risk of experiencing violence and abuse.
                            </v-card-text>
                            <v-card-actions>
                                <v-btn
                                    href="https://www.chrysalishouseassociation.org/"
                                    target="_blank"
                                    variant="tonal"
                                    block
                                >
                                    <v-icon class="pr-4" icon="mdi-rv-truck"></v-icon>
                                    Go Say Hi
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    
                    <v-col cols="12" sm="6" md="4" lg="4" xl="4">
                        <v-card 
                            title="KCFRC"
                            variant="outlined"
                        >
                            <v-card-text>
                                <strong>Kings County Family Resource Centre</strong> offers free programs, services, resources and support for families to reach their full potential.
                            </v-card-text>
                            <v-card-actions>
                                <v-btn
                                    href="https://kcfrc.ca/"
                                    target="_blank"
                                    variant="tonal"
                                    block
                                >
                                    <v-icon class="pr-4" icon="mdi-bicycle-cargo"></v-icon>
                                    Teleport To Them
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    
                    <v-col cols="12" sm="6" md="4" lg="4" xl="4">
                        <v-card 
                            title="BBBS"
                            variant="outlined"
                        >
                            <v-card-text>
                                <strong>Big Brothers Big Sisters of the Annapolis Valley</strong> provides life changing mentoring experiences for young people facing adversities.
                            </v-card-text>
                            <v-card-actions>
                                <v-btn
                                    href="https://annapolisvalley.bigbrothersbigsisters.ca/"
                                    target="_blank"
                                    variant="tonal"
                                    block
                                >
                                    <v-icon class="pr-4" icon="mdi-bicycle"></v-icon>
                                    Head On Over
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>
        
        <v-parallax src="/assets/images/skateher2.webp"></v-parallax>
          
        <v-sheet class="py-16" id="village">
            <v-container>
              <v-row>
                <v-col cols="12" md="5">
                  <v-img src="/assets/discover_bg.png" /></v-col>
        
                <v-col
                  cols="12"
                  md="7"
                >
                  <div class="text-h4">
                    It Takes A Village
                  </div>
        
                  <div class="text-body-1 text-medium-emphasis my-5">
                    Venis demo enim ipsam voluptatem quia voluptas sit aspernatur netsum
                    lorem fugit, seditum netis velas matrix net nesciunt
                  </div>
        
                  <v-btn
                    color="primary"
                    flat
                    height="55"
                    rounded
                    text="Discover More"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-sheet>
         
        <v-parallax src="/assets/images/skateher1.webp"></v-parallax>
          
        <v-sheet class="py-16 text-center" id="donate">
            
            <div class="text-h4 font-weight-bold">
                <v-icon class="pr-4" icon="mdi-gift-outline"></v-icon>
                Donate
            </div>
            
            <v-container>
                <v-row>
                    <v-col cols="12" sm="6" md="6" lg="6" xl="6">
                        <stripe-buy-button
                            buy-button-id="buy_btn_1QtdQgFSy4s51StpVteLHdqS"
                            publishable-key="pk_test_51QrIh0FSy4s51StpeTydo1LoHGB19jHUUGZuiYOjHsp15TAKoWony99B2H8MODUJcpkT0DgRMMPn34GnG6J3IAlc00vIkX2am6"
                        ></stripe-buy-button>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" lg="6" xl="6">
                        <stripe-buy-button
                          buy-button-id="buy_btn_1Qrj9NFSy4s51StpTW5GBs5j"
                          publishable-key="pk_test_51QrIh0FSy4s51StpeTydo1LoHGB19jHUUGZuiYOjHsp15TAKoWony99B2H8MODUJcpkT0DgRMMPn34GnG6J3IAlc00vIkX2am6"
                        >
                        </stripe-buy-button>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" lg="6" xl="6">
                        <stripe-buy-button
                            buy-button-id="buy_btn_1QvMzyFSy4s51StprjYn1h3K"
                            publishable-key="pk_test_51QrIh0FSy4s51StpeTydo1LoHGB19jHUUGZuiYOjHsp15TAKoWony99B2H8MODUJcpkT0DgRMMPn34GnG6J3IAlc00vIkX2am6"
                        >
                        </stripe-buy-button>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" lg="6" xl="6">
                         <stripe-buy-button
                            buy-button-id="buy_btn_1QvNaoFSy4s51Stp7iSy6ELs"
                            publishable-key="pk_test_51QrIh0FSy4s51StpeTydo1LoHGB19jHUUGZuiYOjHsp15TAKoWony99B2H8MODUJcpkT0DgRMMPn34GnG6J3IAlc00vIkX2am6"
                        >
                        </stripe-buy-button>
                    </v-col>
                </v-row>
            </v-container>
        
        </v-sheet>
    </v-main>
      
    <v-bottom-navigation density="compact">
        <v-progress-linear
            model-value="10"
            color="primary"
            height="25"
            class="ma-2"
            striped
        >
            <strong>$500 / $5000</strong>
        </v-progress-linear>
  </v-bottom-navigation>
  
    <v-fab
        size="large"
        :app="true"
        :absolute="false"
        :color="dialShare ? '' : 'primary'"
        location="right bottom"
        icon
    >
        <v-icon>{{ dialShare ? 'mdi-close' : 'mdi-share-variant' }}</v-icon>
        
        <v-speed-dial v-model="dialShare" location="top center" transition="fade-transition" activator="parent">
            
            <v-btn 
                color="secondary"
                rounded="pill"
                variant="flat"
                target="_blank"
                icon 
                key="3"
                href="https://api.whatsapp.com/send?text=Hey%20friends.%20Super%20great%20project%20offering%20free%20skateboarding%20programming%20to%20youth%20facing%20adversities%20in%20our%20community%20looking%20for%20some%20help%20to%20get%20off%20the%20ground.%20Can%20you%20pitch%20in%3F%20%0A%0Ahttps%3A%2F%2F50.michaelcaplan.com"
            >
                <v-icon>mdi-whatsapp</v-icon>
            </v-btn>
            
            <v-btn 
                color="secondary"
                rounded="pill"
                variant="flat"
                target="_blank"
                icon
                key="4" 
                href="mailto:?subject=Free%20skateboarding%20programming%20to%20youth%20facing%20adversities%20in%20our%20community&body=Hey%20friends.%20Super%20great%20project%20offering%20free%20skateboarding%20programming%20to%20youth%20facing%20adversities%20in%20our%20community%20looking%20for%20some%20help%20to%20get%20off%20the%20ground.%20Can%20you%20pitch%20in%3F%20%0A%0Ahttps%3A%2F%2F50.michaelcaplan.com"
            >
                <v-icon>mdi-email</v-icon>
            </v-btn>
            
            <v-btn 
                color="secondary"
                rounded="pill"
                variant="flat"
                target="_blank"
                icon
                key="5" 
                href="https://www.reddit.com/submit?url=https%3A%2F%2F50.michaelcaplan.com&title=Free%20skateboarding%20programming%20to%20youth%20facing%20adversities%20in%20our%20community."
            >
                <v-icon>mdi-reddit</v-icon>
            </v-btn>
            
            <v-btn 
                color="secondary"
                rounded="pill"
                variant="flat"
                target="_blank"
                icon 
                key="6"
                href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2F50.michaelcaplan.com"
            >
                <v-icon>mdi-linkedin</v-icon>
            </v-btn>
            
            <v-btn 
                color="secondary"
                rounded="pill"
                variant="flat"
                target="_blank"
                icon 
                key="7"
                href="https://bsky.app/intent/compose?text=Hey%20friends.%20Super%20great%20project%20offering%20free%20skateboarding%20programming%20to%20youth%20facing%20adversities%20in%20our%20community%20looking%20for%20some%20help%20to%20get%20off%20the%20ground.%20Can%20you%20pitch%20in%3F%20%0A%0Ahttps%3A%2F%2F50.michaelcaplan.com"
            >
                <v-icon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#ffffff" d="M111.8 62.2C170.2 105.9 233 194.7 256 242.4c23-47.6 85.8-136.4 144.2-180.2c42.1-31.6 110.3-56 110.3 21.8c0 15.5-8.9 130.5-14.1 149.2C478.2 298 412 314.6 353.1 304.5c102.9 17.5 129.1 75.5 72.5 133.5c-107.4 110.2-154.3-27.6-166.3-62.9l0 0c-1.7-4.9-2.6-7.8-3.3-7.8s-1.6 3-3.3 7.8l0 0c-12 35.3-59 173.1-166.3 62.9c-56.5-58-30.4-116 72.5-133.5C100 314.6 33.8 298 15.7 233.1C10.4 214.4 1.5 99.4 1.5 83.9c0-77.8 68.2-53.4 110.3-21.8z"/></svg>
                </v-icon>
            </v-btn>
            
            <v-btn 
                color="secondary"
                rounded="pill"
                variant="flat"
                target="_blank"
                icon 
                key="8"
                href="https://threads.net/intent/post?text=Hey%20friends.%20Super%20great%20project%20offering%20free%20skateboarding%20programming%20to%20youth%20facing%20adversities%20in%20our%20community%20looking%20for%20some%20help%20to%20get%20off%20the%20ground.%20Can%20you%20pitch%20in%3F%20%0A%0Ahttps%3A%2F%2F50.michaelcaplan.com"
            >
                <v-icon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#ffffff" d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z"/></svg>    
                </v-icon>
            </v-btn>
            
            <v-btn 
                color="secondary"
                rounded="pill"
                variant="flat"
                target="_blank"
                icon 
                key="2"
                href="https://twitter.com/intent/tweet?url=https%3A%2F%2F50.michaelcaplan.com&text=Hey%20friends.%20Super%20great%20project%20offering%20free%20skateboarding%20programming%20to%20youth%20facing%20adversities%20in%20our%20community%20looking%20for%20some%20help%20to%20get%20off%20the%20ground.%20Can%20you%20pitch%20in%3F"
            >
                <v-icon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#ffffff" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                </v-icon>
            </v-btn>
            
            <v-btn 
                color="secondary"
                rounded="pill"
                variant="flat"
                target="_blank"
                icon 
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2F50.michaelcaplan.com"
                key="1"
            >
                <v-icon>mdi-facebook</v-icon>
            </v-btn>
            
        </v-speed-dial>
        
    </v-fab>
  
  
  
</v-app>
`
}