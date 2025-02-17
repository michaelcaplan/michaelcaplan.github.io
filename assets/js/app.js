import {Client, Databases, ID} from "appwrite";

const appwrite = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("67acf9ba0003eef19598");

export default {
    data() {
        return {
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
                      href="#teams"
                      variant="text"
                    >
                        Teams
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
        </v-app-bar>
          
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
                            Because that is what we love.  As skaters, we see skateboarding as a creative activity that teaches resiliency, pride in self, helps fight isolation and build community, while promoting stress busting exercise. Skateboarding can be an important anchor for youth who need a solid base to stand from as they tackle life’s challenges.  Skating is self directed creative physical play.

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
                                <v-list-item>⭐ Free skateboard (this is the exclusive cost we are fundraising for - $100 for 1 skateboard provided by our pals at IGotSkate)</v-list-item>
                                <v-list-item>⭐ Protective gear rental (free - thanks Town of Kentville!)</v-list-item>
                                <v-list-item>⭐ An open invite to join us for our regular skate meetups!</v-list-item>
                            </v-list>
                           
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>
        
        <v-parallax src="/assets/images/skatehers.jpg"></v-parallax>
          
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
                                <strong>YREACH</strong> provides settlement and languages support to Immigrant, Refugees, and their families who are new to our community.
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
                                <strong>Big Brothers Big Sisters of the Annapolis Valley</strong> provides life changing mentoring experiences for youth facing adversities.
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
        
        <v-parallax src="/assets/images/skateher2.jpg"></v-parallax>
          
        <v-sheet class="py-16" id="teams">
            <v-container>
              <v-row>
                <v-col cols="12" md="5">
                  <v-img src="/assets/discover_bg.png" /></v-col>
        
                <v-col
                  cols="12"
                  md="7"
                >
                  <div class="text-h4">
                    Join a Fundraising Team
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
         
        <v-parallax src="/assets/images/skateher1.jpg"></v-parallax>
          
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
                              buy-button-id="buy_btn_1QtdQgFSy4s51StpVteLHdqS"
                              publishable-key="pk_test_51QrIh0FSy4s51StpeTydo1LoHGB19jHUUGZuiYOjHsp15TAKoWony99B2H8MODUJcpkT0DgRMMPn34GnG6J3IAlc00vIkX2am6"
                        ></stripe-buy-button>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" lg="6" xl="6">
                        <stripe-buy-button
                              buy-button-id="buy_btn_1QtdQgFSy4s51StpVteLHdqS"
                              publishable-key="pk_test_51QrIh0FSy4s51StpeTydo1LoHGB19jHUUGZuiYOjHsp15TAKoWony99B2H8MODUJcpkT0DgRMMPn34GnG6J3IAlc00vIkX2am6"
                        ></stripe-buy-button>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" lg="6" xl="6">
                        <stripe-buy-button
                              buy-button-id="buy_btn_1QtdQgFSy4s51StpVteLHdqS"
                              publishable-key="pk_test_51QrIh0FSy4s51StpeTydo1LoHGB19jHUUGZuiYOjHsp15TAKoWony99B2H8MODUJcpkT0DgRMMPn34GnG6J3IAlc00vIkX2am6"
                        ></stripe-buy-button>
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
</v-app>
`
}