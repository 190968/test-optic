<template>
    <div v-if="message" class="alert alert-danger">
        {{message}}
    </div>    
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    props: ['id'],
    computed: {
        ...mapGetters({
            getError: 'order/getErrorProperty' 
        }),
        message() {
            let new_message, message = false;
            
            if (new_message = this.getError(this.id)) 
                message = new_message;
            
            return message;
        }
    },
}
</script>

