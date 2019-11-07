<template>
	<div class="info">
		<div id="containerList1" class="row justify-content-md-center">
			<div id="imgContainer">
				<img
					src="../assets/img/mapa-colombia-lineal.png"
					id="linelMap"
					alt="Mapa Colombia"
					align="left"
				/>
			</div>
			<div class="col-xl-6 col-8"></div>
		</div>
	</div>
</template>

<script>
export default {
  name: "WeInfo",
  props: {
    msg: String
  }
//   methods: {
// var img = document.getElementById('container').firstChild;
//     img.onload = function() {
//     if(img.height > img.width) {
//         img.height = '100%';
//         img.width = 'auto';
//     }
// };
//   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
.info {
  max-width: 100%;
  background-color: darkcyan;
}
#imgContainer {
  max-height: 100%;
  width: 92%;
  /* background-color: brown; */
}
linealMap {
}
</style>
