import '../styles/styles.css'
import { validateForm } from './form'

function runFormValidation() {

    validateForm.handleNameInputs
    validateForm.handleMailInputs
    validateForm.handleZipInputs
    validateForm.handlePasswordInputs

}

(function() {
    runFormValidation()
})