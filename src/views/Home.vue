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

        <GreatDeals/>

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
import GreatDeals from '@/components/GreatDeals'

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
        GreatDeals
    },
    mounted() {

    }
}
</script>