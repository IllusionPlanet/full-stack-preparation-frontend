<template>
  <div class="search-members">
    <h1>Search Members Here</h1>
    <ul>
      <li v-for="siteUser in siteUserList" :key="siteUser.id">
        <span><b>{{ siteUser.username }}</b>s password is:&nbsp; {{ siteUser.password }}</span>
        <br>
      </li>
    </ul>
  </div>
</template>

<script>
import axiosInstance from '../api/axios-base';

export default {
  data() {
    return {
      siteUserList: []
    }
  },

  created() {
    this.fetchData()
  },

  methods: {
    fetchData() {
      axiosInstance({
        url: '/search-members',
        method: 'get'
      }).then(response => {
        this.siteUserList = response.data
      }).catch(error => {
        console.error('THE ERROR IS: ', error)
      })
    }
  }
}
</script>

<style>

</style>
