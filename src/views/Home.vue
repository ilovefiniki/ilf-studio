<template>
    <v-sheet
            id="scrolling-techniques-7"
            class="overflow-y-auto"
    >

        <Banner/>

        <Services/>

        <Portfolio/>

        <GetAQoute/>

        <Reviews/>

        <HowWeWorks/>

        <GetAQoute/>

        <Advantages/>

        <Contacts/>

    </v-sheet>
</template>
<style>

</style>
<script>
import Banner from '@/components/Banner'
import Services from '@/components/Services'
import Reviews from '@/components/Reviews'
import Portfolio from '@/components/Portfolio'
import HowWeWorks from '@/components/HowWeWorks'
import GetAQoute from '@/components/GetAQoute'
import Advantages from '@/components/Advantages'
import Contacts from '@/components/Contacts'

export default {
    name: 'Home',
    components: {
        Banner,
        Advantages,
        GetAQoute,
        HowWeWorks,
        Portfolio,
        Reviews,
        Services,
        Contacts
    },
    mounted() {

    }
}
</script>