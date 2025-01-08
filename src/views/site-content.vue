<template>
    <div class="content">
        Site Content Here
        Our client is: {{ user.username }}
    </div>
        
</template>

<script>
import '/src/assets/css/site-content.css'
import cookie from 'js-cookie'

export default {
    data() {
        return {
            user: {}
        }
    },

    created() {
        this.user = JSON.parse(cookie.get('user'))
    },

    methods: {
        
    }
}

</script>