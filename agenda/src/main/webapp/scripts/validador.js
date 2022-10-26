/**
 * Validacao de formulario
 * @author Carimo Marage Estante
 */

function validar () {
	let nome = frmContato.nome.value
	let fone = frmContato.fone.value
	if (nome === ""){
		alert('Priecha o campo nome')
		frmContato.nome.focus()
		return false
		
	} else if (fone === ""){
		alert('Priencha o campo Fone')
		frmContato.fone.focus()
		return false
		
			} else {
		    document.forms["frmContato"].submit()		
			}
	}
