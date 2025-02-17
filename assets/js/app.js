import {Client, Databases, ID} from "appwrite";

const appwrite = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("67acf9ba0003eef19598");

export default {
    data() {
        return {
            donors: [],
            menu: [
                'About',
                'Organizations',
                'Teams',
                'Donate'
            ]
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
                      v-for="item in menu"
                      :key="item"
                      class="text-body-1 blue-grey-darken-4"
                      :href="item"
                      variant="text"
                    >
                        {{ item }}
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
        
        
            <div class="text-subtitle-1 mb-5" style="max-width: 468px;">
              <em>Our goal is simple:</em> offer free skateboarding programming to youth facing adversities in Kings County.
            </div>
        
            <div class="d-flex ga-5 flex-1-1-auto flex-wrap justify-center px-4">
                <stripe-buy-button
                  buy-button-id="buy_btn_1Qrj9NFSy4s51StpTW5GBs5j"
                  publishable-key="pk_test_51QrIh0FSy4s51StpeTydo1LoHGB19jHUUGZuiYOjHsp15TAKoWony99B2H8MODUJcpkT0DgRMMPn34GnG6J3IAlc00vIkX2am6"
                ></stripe-buy-button>
            </div>
          </v-sheet>
          
            <v-sheet class="d-flex align-center justify-center py-16 flex-wrap ga-5 px-4">
                <h1>Another section</h1>
          </v-sheet>
          
          <v-sheet
            id="about"
            class="py-16 text-center"
            color="secondary"
          >
            <div class="text-h4 font-weight-bold">
              What We Do
            </div>
        
            <div class="text-body-1 font-weight-regular mt-3 text-medium-emphasis mb-12">
              Discover how our amazing team can help your business.
            </div>
        
          </v-sheet>
          
            <v-sheet class="py-16">
            <v-container>
              <v-row>
                <v-col cols="12" md="5">
                  <v-img src="/assets/discover_bg.png" /></v-col>
        
                <v-col
                  cols="12"
                  md="7"
                >
                  <div class="text-h4">
                    Discover how we can help you to group your business fast
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
    </v-main>
      
    <v-footer class="pa-8">
        <div class="text-body-1">
          &copy; 2016-{{ (new Date()).getFullYear() }} <span class="d-none d-sm-inline-block">Vuetify, LLC</span>
        </div>
  </v-footer>
</v-app>
`
}