<template>
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
</template>
<style>

</style>
<script>
    export default {
    }
</script>