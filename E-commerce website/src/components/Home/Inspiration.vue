<template>
  <v-container fluid>
    <v-row class="my-8" style="background-color: #fcf8f3">
      <v-col cols="12" sm="6" md="4" class="d-flex align-center">
        <div class="card px-8 py-10">
          <div
            class="d-flex justify-center pl-7"
            style="flex-direction: column"
          >
            <h2
              style="
                font-size: 36px;
                font-weight: 700;

                margin-bottom: 2px;
              "
            >
              50+ Beautiful rooms<br />
              inspiration
            </h2>
            <p>
              Our design already made a lot of beautiful prototype of rooms that
              inspire you
            </p>
          </div>
          <v-btn class="ml-7" flat tile color="#b88e2f">Explore More</v-btn>
        </div>
      </v-col>
      <v-col cols="6" sm="6" md="3">
        <div  style="width: 360px; height: 580px;position: relative;" class="py-5">
          <img  class="before" src="/13.png" alt="rooms" />
          <div  class="card-wrapper  d-flex" >
            <div class="image-card">
              <p >01 <v-icon color="#5b5b5b"  icon="fas fa-minus"></v-icon>&nbsp; Bed Room</p>
              <h3>Inner Peace</h3>
            </div>
            
           <div class="button-card" ><v-icon  icon="fas fa-arrow-right"></v-icon></div>
          </div>
        </div>
      </v-col>
      <v-col cols="6" sm="6" md="5" class="pl-6">
        <div class="container py-5" >
          <div class="slider-wrapper">
            <div class="image-list">
              <img class="image-item"  cover src="/10.png"></img>
              <img class="image-item"  cover src="/11.png"></img>
              <img class="image-item"  cover src="/7.png"></img>        
              <img class="image-item"  cover src="/12.png"></img>
              <img class="image-item"  cover src="/11.png"></img>
              <img class="image-item"  cover src="/8.png"></img>        
              
            </div>
        <button id="next-slide" class="slide-button"><i class="fas fa-chevron-right"></i></button>
          </div>
        
        </div>
      </v-col>
   
    </v-row>
  </v-container>
</template>

<script setup>
 const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");

  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "next-slide" ? 1 : -1; // Direction is set to 1 or -1
      const scrollAmount = imageList.clientWidth * direction; // Calculate scroll amount based on direction
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });
};

window.addEventListener("load", initSlider);


</script>

<style scoped>
.v-btn {
  margin-top: 30px;
  padding: 0 40px;
}
.v-btn.v-btn--density-default {
  height: calc(var(--v-btn-height) + 10px);
}




img.before {
  width: 100%;
  height: 100%;
  object-fit: cover;
  
}

.card-wrapper{
  position: absolute;
  bottom: 45px;
  left:25px ;
  align-items: end;
 
}



.image-card{

  background: white;
  opacity: 0.8;
  width: 180px;
  height: 110px;
  padding-top:25px ;
  padding-left:25px ;
  
}

.button-card{
  width: 45px;
   height: 45px;
  background:  #b88e2f;
  padding: 12px;
  color: rgb(232, 231, 231);
  
  font-size: small;

}

.image-card p{
  font-size: small;
}
.image-card h3{
  font-size: 23px;
}

.container{
  max-width: 500px;
  width: 100%;
}

.slider-wrapper .image-list{
  display:grid;
  gap: 18px;
  grid-template-columns: repeat(10, 1fr);
  font-size: 0;
  /*margin-bottom:25px ;*/
  scrollbar-width: none;
  overflow-x: auto;
}

.slider-wrapper .image-list::-webkit-scrollbar{
  display: none;
}

.slider-wrapper .image-list .image-item{
  width: 400px ;
  height: 450px;
  object-fit: cover;
}

.container .slider-scrollbar{
 width: 100%;
 height: 60px;
 background-color: red;
 display: flex;
 align-items: center;
}
.slider-scrollbar .scrollbar-track{
  height:3px ;
  width: 100%;
  background:#ccc;
}

.slider-wrapper{
  position: relative;
}

.slider-wrapper .slide-button{
  position: absolute;
  height: 45px;
  width: 45px;
  color: #b88e2f;
  background: white;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  right: 80px;
  bottom: 150px;
  box-shadow: 0 4px 8px rgb(168, 156, 156) ;

}

.slider-wrapper .slide-button:hover{
  opacity: 0.7;
  box-shadow: 0 4px 8px rgb(118, 109, 109) ;
}

</style>
