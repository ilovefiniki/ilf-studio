<template>
    <div class="deep-purple darken-4">
        <v-container>

            <v-row>
                <v-col>
                    <h3 align="center" class="font-weight-light white--text">Ready to get started</h3>
                </v-col>

                <v-col>
                    <Form/>
                </v-col>

            </v-row>
        </v-container>
    </div>
</template>
<style>

</style>
<script>
    import Form from '@/components/Form'
    export default {
        components: {
            Form
        },
    }
</script>