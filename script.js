function esconderAreas(){
	document.getElementById("inicio").style.display = "none"
	document.getElementById("eu").style.display = "none"
	document.getElementById("sobreMim").style.display = "none"
	document.getElementById("formação").style.display = "none"
	document.getElementById("cursos").style.display = "none"
	document.getElementById("experiência").style.display = "none"
	document.getElementById("habilidades").style.display = "none"
}
function inicio(){
	esconderAreas()
	document.getElementById("inicio").style.display = "inline-block"
	document.getElementById("eu").style.display = "inline-block"
}
function sobreMim(){
	esconderAreas()
	document.getElementById("sobreMim").style.display = "inline-block"
}
function formacao(){
	esconderAreas()
	document.getElementById("formação").style.display = "inline-block"
}
function cursos(){
	esconderAreas()
	document.getElementById("cursos").style.display = "inline-block"
}
function experiencia(){
	esconderAreas()
	document.getElementById("experiência").style.display = "inline-block"
}
function habilidades(){
	esconderAreas()
	document.getElementById("habilidades").style.display = "inline-block"
}