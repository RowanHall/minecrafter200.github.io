var player_s = {}
player_s.init = function(scene, mass) {

      var geometry = new THREE.CircleGeometry( mass, 32);
			var material = new THREE.MeshPhongMaterial( getRandomColor() )
      var circle = new THREE.Mesh( geometry, material );
      circle.position.z = 0.5
      scene.add(circle)
}
