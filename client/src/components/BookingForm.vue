<template lang="html">
  <form class="" v-on:submit="addBooking" method="post">
    <label for="name">Name: </label>
    <input type="text" id="name" v-model="name" required>

    <label for="email">E-mail Address: </label>
    <input type="text" id="email" v-model="email" required>

    <input type="submit" name="Save" id='save'/>

  </form>
</template>

<script>
import { eventBus } from '@/main.js'
import BookingsService from '@/services/BookingsService.js'

export default {
  name: 'booking-form',
  data(){
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    addBooking(e){
      e.preventDefault()
      const booking = {
        name: this.name,
        email: this.email
      }
      BookingsService.postBooking(booking)
      .then(res => eventBus.$emit('booking-added', res))
    },

  }
}




// export default {
//   name: "checkedIn-form",
//   data(){
//     return {
//       "checkedIn": {},
//     }
//   },
//   props: ["bookings"],
//   methods: {
//     handleSelect(){
//       this.checkedIn = ""
//       eventBus.$emit('checkedIn-form', this.checkedIn)
//     }
//   }
</script>







<style lang="css" scoped>
</style>
