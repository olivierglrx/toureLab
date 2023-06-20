<template>
  <ul>
    <div class="container">
      <li><a class="link" href="#home">Home</a></li>
      <li><a class="link" href="#research">Research</a></li>
      <li><a class="link" href="#team">Team</a></li>
      <li><a class="link" href="#publications">Publications</a></li>
      <li><a class="link" href="#news">News & Jobs</a></li>
      <li><a class="link" href="#funding">Funding & Collaborations</a></li>
    </div>
  </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #6ec1e4;
  width: 100%;
}

.container {
  float: right;
}
li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-family: Lato, sans-serif;
  font-size: 16px;
  font-weight: 300;
  text-transform: uppercase;
}

/* Change the link color to #111 (black) on hover */


.link {
	color: #ffffff;
  position: relative;
  text-decoration: none;
  
}

.link::before {
  content: '';
  position: absolute;
  width:100%;
  height: 3px;
  border-radius: 2px;
  background-color:  #ffffff;
  bottom: 5px;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform .3s ease-in-out;
}

.link:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}

.link:target{
  color: black;
}
</style>
