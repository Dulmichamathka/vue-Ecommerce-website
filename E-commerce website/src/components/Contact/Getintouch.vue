<template>
  <v-container>
    <div class="d-flex flex-column align-center justify-center px-15 my-10">
      <h2>Get In Touch With Us</h2>
      <div class="text-center">
        <small style="color: grey">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email.<br />
          Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </small>
      </div>
    </div>
    <v-row>
      <v-col cols="12" sm="12" md="6">
        <div class="d-flex align-start justify-center mb-10">
          <v-icon class="mt-1">fas fa-location-dot</v-icon>
          <div class="ml-4">
            <h3>Address</h3>
            <small
              >236 5th SE Avenue,<br />
              New York NY10000,<br />
              United States</small
            >
          </div>
        </div>
        <div class="d-flex align-start justify-center mb-10 ml-10">
          <v-icon size="18" class="mt-2">fas fa-phone</v-icon>
          <div class="ml-5">
            <h3>Phone</h3>
            <small
              >Mobile: +(84) 546-6789<br />
              Hotline: +(84) 456-6789</small
            >
          </div>
        </div>
        <div
          class="d-flex align-start justify-center mb-6"
          style="margin-left: 80px"
        >
          <v-icon class="mt-1" size="20">fas fa-clock</v-icon>
          <div class="ml-4">
            <h3>Working Time</h3>
            <small
              >Monday-Friday: 9:00 - 22:00<br />
              Saturday-Sunday: 9:00 - 21:00</small
            >
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <form @submit.prevent="submitForm">
          <div>
            <small>Your name</small>
            <v-text-field
              class="my-4"
              label="Abc"
              variant="outlined"
              v-model="formData.name"
            ></v-text-field>
          </div>
          <div>
            <small>Email Address</small>
            <v-text-field
              class="my-4"
              label="Abc@gmail.com"
              variant="outlined"
              v-model="formData.email"
            ></v-text-field>
          </div>
          <div>
            <small>Subject</small>
            <v-text-field
              class="my-4"
              label="This is an Optional"
              variant="outlined"
              v-model="formData.subject"
            ></v-text-field>
          </div>

          <div>
            <small>Message</small>
            <v-textarea
              label="Hi! I'd like to ask about"
              row-height="25"
              rows="3"
              variant="outlined"
              auto-grow
              shaped
              class="my-4"
              v-model="formData.message"
            ></v-textarea>
          </div>
        </form>
        <v-btn @click="submitForm" flat>Submit</v-btn>

        <v-dialog v-model="dialog" width="auto">
          <v-card
            max-width="400"
            prepend-icon="fas fa-circle-check"
            text="Your Form Submitted Successfully!"
            title="Form Submition"
          >
            <template v-slot:actions>
              <v-btn class="ms-auto" text="Ok" @click="dialog = false"></v-btn>
            </template>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { reactive } from "vue";
import { ref } from "vue";

const dialog = ref(false);

const formData = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const submitForm = () => {
  console.log("Form submitted data:", formData);
  //alert("Form submitted successfully");
  dialog.value = true;

  formData.name = "";
  formData.email = "";
  formData.subject = "";
  formData.message = "";
};
</script>
<style scoped>
.v-btn {
  background-color: #b88e2f;
  border-radius: 3px;
  color: white;
  text-transform: capitalize;
  padding: 0 60px;
}

.v-btn.v-btn--density-default {
  height: calc(var(--v-btn-height) + 5px);
}
</style>
