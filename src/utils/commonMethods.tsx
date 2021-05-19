import constant from "./constants";

/**
 * handle email validation method
 * 
 * @param key 
 * @param value 
 */
const handleValidationEmail = (key: string, value: string) => {
    var errorMsg = ''
    if (!value) {
        errorMsg = "Email is required.";
    }
    else if (!constant.emailRegex.test(value)) {
        errorMsg = "Please enter the valid email address."
    }
    return errorMsg
}

/**
 * hanlde password validation method
 * 
 * @param key 
 * @param value 
 */
const handleValidationPassword = (key: string, value: string) => {
    var errorMessage = ''
    if (!value) {
        errorMessage = "Password is required.";
    } else if (value.length < 8) {
        errorMessage = "Your password should contain at least 8 characters.";
    } else if (!constant.passwordRegex.test(value)) {
        errorMessage = "Password should contain atleast a capital letter, a number and a special symbol."
    }
    return errorMessage;
}

export {
    handleValidationPassword,
    handleValidationEmail
}