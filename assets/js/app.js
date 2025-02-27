import {Client, Databases, Query} from "appwrite";

const appwrite = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("67acf9ba0003eef19598");

export default {
    data() {
        return {
            drawer: false,
            dialShare: false,
            igotskate: false,
            caplan: false,
            girlsonboards: false,
            tidal: false,
            kaneisthekey: false,
            donors: [],
        }
    },

    computed: {
        goalPercent() {

            let percent = 0;

            for (let i = 0; i < this.donors.length; i++) {
                percent += this.donors[i].total / 100;
            }

            if (percent > 0) {

                if (percent > 5000) {
                    return Math.floor((percent / 10000) * 100);
                } else {
                    return Math.floor((percent / 5000) * 100);
                }

            }

            return 0;
        },

        total() {
            let total = 0;

            for (let i = 0; i < this.donors.length; i++) {
                total += this.donors[i].total / 100;
            }

            return '$' + total;
        },

        goal() {
            let goal = 5000;
            let total = 0;

            for (let i = 0; i < this.donors.length; i++) {
                total += this.donors[i].total / 100;
            }

            if (total >= 5000) {
                goal = 10000;
            }

            return '$' + goal;
        },

        displayDonors() {
            let people = [];

            for (let i = 0; i < this.donors.length; i++) {
                if (this.donors[i].display === true || this.donors[i].display === null) {

                    people.push(this.donors[i]);
                }
            }

            return people;
        },

        secretDonorsCount() {
            let count = 0;

            for (let i = 0; i < this.donors.length; i++) {
                if (this.donors[i].display !== true && this.donors[i].display !== null) {

                    count++;
                }
            }

            return count;
        },

        displayDonorsColTwo() {
            let people = this.displayDonors;
            let col = [];

            for (let i = 0; i < people.length; i++) {
                if (i % 2 == 0) {
                    col.push(people[i]);
                }
            }

            return col;
        },

        displayDonorsColOne() {
            let people = this.displayDonors;
            let col = [];

            for (let i = 0; i < people.length; i++) {
                if (Math.abs(i % 2) == 1) {
                    col.push(people[i]);
                }
            }

            return col;
        },
    },

    beforeCreate() {
        document.getElementById('warning').remove();
    },

    async created() {

        appwrite.subscribe(
            'databases.67acfa8f001b82489d37.collections.67acfaaf000e9833c9e6.documents',
            response => {

                let docs = databases.listDocuments(
                    "67acfa8f001b82489d37",
                    "67acfaaf000e9833c9e6",
                    [
                        Query.limit(300)
                    ]
                );

                docs.then((data) => {
                    this.donors = data.documents;
                }, (error) => {
                    console.log(error);
                });
            }
        );

        const databases = new Databases(appwrite);

        let data = await databases.listDocuments(
            "67acfa8f001b82489d37",
            "67acfaaf000e9833c9e6",
            [
                Query.limit(300)
            ]
        );

        this.donors = data.documents;

        const urlParams = new URLSearchParams(window.location.search);

        if (urlParams.has('team')) {

            let team = urlParams.get('team');

            this[team] = true;

        }
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
                        The Village
                    </v-btn>
                    
                    <v-btn
                      class="text-body-1 blue-grey-darken-4"
                      href="#donate"
                      variant="text"
                    >
                        Donate
                    </v-btn>
                    
                    <v-btn
                      class="text-body-1 blue-grey-darken-4"
                      href="#questions"
                      variant="text"
                    >
                        Questions?
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
                        The Village
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
                <v-list-item>
                    <v-btn
                      class="text-body-1 blue-grey-darken-4"
                      href="#questions"
                      variant="text"
                    >
                        Questions?
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
                <abbr class="text-h6 text-sm-h4 text-md-h4 text-lg-h4 text-xl-h4">
                    50/50
                    <v-tooltip
                        activator="parent"
                        location="top"
                    >50/50 as in 50 skateboards, for 50 youth.  And 50/50, the name of a skateboarding trick.</v-tooltip>
                    
                </abbr>
                <br>
                Skateboarding For The Youth
            </h1>
        
        
            <div class="text-subtitle-1 ma-5 text-lg-h6 text-md-h6 text-xl-h6" style="max-width: 468px;">
                <em>Our goal is simple:</em> offer free skateboarding 🛹 programming to youth 🧑‍🤝‍🧑 facing adversities in Kings County.  Giving them a push in the right direction 💪.
            </div>
        
            <div class="d-flex ga-5 flex-1-1-auto flex-wrap justify-center px-4">
                <stripe-buy-button
                    buy-button-id="buy_btn_1QwVuuFMFN7Psi9lF1HHFv1L"
                    publishable-key="pk_live_51QrIgqFMFN7Psi9lAiY7GFUuxgsj0tUWdf7oza4ps49nzpHOrOlYwmc4T0nWwrfW0ZGhcPvA7pvePQS8PBeTaIRz00roiUu2Xw"
                >
                </stripe-buy-button>
            </div>
        </v-sheet>
          
        <v-sheet id="about" class="py-16">
            <div class="text-h4 font-weight-bold text-center">
                About 
                <abbr>
                    50/50
                    <v-tooltip
                        activator="parent"
                        location="top"
                    >50/50 as in 50 skateboards, for 50 youth.  And 50/50, the name of a skateboarding trick.</v-tooltip>
                </abbr>
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
                            a project supported by the <a href="https://kentville.ca/" target="_blank">Town of Kentville</a>
                            and <a href="https://igotskate.com/" target="_blank">iGot Skate</a>, 
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
                            As a continuation of this activity we are making big moves to <strong>support the important work of community 
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
                                <v-list-item>⭐ Free skateboard.  This is the exclusive cost we are fundraising for - $100 for 1 skateboard provided by our pals at IGot Skate.</v-list-item>
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
                Organizations We Are Supporting with 
                <abbr>
                    50/50
                    <v-tooltip
                        activator="parent"
                        location="top"
                    >50/50 as in 50 skateboards, for 50 youth.  And 50/50, the name of a skateboarding trick.</v-tooltip>
                </abbr>
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
          
        <v-sheet 
            class="py-16" 
            id="village"
        >
            
            <div class="text-center text-h4 font-weight-bold pb-8">
                It Takes A Village
            </div>
        
            <v-container v-if="displayDonors.length > 0">
                <v-row>  
                    <v-col>
                        <div class="text-h5 text-center pb-4">
                            Villagers Who Stepped on Up, Thank you!
                        </div>
                        
                        <v-row>
                            <v-col
                                cols="12"
                                sm="6"
                            >
                                <v-list lines="one">
                                    <v-list-item
                                        v-for="donor in displayDonorsColOne"
                                        :key="donor.$id"
                                    >
                                        <template v-slot:prepend>
                                            <v-avatar
                                                color="primary"
                                                icon="mdi-skateboarding"
                                            >
                                          </v-avatar>
                                        </template>
                                    
                                        <v-list-item-title>
                                            {{ donor.name }}
                                            <v-chip 
                                                v-if="donor.team"
                                                variant="elevated"
                                                color="secondary"
                                                size="x-small"
                                                @click="this[donor.team] = true"
                                            >
                                                {{ donor.team }}
                                            </v-chip>
                                        </v-list-item-title>
                                        <v-list-item-subtitle v-if="donor.business">
                                            {{ donor.business }}
                                        </v-list-item-subtitle>
                                        
                                    </v-list-item>
                                </v-list>
                                
                            </v-col>
                            
                            <v-col
                                cols="12"
                                sm="6"
                                v-if="displayDonorsColTwo.length > 0"
                            >
                                <v-list lines="one">
                                    <v-list-item
                                        v-for="donor in displayDonorsColTwo"
                                        :key="donor.$id"
                                    >
                                        <template v-slot:prepend>
                                            <v-avatar
                                                color="primary"
                                                icon="mdi-skateboarding"
                                            >
                                          </v-avatar>
                                        </template>
                                    
                                        <v-list-item-title>
                                            {{ donor.name }}
                                            <v-chip 
                                                v-if="donor.team"
                                                variant="elevated"
                                                color="secondary"
                                                size="x-small"
                                                @click="this[donor.team] = true"
                                            >
                                                {{ donor.team }}
                                            </v-chip>
                                        </v-list-item-title>
                                        <v-list-item-subtitle v-if="donor.business">
                                            {{ donor.business }}
                                        </v-list-item-subtitle>
                                        
                                    </v-list-item>
                                </v-list>
                                
                            </v-col>
                        </v-row>
                        
                        <v-row v-if="secretDonorsCount > 0">
                            <v-col cols="12" class="text-center pb-4">
                                And {{ secretDonorsCount }} secret donors.  Shhh!!!!!                            
                            </v-col>                        
                        </v-row>
                        
                    </v-col>

                </v-row>
                
                <v-divider 
                    v-if="displayDonors.length > 0"
                    class="mb-3 mt-4">
                </v-divider>  
            </v-container>       
        
            <v-container>
                <v-row>            
                    <v-col
                        cols="12"
                        class="mb-4"
                    >
                        <div class="text-h5 text-center">
                            Backing Teams
                        </div>
            
                        <div class="text-subtitle-2 text-medium-emphasis my-5 text-center">
                            Teams are core movers and shakers of 50/50.  Hitting our fundraising goal would not be possible without you.  
                        </div>
            
                        <v-row>
                            <v-col cols="12" sm="6" md="6" lg="6" xl="6">
                                <v-card
                                    variant="outlined"
                                >
                                    <v-card-title>
                                        iGot Skate                                   
                                        <v-btn 
                                            href="https://igotskate.com/"
                                            target="_blank"
                                            icon="mdi-open-in-new"
                                            size="small"
                                            density="comfortable"></v-btn>
                                    </v-card-title>
                                    <v-card-text>
                                        <strong>iGot Skate</strong> is a skater and family owned skateboard shop located in Kentville, Nova Scotia, in the beautiful Annapolis Valley.
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn
                                            variant="tonal"
                                            @click="igotskate = true"
                                            block
                                        >
                                            <v-icon class="pr-4" icon="mdi-open-in-app"></v-icon>
                                            More...
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                                
                                <v-dialog
                                    v-model="igotskate"
                                    scrollable
                                    transition="dialog-bottom-transition"
                                    fullscreen
                                    width="100%"
                                >
                                    <v-card>
                                        <v-toolbar>
                                            <v-toolbar-title>iGot Skate</v-toolbar-title>
                                
                                            <v-spacer></v-spacer>
                                
                                            <v-toolbar-items>
                                                <v-btn
                                                    icon="mdi-close"
                                                    @click="igotskate = false"
                                              ></v-btn>
                                            </v-toolbar-items>
                                        </v-toolbar>
                                    
                                        <v-card-text>
                                        
                                            <h3 class="pb-4">Back "50/50: Skateboarding For The Youth" on behalf of iGot Skate</h3>
                                        
                                            <div class="d-flex justify-center pb-4">
                                                    <v-img
                                                        src="/assets/images/igotskate.jpg"
                                                        aspect-ratio="1/1"
                                                        max-width="300"
                                                        position="50% 50%"
                                                        rounded="lg"
                                                    ></v-img>
                                            </div>
                                        
                                            <p class="text-body-1 pb-4">We are a skater owned, and family owned skateboard shop. A humble local shop, established in the Spring of 2019, located in Kentville, Nova Scotia, in the beautiful Annapolis Valley.</p>

                                            <p class="text-body-1 pb-4">Our mission is not only to provide the latest gear in skateboarding, but to grow and unite a welcoming and diverse skateboarding community, of all ages. We strongly believe that a community that co-exists can make a positive impact, to inspire and make our world a better place.</p>

                                            <p class="text-body-1 pb-4">iGot Skate is actively engaged with other local businesses in fundraising for non- profit charity programmes like, The Portal Youth and Our Local Food Bank. As well as, partnering with Annapolis Valley Regional Hospital Foundation, IWK Foundation, etc.,  benefiting our community and local charities.</p> 

                                            <p class="text-body-1 pb-4">United, Not Divided, is what We promote at iGot Skate.</p> 
                                        
                                            <div class="d-flex justify-center pb-4">
                                                <v-btn
                                                    color="secondary"
                                                    href="#home"
                                                    @click="igotskate = false"
                                                    size="x-large"
                                                    rounded="xl"
                                                    prepend-icon="mdi-skateboarding" 
                                                >
                                                    Learn about 50/50
                                                </v-btn>
                                            </div>
                                        
                                        </v-card-text>
                                    
                                        <template v-slot:actions>
                                            <v-btn
                                                flat
                                                color="primary"
                                                text="Let's Go!"
                                                @click="igotskate = false"
                                            ></v-btn>
                                        </template>
                                    </v-card>
                                </v-dialog>
                            </v-col>
                            
                            <v-col cols="12" sm="6" md="6" lg="6" xl="6">
                                <v-card
                                    variant="outlined"
                                >
                                    <v-card-title>
                                        Girls on Boards
                                        <v-btn 
                                            href="https://www.girlsonboards.co/"
                                            target="_blank"
                                            icon="mdi-open-in-new"
                                            size="small"
                                            density="comfortable"></v-btn>
                                    </v-card-title>
                                    <v-card-text>
                                        <strong>Girls on Boards</strong> creates empowering and accessible experiences through outdoor recreation and vulnerable conversations. 
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn
                                            variant="tonal"
                                            @click="girlsonboards = true"
                                            block
                                        >
                                            <v-icon class="pr-4" icon="mdi-open-in-app"></v-icon>
                                            More...
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                                
                                <v-dialog
                                    v-model="girlsonboards"
                                    scrollable
                                    transition="dialog-bottom-transition"
                                    fullscreen
                                    width="100%"
                                >
                                    <v-card>
                                        <v-toolbar>
                                            <v-toolbar-title>Girls on Boards</v-toolbar-title>
                                
                                            <v-spacer></v-spacer>
                                
                                            <v-toolbar-items>
                                                <v-btn
                                                    icon="mdi-close"
                                                    @click="girlsonboards = false"
                                              ></v-btn>
                                            </v-toolbar-items>
                                        </v-toolbar>
                                    
                                        <v-card-text>
                                        
                                            <h3 class="pb-4">Back "50/50: Skateboarding For The Youth" on behalf of Girls on Boards</h3>
                                        
                                            <div class="d-flex justify-center pb-4">
                                                    <v-img
                                                        src="/assets/images/girlsonboards.png"
                                                        aspect-ratio="1/1"
                                                        max-width="300"
                                                        position="50% 50%"
                                                        rounded="lg"
                                                    ></v-img>
                                            </div>
                                        
                                            <p class="text-body-1 pb-4">A registered non-profit organization empowering girls and women to love their bodies, trust their core and feel their power using immersive recreation experiences and vulnerable conversations. Sponsored Stand Up Paddle Boarding, Skateboarding & Snowboarding Experiences female identifying youth ages 8-18. All of our youth events are funded by our "Pay-it-Forward" SUP Tours, Lessons and Rentals open to the public. Thanks for your support!</p>
                                            
                                            <div class="d-flex justify-center pb-4">
                                                <v-btn
                                                    color="secondary"
                                                    href="#home"
                                                    @click="girlsonboards = false"
                                                    size="x-large"
                                                    rounded="xl"
                                                    prepend-icon="mdi-skateboarding" 
                                                >
                                                    Learn about 50/50
                                                </v-btn>
                                            </div>
                                            
                                        </v-card-text>
                                    
                                        <template v-slot:actions>
                                            <v-btn
                                                flat
                                                color="primary"
                                                text="Let's Go!"
                                                @click="girlsonboards = false"
                                            ></v-btn>
                                        </template>
                                    </v-card>
                                </v-dialog>
                                
                            </v-col>
                            
                        </v-row>
                        
                        <v-row>
                            <v-col cols="12" sm="6" md="6" lg="6" xl="6">
                                <v-card
                                    variant="outlined"
                                >
                                    <v-card-title>
                                        Caplan                                   
                                        <v-btn 
                                            href="https://michaelcaplan.com/"
                                            target="_blank"
                                            icon="mdi-open-in-new"
                                            size="small"
                                            density="comfortable"></v-btn>
                                    </v-card-title>
                                
                                    <v-card-text>
                                        <strong>Mike</strong> is old! 50 years and looking to turn each year into an opportunity on wheels for local youth.
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn
                                            variant="tonal"
                                            @click="caplan = true"
                                            block
                                        >
                                            <v-icon class="pr-4" icon="mdi-open-in-app"></v-icon>
                                            More...
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                                
                                <v-dialog
                                    v-model="caplan"
                                    scrollable
                                    transition="dialog-bottom-transition"
                                    fullscreen
                                    width="100%"
                                >
                                    <v-card>
                                        <v-toolbar>
                                            <v-toolbar-title>Mike Caplan</v-toolbar-title>
                                
                                            <v-spacer></v-spacer>
                                
                                            <v-toolbar-items>
                                                <v-btn
                                                    icon="mdi-close"
                                                    @click="caplan = false"
                                                ></v-btn>
                                            </v-toolbar-items>
                                        </v-toolbar>
                                    
                                        <v-card-text>

                                            <h3 class="pb-4">Back "50/50: Skateboarding For The Youth" on behalf of Mike Caplan</h3>
                                        
                                            <div class="d-flex justify-center pb-4">
                                                <iframe
                                                    class="youtube" 
                                                    src="https://www.youtube.com/embed/lCqwieiGSng?si=Mh-GBFdDR2_rDePY"
                                                    frameborder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    referrerpolicy="strict-origin-when-cross-origin" 
                                                    allowfullscreen 
                                                ></iframe>
                                            </div>
                                        
                                            <p class="text-body-1 pb-4">
                                                Hey friends, family, neighbours, and colleagues!  
                                                I'm hoping you'll join me on a little adventure for 2025 as I age into a new 6th decade.  
                                                Help me turn each year into an opportunity on wheels for local youth.
                                            </p>
                                            
                                            <div class="d-flex justify-center pb-4">
                                                <v-btn
                                                    color="secondary"
                                                    href="#home"
                                                    @click="caplan = false"
                                                    size="x-large"
                                                    rounded="xl"
                                                    prepend-icon="mdi-skateboarding" 
                                                >
                                                    Learn about 50/50
                                                </v-btn>
                                            </div>
                                            
                                        
                                        </v-card-text>
                                    
                                        <template v-slot:actions>
                                            <v-btn
                                                flat
                                                color="primary"
                                                text="Let's Go!"
                                                @click="caplan = false"
                                            ></v-btn>
                                        </template>
                                    </v-card>
                                </v-dialog>
                            </v-col>
                            
                            <v-col cols="12" sm="6" md="6" lg="6" xl="6">
                                <v-card
                                    variant="outlined"
                                >
                                    <v-card-title>
                                        Kane Smith @ Exit Realty
                                        <v-btn 
                                            href="https://www.kaneisthekey.ca/"
                                            target="_blank"
                                            icon="mdi-open-in-new"
                                            size="small"
                                            density="comfortable"></v-btn>
                                    </v-card-title>
                                
                                    <v-card-text>
                                        Real estate by day, <strong>Kane Smith</strong> sharing his childhood love of skating by throwing in with 50/50.
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn
                                            variant="tonal"
                                            @click="kaneisthekey = true"
                                            block
                                        >
                                            <v-icon class="pr-4" icon="mdi-open-in-app"></v-icon>
                                            More...
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                                
                                <v-dialog
                                    v-model="kaneisthekey"
                                    scrollable
                                    transition="dialog-bottom-transition"
                                    fullscreen
                                    width="100%"
                                >
                                    <v-card>
                                        <v-toolbar>
                                            <v-toolbar-title>Kane Smith - Exit Realty</v-toolbar-title>
                                
                                            <v-spacer></v-spacer>
                                
                                            <v-toolbar-items>
                                                <v-btn
                                                    icon="mdi-close"
                                                    @click="kaneisthekey = false"
                                                ></v-btn>
                                            </v-toolbar-items>
                                        </v-toolbar>
                                    
                                        <v-card-text>

                                            <h3 class="pb-4">Back "50/50: Skateboarding For The Youth" on behalf of Kane Smith @ Exit Realty</h3>
                                        
                                            <div class="d-flex justify-center pb-4">
                                                    <v-img
                                                        src="/assets/images/exit.png"
                                                        aspect-ratio="1/1"
                                                        max-width="300"
                                                        position="50% 50%"
                                                        rounded="lg"
                                                    ></v-img>
                                            </div>
                                        
                                            <p class="text-body-1 pb-4">
                                                Hey friends, family, neighbours, and colleagues!  
                                                I'm hoping you'll join me in supporting local youth facing adversity by pitching in for this initiative.
                                            </p>
                                            
                                            <div class="d-flex justify-center pb-4">
                                                <v-btn
                                                    color="secondary"
                                                    href="#home"
                                                    @click="kaneisthekey = false"
                                                    size="x-large"
                                                    rounded="xl"
                                                    prepend-icon="mdi-skateboarding" 
                                                >
                                                    Learn about 50/50
                                                </v-btn>
                                            </div>
                                            
                                        
                                        </v-card-text>
                                    
                                        <template v-slot:actions>
                                            <v-btn
                                                flat
                                                color="primary"
                                                text="Let's Go!"
                                                @click="caplan = false"
                                            ></v-btn>
                                        </template>
                                    </v-card>
                                </v-dialog>
                            </v-col>
                            
                        </v-row>
                        
                        <v-dialog
                            v-model="tidal"
                            scrollable
                            transition="dialog-bottom-transition"
                            fullscreen
                            width="100%"
                        >
                            <v-card>
                                <v-toolbar>
                                    <v-toolbar-title>Tidal</v-toolbar-title>
                        
                                    <v-spacer></v-spacer>
                        
                                    <v-toolbar-items>
                                        <v-btn
                                            icon="mdi-close"
                                            @click="tidal = false"
                                      ></v-btn>
                                    </v-toolbar-items>
                                </v-toolbar>
                            
                                <v-card-text>
                                
                                    <h3 class="pb-4">Team Tidal-ers! Tidal-naughts, Tidal-ists, Tidal Bores...</h3>
                                    
                                    <div class="d-flex justify-center pb-4">
                                        <iframe
                                            class="youtube" 
                                            src="https://www.youtube.com/embed/F_pjyj9RD7k?si=OO1mIGWWC9KtQjcR"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin" 
                                            allowfullscreen
                                        ></iframe>
                                    </div>
                                
                                    <p class="text-body-1 pb-4">
                                        Sorry for the awkward video pitch my fellow Tidalers.  
                                        We all can't be as charming on camera as Brendan.
                                        I'm hoping you'll join me on this adventure, and become an honorary skater.
                                        50 deserving youth needing a push in the right direction, one skateboard at a time.
                                        Can you help me get there?
                                    </p>
                                    
                                    <div class="d-flex justify-center pb-4">
                                        <v-btn
                                            color="secondary"
                                            href="#home"
                                            @click="tidal = false"
                                            size="x-large"
                                            rounded="xl"
                                            prepend-icon="mdi-skateboarding" 
                                        >
                                            Learn about 50/50
                                        </v-btn>
                                    </div>
                                    
                                </v-card-text>
                            
                                <template v-slot:actions>
                                    <v-btn
                                        flat
                                        color="primary"
                                        text="Let's Go!"
                                        @click="tidal = false"
                                    ></v-btn>
                                </template>
                            </v-card>
                        </v-dialog>
                        
                    </v-col>
                    
                    <v-divider class="mt-4 mb-3"></v-divider>
                    
                    <v-col
                        cols="12"
                        class="text-center"
                    >
                        <div class="text-h5">
                            Back Us?
                        </div>
            
                        <div class="text-body-1 text-medium-emphasis my-5">
                            Want to back us with your crew?  It's really straight forward.  Simply agree to promote the fundraiser via your network and we'll pop you on the above list.  
                        </div>
            
                        <v-btn
                            color="primary"
                            flat
                            rounded
                            text="Create A Team?"
                            href="mailto:me@michaelcaplan.com?subject=I Want to Back 50/50&body=Hey, I'd like to connect about creating a team to back 50/50"
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
                            buy-button-id="buy_btn_1QwVzAFMFN7Psi9lzi7jYqx3"
                            publishable-key="pk_live_51QrIgqFMFN7Psi9lAiY7GFUuxgsj0tUWdf7oza4ps49nzpHOrOlYwmc4T0nWwrfW0ZGhcPvA7pvePQS8PBeTaIRz00roiUu2Xw"
                        >
                        </stripe-buy-button>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" lg="6" xl="6">
                        <stripe-buy-button
                            buy-button-id="buy_btn_1QwZuKFMFN7Psi9ls8nWvBp4"
                            publishable-key="pk_live_51QrIgqFMFN7Psi9lAiY7GFUuxgsj0tUWdf7oza4ps49nzpHOrOlYwmc4T0nWwrfW0ZGhcPvA7pvePQS8PBeTaIRz00roiUu2Xw"
                        >
                        </stripe-buy-button>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" lg="6" xl="6">
                        <stripe-buy-button
                            buy-button-id="buy_btn_1Qwa0aFMFN7Psi9lCYQr0axc"
                            publishable-key="pk_live_51QrIgqFMFN7Psi9lAiY7GFUuxgsj0tUWdf7oza4ps49nzpHOrOlYwmc4T0nWwrfW0ZGhcPvA7pvePQS8PBeTaIRz00roiUu2Xw"
                        >
                        </stripe-buy-button>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" lg="6" xl="6">
                        <stripe-buy-button
                            buy-button-id="buy_btn_1Qwa46FMFN7Psi9la3YpmgbO"
                            publishable-key="pk_live_51QrIgqFMFN7Psi9lAiY7GFUuxgsj0tUWdf7oza4ps49nzpHOrOlYwmc4T0nWwrfW0ZGhcPvA7pvePQS8PBeTaIRz00roiUu2Xw"
                        >
                        </stripe-buy-button>
                    </v-col>
                </v-row>
            </v-container>
        
        </v-sheet>
        
        <v-sheet
            id="questions"
            class="py-16 text-center"
            color="primary"
        >
            <h4 class="text-h4 mb-4">
                Thanks For All The Support:
            </h4>
        
            <v-container>
                
                <v-row>
                    <v-col cols="12" sm="4" md="4" lg="4" xl="4">
                        
                        <div class="d-flex justify-center pb-4">
                            <v-img
                                src="/assets/images/kentville.jpg"
                                aspect-ratio="1/1"
                                max-width="300"
                                rounded="lg"
                            ></v-img>
                        </div>
                        
                        <div class="text-subtitle-1">
                            <a 
                                class="text-h6"
                                href="https://kentville.ca/"
                                target="_blank">
                                Town of Kentville
                                <v-icon>mdi-open-in-new</v-icon>
                            </a>
                        </div>
                    </v-col>
                    
                    <v-col cols="12" sm="4" md="4" lg="4" xl="4">
                        
                        <div class="d-flex justify-center pb-4">
                            <v-img
                                src="/assets/images/girlsonboards.png"
                                aspect-ratio="1/1"
                                max-width="300"
                                rounded="lg"
                            ></v-img>
                        </div>
                        
                        <div class="text-subtitle-1">
                            <a 
                                class="text-h6"
                                href="https://www.girlsonboards.co/"
                                target="_blank">
                                Girls on Boards
                                <v-icon>mdi-open-in-new</v-icon>
                            </a>
                        </div>
                    </v-col>
                    
                    <v-col cols="12" sm="4" md="4" lg="4" xl="4">
                        
                        <div class="d-flex justify-center pb-4">
                            <v-img
                                src="/assets/images/tidal.jpg"
                                aspect-ratio="1/1"
                                max-width="300"
                                rounded="lg"
                            ></v-img>
                        </div>
                        
                        <div class="text-subtitle-1">
                            <a 
                                class="text-h6"
                                href="https://www.tidaltrainingclub.com/"
                                target="_blank">
                                Tidal Training Club
                                <v-icon>mdi-open-in-new</v-icon>
                            </a>
                        </div>
                    </v-col>
                    
                    <v-col cols="12" sm="4" md="4" lg="4" xl="4">
                        
                        <div class="d-flex justify-center pb-4">
                            <v-img
                                src="/assets/images/igotskate.jpg"
                                aspect-ratio="1/1"
                                max-width="300"
                                rounded="lg"
                            ></v-img>
                        </div>
                        
                        <div class="text-subtitle-1">
                            <a 
                                class="text-h6"
                                href="https://igotskate.com/"
                                target="_blank">
                                iGot Skate
                                <v-icon>mdi-open-in-new</v-icon>
                            </a>
                        </div>
                    </v-col>
                    
                    <v-col cols="12" sm="4" md="4" lg="4" xl="4">
                        
                        <div class="d-flex justify-center pb-4">
                            <v-img
                                src="/assets/images/skatehers.png"
                                aspect-ratio="1/1"
                                max-width="300"
                                rounded="lg"
                            ></v-img>
                        </div>
                        
                        <div class="text-subtitle-1">
                            <a 
                                class="text-h6"
                                href="https://www.instagram.com/ktown_skatehers"
                                target="_blank">
                                SkateHers+
                                <v-icon>mdi-open-in-new</v-icon>
                            </a>
                        </div>
                    </v-col>
                    
                    <v-col cols="12" sm="4" md="4" lg="4" xl="4">
                        
                        <div class="d-flex justify-center pb-4">
                            <v-img
                                src="/assets/images/exit.png"
                                aspect-ratio="1/1"
                                max-width="300"
                                rounded="lg"
                            ></v-img>
                        </div>
                        
                        <div class="text-subtitle-1">
                            <a 
                                class="text-h6"
                                href="https://www.kaneisthekey.ca"
                                target="_blank">
                                Kane Smith - Exit Realty
                                <v-icon>mdi-open-in-new</v-icon>
                            </a>
                        </div>
                    </v-col>
                    
                </v-row>
                
                <v-divider class="mt-4 mb-3"></v-divider>
            
                <h4 class="text-h4 mt-4 mb-3">
                    Questions?
                </h4>
                    
                <div class="text-subtitle-1 ma-5 text-lg-h6 text-md-h6 text-xl-h6">
                    📧 Email <a href="mailto:me@michaelcaplan.com">me@michaelcaplan.com</a> or ☎️ phone <a href="tel:+19027600168">(902) 760-0168</a>
                </div>
            </v-container>
        </v-sheet>
        
    </v-main>
      
    <v-bottom-navigation density="compact">
        <v-progress-linear
            :model-value="goalPercent"
            color="primary"
            height="25"
            class="ma-2"
            striped
        >
            <strong>{{ total }} / {{ goal }}</strong>
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
                href="https://threads.net/intent/post?text=Hey friends. Super great project offering free skateboarding programming to youth facing adversities in our community looking for some help to get off the ground. Can you pitch in%3F %0A%0Ahttps%3A%2F%2F50.michaelcaplan.com"
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