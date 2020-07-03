<template>
    <div class="text-center">
        Total:
        <v-chip
                class="ma-2 font-weight-bold"
                color="indigo"
                text-color="white"
        >
            <v-avatar left>
                <v-icon>mdi-plus</v-icon>
            </v-avatar>
            {{ totalIncome }} $
        </v-chip>
        <v-chip
                class="ma-2 font-weight-light"
                color="indigo"
                outlined
        >
            <v-avatar left>
                <v-icon>mdi-plus</v-icon>
            </v-avatar>
            {{ (totalIncome*currency.buyRate).toFixed(0) }} BYN
        </v-chip>
        <v-chip
                class="ma-2"
                color="orange"
                text-color="white"
        >
            <v-icon left>mdi-minus</v-icon>
            {{ totalExpenses }} $
        </v-chip>

        <v-chip
                class="ma-2"
                color="primary"
                text-color="white"
        >
            <v-avatar left>
                <v-icon>mdi-checkbox-marked-circle</v-icon>
            </v-avatar>
            {{ totalIncome - totalExpenses }} $
        </v-chip>
    </div>
</template>
<script>
    export default {
        props: ['payments'],
        data() {
            return {
                currency: {}
            }
        },
        mounted() {
            this.getCurrency()
        },
        computed: {
            totalIncome() {
                let total = 0
                this.payments.forEach(val => {
                    if(val.paymentType) {
                        total += Number(val.sum)
                    }
                });
                return total
            },
            totalExpenses() {
                let total = 0
                this.payments.forEach(val => {
                    if(!val.paymentType) {
                        total += Number(val.sum)
                    }
                });
                return total
            }
        },
        methods: {
            async getCurrency() {
                console.log('get currency')
                const axios = require('axios')
                    axios
                        .get('https://developerhub.alfabank.by:8273/partner/1.0.0/public/rates')
                        .then(response => {
                            if(response.data) {
                                this.currency = response.data.rates.filter( (rate) => rate.sellCode==840 && rate.buyCode == 933)
                                this.currency = this.currency[0]
                                //console.log(this.currency)
                            }
                        })
                        .catch(error => console.log(error))
            }
        }
    }
</script>