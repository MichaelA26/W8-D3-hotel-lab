<template lang="html">
  <div class="booking-card">
    <h3>{{ booking.name }}</h3>
    <p>Guest E-mail: {{ booking.email }}</p>
    <p>Checked In/Out: {{ booking.checkedIn }}</p>
    <button type="button" class="delete-btn" v-on:click="deleteBooking">Delete</button>
    <label class="container">Yes
      <input type="checkbox" checked="checked">
      <span class="checkmark"></span>
    </label>
    <label class="container">No
      <input type="checkbox" checked="checked">
      <span class="checkmark"></span>
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
    }
  }
}
</script>




<style lang="css" scoped>
</style>
