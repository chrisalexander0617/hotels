<template>
    <div class="loader-screen d-flex align-items-center justify-content-center flex-column">
        <h1 class="text-white">Loading Hotels</h1>
        <div class="spinner">
            <div class="rect1 bg-white"></div>
            <div class="rect2 bg-white"></div>
            <div class="rect3 bg-white"></div>
            <div class="rect4 bg-white"></div>
            <div class="rect5 bg-white"></div>
        </div>
    </div>
</template>

<style>

.loader-screen {
    height:100vh;
    width:100vw;
    background-color:#005370;
    position:absolute;
    top:0;
    left:0;
    z-index:2;
}

.spinner {
  margin: 100px auto;
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 10px;
}
.spinner > div {
  background-color:#fff;
  height: 100%;
  width: 6px;
  display: inline-block;
  
  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
  animation: sk-stretchdelay 1.2s infinite ease-in-out;
}
.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
.spinner .rect3 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}
.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
@-webkit-keyframes sk-stretchdelay {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  
  20% { -webkit-transform: scaleY(1.0) }
}
@keyframes sk-stretchdelay {
  0%, 40%, 100% { 
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% { 
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}
</style>