<template>
  <div>
    <h1>404 Error Page</h1>
    <p className="zoom-area"></p>
    <div className="error-container">
      <span className="four"><span className="screen-reader-text">4</span></span>
      <span className="zero"><span className="screen-reader-text">0</span></span>
      <span className="four"><span className="screen-reader-text">4</span></span>
      <span className="."><span className="screen-reader-text">.</span></span>
    </div>
    <div>
      <p class="home">Go back to <RouterLink to="/"> Homepage </RouterLink></p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Error-404',

  setup() {

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700');
@import url('https://fonts.googleapis.com/css?family=Catamaran:400,800');
.error-container {
  text-align: center;
  font-size: 100px;
  font-family: 'Catamaran', sans-serif;
  font-weight: 800;
  margin: 70px 15px;
}
.error-container > span {
  display: inline-block;
  position: relative;
}
.error-container > span.four {
  width: 136px;
  height: 43px;
  border-radius: 999px;
  background: linear-gradient(
      140deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.07) 43%,
      transparent 44%,
      transparent 100%
    ),
    linear-gradient(
      105deg,
      transparent 0%,
      transparent 40%,
      rgba(0, 0, 0, 0.06) 41%,
      rgba(0, 0, 0, 0.07) 76%,
      transparent 77%,
      transparent 100%
    ),
    linear-gradient(to right, #d89ca4, #e27b7e);
}
.error-container > span.four:before,
.error-container > span.four:after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 999px;
}
.error-container > span.four:before {
  width: 43px;
  height: 156px;
  left: 60px;
  bottom: -43px;
  background: linear-gradient(
      128deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.07) 40%,
      transparent 41%,
      transparent 100%
    ),
    linear-gradient(
      116deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.07) 50%,
      transparent 51%,
      transparent 100%
    ),
    linear-gradient(to top, #99749d, #b895ab, #cc9aa6, #d7969e, #e0787f);
}
.error-container > span.four:after {
  width: 137px;
  height: 43px;
  transform: rotate(-49.5deg);
  left: -18px;
  bottom: 36px;
  background: linear-gradient(to right, #99749d, #b895ab, #cc9aa6, #d7969e, #e0787f);
}

.error-container > span.zero {
  vertical-align: text-top;
  width: 156px;
  height: 156px;
  border-radius: 999px;
  background: linear-gradient(
      -45deg,
      transparent 0%,
      rgba(0, 0, 0, 0.06) 50%,
      transparent 51%,
      transparent 100%
    ),
    linear-gradient(to top right, #99749d, #99749d, #b895ab, #cc9aa6, #d7969e, #ed8687, #ed8687);
  overflow: hidden;
  animation: bgshadow 5s infinite;
}
.error-container > span.zero:before {
  content: '';
  display: block;
  position: absolute;
  transform: rotate(45deg);
  width: 90px;
  height: 90px;
  background-color: transparent;
  left: 0px;
  bottom: 0px;
}
.home{
  text-align: center;
  font-size: 25px;
  font-family: 'Catamaran', sans-serif;
  font-weight: 50;
  text-decoration: none;
}
.home :hover{
    background-color:rgb(246, 108, 3);
    color: white;
}

</style>
