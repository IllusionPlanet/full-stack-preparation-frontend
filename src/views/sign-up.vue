<template>
  <div class="sign-up">
    <ul>
      <li><input type="text" id="username" v-model="newUser.username" placeholder="Enter Username"></li>
      <li><input type="text" id="password" v-model="newUser.password" placeholder="Enter Password"></li>
      <li><button @click="signUp">Sign Up</button></li>
      <li><button @click="toSearchMembers">Search Members</button></li>
    </ul>
  </div>
</template>

<script>
import axiosInstance from '../api/axios-base';

export default {
  data() {
    return {
      newUser: {
        username: "",
        password: ""
      }
    }
  },

  methods: {
    signUp() {
      axiosInstance({
        url: '/sign-up', //需要和后端的路径保持一致
        method: 'post',
        data: this.newUser
      }).then(response => {
        alert(response.data)
      }).catch(error => {
        console.error('THE ERROR IS: ', error)
      })
    },
    toSearchMembers() {
        this.$router.push({path: '/search-members'})
    }
  }
}
</script>

<style>
.sign-up {
  width: 100%;
  height: 900px;
  background-image: url('../assets/stars.webp');
  background-repeat: no-repeat;
  color: white;
}

ul {
  list-style-type: none;
}
</style>
