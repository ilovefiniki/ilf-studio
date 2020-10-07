<template>
    <div class="indigo darken-1 py-15">
        <v-container>

            <v-row>
                <v-col>
                    <h2 align="center" class="font-weight-black white--text">Ready to get started</h2>
                </v-col>

                <v-col>
                    <div class="text-center"><Form/></div>
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