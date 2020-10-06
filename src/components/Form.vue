<template>
    <v-row justify="center">
        <v-dialog
                v-model="dialog"
                persistent
                max-width="600px"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                        outlined
                        color="white"
                        dark
                        v-bind="attrs"
                        v-on="on"
                >
                    Get A Quote
                </v-btn>
            </template>
            <v-form @submit.prevent="sendEmail">
            <v-card>
                <v-card-title>
                    <span class="headline">Get A Quote</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col
                                    cols="12"
                            >
                                <v-text-field
                                        label="Name*"
                                        required
                                        v-model="name"
                                        name="name"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12">
                                <v-text-field
                                        label="Email*"
                                        required
                                        v-model="email"
                                        name="email"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-textarea
                                        autocomplete="Your message or question"
                                        label="Message"
                                        v-model="text"
                                        name="text"
                                ></v-textarea>
                            </v-col>

                        </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="blue darken-1"
                            text
                            outlined
                            @click="dialog = false"
                    >
                        Close
                    </v-btn>
                    <v-btn
                            color="blue darken-1"
                            class="white--text"
                            @click="dialog = false"
                            type="submit"
                    >
                        Send
                    </v-btn>
                </v-card-actions>
            </v-card>
            </v-form>
        </v-dialog>
        <Success v-bind:dialog="successDialog"/>
    </v-row>
</template>

<script>
    import Success from '@/components/Success'
    import emailjs from 'emailjs-com'

    export default {
        components: {Success},
        data() {
            return {
                dialog: false,
                successDialog: false,
                name: '',
                email: '',
                text: '',
            }
        },
        methods: {
            sendEmail(e) {
                emailjs.sendForm('gmail_ilovefiniki.com', 'template_ilf', e.target, 'user_1wFOQcBGOSgKskuCDU6r1')
                    .then((result) => {
                        this.successDialog = true
                        console.log('SUCCESS!', result.status, result.text);
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
            }
        }
    }
</script>