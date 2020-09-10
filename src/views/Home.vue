<template>
    <v-sheet
            id="scrolling-techniques-7"
            class="overflow-y-auto"
    >
        <v-parallax
                dark
                src="finikimainpage.jpg"
        >
            <v-row
                    align="center"
                    justify="center"
            >
                <v-col class="text-center" cols="12">
                    <h1 class="display-1 font-weight-thin mb-4">I belive I can</h1>
                    <h4 class="subheading">Build my application today!</h4>
                </v-col>
            </v-row>
        </v-parallax>

        <div class="blue-grey lighten-5">
            <v-container>
                <h2 class="font-weight-light" align="center">Services</h2>
                <v-row>
                    <v-col align="center">
                        <v-icon large color="deep-purple darken-4">mdi-developer-board</v-icon>
                        <h3 class="font-weight-light">Web development</h3>
                    </v-col>

                    <v-col align="center">
                        <v-icon large color="deep-purple darken-4">mdi-card-search-outline</v-icon>
                        <h3 class="font-weight-light">SEO</h3>
                    </v-col>

                    <v-col align="center">
                        <v-icon large color="deep-purple darken-4">mdi-google-ads</v-icon>
                        <h3 class="font-weight-light">Contextual advertising</h3>
                    </v-col>

                    <v-col align="center">
                        <v-icon large color="deep-purple darken-4">mdi-devices</v-icon>
                        <h3 class="font-weight-light">Mobile apps</h3>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div>

            <h2 class="font-weight-light" align="center">Portfolio</h2>
            <v-row>
                <v-carousel
                        cycle
                        height="400"
                        hide-delimiter-background
                        show-arrows-on-hover
                >
                    <v-carousel-item>
                        <v-row>
                            <v-col cols="6">
                                <v-img src="finikimainpage.jpg"></v-img>
                            </v-col>

                            <v-col>
                                <p class="deep-purple--text">Description<br/>
                                    If the provided aspect ratio doesn't match that of the actual image, the default behavior is to fill as much space as possible, clipping the sides of the image. Enabling the contain prop will prevent this, but will result in empty space at the sides.</p>
                            </v-col>
                        </v-row>
                    </v-carousel-item>

                    <v-carousel-item>
                        <v-row>
                            <v-col cols="6">
                                <v-img src="finikimainpage.jpg"></v-img>
                            </v-col>

                            <v-col>
                                <p class="deep-purple--text">Description 2<br/>
                                    If the provided aspect ratio doesn't match that of the actual image, the default behavior is to fill as much space as possible, clipping the sides of the image. Enabling the contain prop will prevent this, but will result in empty space at the sides.</p>
                            </v-col>
                        </v-row>
                    </v-carousel-item>

                </v-carousel>
            </v-row>

        </div>

        <div class="deep-purple darken-4">
            <v-container>

                <v-row>
                    <v-col>
                        <h3 align="center" class="font-weight-light white--text">Ready to get started</h3>
                    </v-col>

                    <v-col>
                        <v-btn outlined color="white" dark>Get a quote</v-btn>
                    </v-col>

                </v-row>
            </v-container>
        </div>

        <v-container>
            <h2 class="font-weight-light" align="center">Reviews</h2>
            <v-row>
                <v-col>

                    <v-card
                            class="mx-auto"
                            color="deep-purple darken-4"
                            dark
                            max-width="400"
                    >
                        <v-card-title>
                            <v-icon
                                    large
                                    left
                            >
                                mdi-link-variant
                            </v-icon>
                            <span class="title font-weight-light">Client's name</span>
                        </v-card-title>

                        <v-card-text class="headline">
                            "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
                        </v-card-text>

                        <v-card-actions>
                            <v-list-item class="grow">
                                <v-list-item-avatar color="grey darken-3">
                                    <v-img
                                            class="elevation-1"
                                            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                    ></v-img>
                                </v-list-item-avatar>

                                <v-list-item-content>
                                    <v-list-item-title>Evan You</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card-actions>
                    </v-card>

                </v-col>

                <v-col>
                    <v-card
                            class="mx-auto"
                            color="deep-purple darken-4"
                            dark
                            max-width="400"
                    >
                        <v-card-title>
                            <v-icon
                                    large
                                    left
                            >
                                mdi-link-variant
                            </v-icon>
                            <span class="title font-weight-light">Second client</span>
                        </v-card-title>

                        <v-card-text class="headline">
                            "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
                        </v-card-text>

                        <v-card-actions>
                            <v-list-item class="grow">
                                <v-list-item-avatar color="grey darken-3">
                                    <v-img
                                            class="elevation-1"
                                            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                    ></v-img>
                                </v-list-item-avatar>

                                <v-list-item-content>
                                    <v-list-item-title>Evan You</v-list-item-title>
                                </v-list-item-content>

                            </v-list-item>
                        </v-card-actions>
                    </v-card>
                </v-col>

                <v-col>
                    <v-card
                            class="mx-auto"
                            color="deep-purple darken-4"
                            dark
                            max-width="400"
                    >
                        <v-card-title>
                            <v-icon
                                    large
                                    left
                            >
                                mdi-link-variant
                            </v-icon>
                            <span class="title font-weight-light">3 client</span>
                        </v-card-title>

                        <v-card-text class="headline">
                            "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
                        </v-card-text>

                        <v-card-actions>
                            <v-list-item class="grow">
                                <v-list-item-avatar color="grey darken-3">
                                    <v-img
                                            class="elevation-1"
                                            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                    ></v-img>
                                </v-list-item-avatar>

                                <v-list-item-content>
                                    <v-list-item-title>Evan You</v-list-item-title>
                                </v-list-item-content>

                            </v-list-item>
                        </v-card-actions>
                    </v-card>
                </v-col>


            </v-row>
        </v-container>
        <div class="deep-purple lighten-5">
            <v-container>
                <h2 class="font-weight-light" align="center">How We Works</h2>
                <v-row>
                    <v-col align="center">
                        <v-icon large color="deep-purple darken-4">mdi-check</v-icon>
                        <h3 class="font-weight-light">Choose the service</h3>
                    </v-col>

                    <v-col align="center">
                        <v-icon large color="deep-purple darken-4">mdi-calculator</v-icon>
                        <h3 class="font-weight-light">Get exact final quete</h3>
                    </v-col>

                    <v-col align="center">
                        <v-icon large color="deep-purple darken-4">mdi-flag-checkered</v-icon>
                        <h3 class="font-weight-light">Get great resalt</h3>
                    </v-col>

                </v-row>
            </v-container>
        </div>
        <div class="deep-purple darken-4">
            <v-container>

                <v-row>
                    <v-col>
                        <h3 align="center" class="font-weight-light white--text">Ready to get started</h3>
                    </v-col>

                    <v-col>
                        <v-btn outlined color="white" dark>Get a quote</v-btn>
                    </v-col>

                </v-row>
            </v-container>
        </div>

        <v-container>
            <h2 class="font-weight-light" align="center">Our Advantages</h2>
            <v-row>
                <v-col align="center">
                    <h3 class="font-weight-light">Keep Confidentiality</h3>
                    <p>
                        Privacy and data security are our top priorities for all our customers.
                    </p>
                </v-col>

                <v-col align="center">
                    <h3 class="font-weight-light">Great result</h3>
                    <p>
                        We don't stop working on a project until our costomer is 100% satisfired with the resalt.
                    </p>
                </v-col>

                <v-col align="center">
                    <h3 class="font-weight-light">Stick to your budget</h3>
                    <p>
                        Our affordable rates can fit any budget without sacrificing quality.
                    </p>
                </v-col>

            </v-row>
        </v-container>

        <div class="purple lighten-5">
            <v-container>
                <v-row>
                    <v-col align="center">
                        <h2 class="font-weight-light" align="center">Great Deals For Your Business!</h2>
                    </v-col>

                    <v-col align="center">

                        <v-card
                                class="mx-auto"
                        >
                            <v-card-text>
                                <h3 class="font-weight-light">Get a quote</h3>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn
                                        text
                                        color="deep-purple accent-4"
                                >
                                    Learn More
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </v-sheet>
</template>
<script>

  export default {
    name: 'Home',
    components: {
    },
    mounted() {

    }
  }
</script>