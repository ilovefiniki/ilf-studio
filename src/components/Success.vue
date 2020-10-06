<template>
    <v-row justify="center">
        <v-dialog
                v-model="dialog"
                max-width="290"
        >
            <v-card>
                <v-card-title class="headline">
                    Your message sent
                </v-card-title>

                <v-card-text>
                    We answer you very soon!
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="green darken-1"
                            text
                            @click="dialog = false"
                    >
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        props: ['dialog'],
        methods: {

        }
    }
</script>