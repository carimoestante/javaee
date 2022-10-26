/**
 * Confirmador de exclusao de um contato
 * @author Carimo Marage Estante
 * @ param idcon
 */
 
 function confirmar(idcon){
	let resposta = confirm("Confirma a Exclusao deste Contato?")
	if (resposta === true){
		alert(idcon)
	
		window.location.href = "delete?idcon=" + idcon
	}
}