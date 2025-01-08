<template>
  <div class="sign-up">
    <ul>
      <li><input type="text" id="username" v-model="newUser.username" placeholder="Enter Your Username"></li>
      <li><input type="password" id="password" v-model="newUser.password" placeholder="Enter Your Password"></li>
      <li><button @click="signUp" :disabled="!newUser.username || !newUser.password">Sign Up</button></li>
      <li><button @click="toSearchMembers">Search Members</button></li>
      <li><button @click="saveToRedis" :disabled="!newUser.username || !newUser.password">Save to Redis</button></li>
      <li><button @click="login" :disabled="!newUser.username || !newUser.password">Log In</button></li>
    </ul>
  </div>
</template>

<script>
import axiosInstance from '../api/axios-base'
import '/src/assets/css/sign-up.css'
import cookie from 'js-cookie'

export default {
  data() {
    return {
      newUser: {
        username: '',
        password: ''
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
        alert(response.data.message)
      }).catch(error => {
        console.error('THE ERROR IS: ', error)
      })
    },
    toSearchMembers() {
        this.$router.push({path: '/search-members'})
    },

    saveToRedis() {
      axiosInstance({
        url: '/save-to-redis',
        method: 'post',
        data: this.newUser
      }).then(response => {
        alert(response.data)
      }).catch(error => {
        console.error('THE ERROR IS: ', error)
      })
    }, 

    login() {
      axiosInstance({
        url: '/login',
        method: 'post',
        data: this.newUser
      }).then(response => {
        if (response.data.success) {
          cookie.set('jwt_token', response.data.data.token, {domain: 'localhost'}) // 生产环境需要换域名！
          cookie.set('user', JSON.stringify(this.newUser))
          this.$router.push({path: '/site-content'})
        } else {
          alert(response.data.message)
        }
      }
      ).catch(error => {
        console.error('The error is: ', error)
      })
    }
  }
}
</script>