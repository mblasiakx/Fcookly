<template>
<div>

    
<div id="stars"></div>
<div id="stars2"></div>
<div id="stars3"></div>

<div class="NotFound">
</div>
    <div class="Info">
        <h1> 404 PAGE NOT FOUND</h1>
    </div>
</div>
</template>


<script>
export default{

}

</script>

<style>
.NotFound{
    position: relative;
   height: 80vh;
   background:url('./nofound.gif') no-repeat;
   top:50%;
   left:50%;
   transform: translateX(-25%);
}

.Info{
position: relative;
left:50%;
transform: translateX(-50%);
width: 50%;
color: white;
text-align: center;
font-family: "Roboto", sans-serif;
font-size: 25px;
background:rgb(206, 100, 100);

}
</style>