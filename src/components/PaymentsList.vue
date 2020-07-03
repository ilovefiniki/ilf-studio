<template>
    <v-container fluid>
            <Payment
                    v-for="payment of payments"
                    v-bind:payment="payment"
                    v-bind:key="payment.id"
                    @edit-payment="editPayment"
            />
    </v-container>
</template>

<script>
    import Payment from '@/components/Payment'


    export default {
        props: ['payments'],
        data() {
            return {
            }
        },
        components: {
            Payment
        },
        methods: {
            editPayment(id) {
                this.$emit('edit-payment', id)
            }
        }
    }
</script>