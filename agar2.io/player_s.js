var player_s = {}
player_s.init = function(scene) {

      var geometry = new THREE.CircleGeometry( 10, 32);
			var material = new THREE.MeshPhongMaterial( { color: "red" } )
      var circle = new THREE.Mesh( geometry, material );
      circle.position.z = 0.5
      scene.add(circle)
}
