import Snackbar from 'react-native-snackbar';

//Custom Imports
import color from './color';
import fontFamily from './fonts';

/**
 * show snackbr from bottom
 * 
 * @param title 
 * @param duration 
 */
function showSnackBar(title: string, duration: number = Snackbar.LENGTH_LONG) {
    Snackbar.show({
        text: title || "OOPS! Something went wront. Please try again",
        duration: duration,
        backgroundColor: color.startGradientBtn,
        textColor: color.white,
        fontFamily: fontFamily.muliSemiBold,
        action: {
            text: 'Close',
            onPress: () => Snackbar.dismiss(),
            textColor: color.black
        }
    });
}


/**
 * Removes Emojis from a string
 *
 * @param {string} str
 * @returns
 */
const removeEmojis = (str: string) => {
    const regex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;
    return str.replace(regex, '');
};


/**
 * Removes spaces from a string
 * 
 * @param str 
 */
const removeSpaces = (str: string) => {
    return str.replace(/\s/g, '')
}

/**
 * constant variables used throughout app
 */
const constant = {
    showSnackBar,
    removeSpaces,
    removeEmojis,
    nameRegexNew: /^[a-zA-Z '.-]*$/,
    nameRegex: /^[^ +]([^0-9~!@#$%^&*()_|+\-=÷¿?;:'",.<>\{\}\[\]\\\/]*)$/,
    passwordRegex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,40})/,
    emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
}
export default constant;