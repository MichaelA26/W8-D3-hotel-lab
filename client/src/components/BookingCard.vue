<template lang="html">
  <div class="booking-card">
    <h3>{{ booking.name }}</h3>
    <p>Guest E-mail: {{ booking.email }}</p>
    <p>Checked In/Out: {{ booking.checkedIn }}</p>
    <li
    v-bind:class="{'checkedIn' : booking.checkedIn, 'notCheckedIn': !booking.checkedIn}"
    v-on:click="handleClick">In
  </li>
  <button v-on:click="handleClick">Check In</button>
  <button type="button" class="delete-btn" v-on:click="deleteBooking">Delete</button>


  <!-- <label class="container">Checked In:
  <input type="checkbox" checked="checked">
  <span class="checkmark"></span> -->
  <!-- <button type="button" class="update-btn" v-on:click="updateBooking">Update</button> -->

</label>
</div>
</template>

<script>
import { eventBus } from '@/main.js'
import BookingsService from '@/services/BookingsService.js'

export default {
  name: 'booking-card',
  props: ['booking'],
  methods: {
    deleteBooking(){
      BookingsService.deleteBooking(this.booking._id)
      .then(() => eventBus.$emit('booking-deleted', this.booking._id))
    },
    handleClick(){
      BookingsService.postBooking(this.booking._id)
      .then(() => eventBus.$emit('booking-updated', this.booking._id))
    },
    handleCheckedInClick(){
      BookingsService.handleCheckedInClick(this.booking._id)
      .then(() => eventBus.$emit('booking-updated', this.booking._id))
    }
  }
}
</script>




<style lang="css" scoped>



.checkedIn {
  color: green;
}
.notCheckedIn {
  color: red;
}
</style>
