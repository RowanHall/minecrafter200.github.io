var player_s = {}
var circle
var camera2
player_s.init = function(scene, mass, camera) {
	window.addEventListener( 'mousemove', onMouseMove, false );
      var color = new THREE.Color(Math.random(),Math.random(),Math.random());
      
      var geometry = new THREE.CircleGeometry( ((mass)*10), 64);
			var material = new THREE.MeshPhongMaterial()
			material.color = color
      circle = new THREE.Mesh( geometry, material );
      circle.position.z = 0.5
      scene.add(circle)
camera2 = camera;
}
function onMouseMove( event ) {


	var mousex = ( event.clientX / window.innerWidth ) * 2 - 1;
	var mousey = - ( event.clientY / window.innerHeight ) * 2 + 1;		
console.log(mousex + "   " + mousey)
}
player_s.visual = function() {
	
	circle.rotation.z += 0.005 
	circle.translateY(1);
	
	// need to set z to mass. (+mass)
	camera2.position.set(circle.position.x,circle.position.y,10)
}
