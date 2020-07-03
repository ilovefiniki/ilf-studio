<template>
    <v-list-item>
        <v-list-item-content>
            <v-list-item-title><i>{{payment.date}}</i> <strong>{{payment.sum}}</strong> {{payment.title}}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
            <v-btn
                    class="btn edit"
                    @click="$emit('edit-payment', payment.id)"
            >Edit</v-btn>
        </v-list-item-action>
    </v-list-item>
</template>
<script>
    export default {
        props: ['payment'],
        components: {
        }
    }
</script>