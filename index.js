
import { createcard } from "./JAVASCRIPT/createcard.js";

import { createButton } from "./JAVASCRIPT/createbutton.js";

import { buttonDisabled } from "./JAVASCRIPT/disablebutton.js";

/*carta principal minimo */

const minCards = 1



const state = {


    quantity: minCards,


}

/*crear botton */

createButton('AGREGAR', 'addCard')

createButton('ELIMINAR', 'removeCard')

/*funcionamiento del 1 botton */

addCard.addEventListener('click', () => {

    createcard()

    state.quantity++

    buttonDisabled(state.quantity)



}
)

/*funcion del segundo boton */

const removeCard = document.querySelector("#removeCard")



removeCard.addEventListener('click', () => {

    const parent = document.querySelector('#app')

    parent.removeChild(parent.lastElementChild)

    state.quantity--

    buttonDisabled(state.quantity)
}
)
