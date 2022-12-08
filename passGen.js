// declares the list of characters to fetch your Passwords over.
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%!)$:~#*@&';
var text_to_save = "";
var hasGenerated = false;
// a function to reset the generator.
function resetAll() {
    window.location.reload();
    form.reset();
    text.reset();
}
// A function to save the length of our password
function choosePwLength() {
    let MeineEingebeneZahl = document.getElementById("meineZahl");
    let meineZahl = MeineEingebeneZahl.value;
    return meineZahl;
}
/* A funtion to generate our passwords.
 Description: The program generates a password with at least 7 and less than 20 characters.
The Password muss contain at least: one lowercase, one uppercase and one special character 
and at least one digit, otherwise it can't be considered as full password and therefore 
can't be saved. Only authentic passwords can be saved. The last password saved will be displayed for review*/
function generateString() {
    let length = choosePwLength();
    let result = '';
    let text = "";
    text = document.getElementById("resultat");
    const charactersLength = characters.length;
    const message = document.getElementById("message");

    if (length < 7) {
        // alert('Dein Passwort muss mindestens 7 Zeichen haben!');
        text.innerText = result + 'your password muss have at least 7 characters!, reset and try again';
    } else if (length > 20) {
        // alert('Dein Passport kann nur bis 20 Zeichen haben! '); 
        text.innerText = result + 'your Password should not have more than 20 characters!, reset and try again ';
    } else {
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        try {
            if (result.match(/[0-9]/g) == false) {

                throw 'Your password does not fit the norm:Missing digits!, reset and try again';



            } else if (result.match(/[A-Z]/g) == false) {

                throw 'Your password does not fit the norm: Uppercase characters are missing; reset and try again';


            } else if (result.match(/[a-z]/g) == false) {

                throw 'Your password does not fit the norm:Lowercase characters are missing, reset and try again';


            } else if (result.match(/[%!)$:~#*@&]/g) == false) {

                throw 'Your password does not fit the norm:Spezial characters are missing!, reset and try again';


            } else {

            }

        } catch (err) {
            message.innerHTML = err;


        } finally {
            text.innerHTML = result;
            hasGenerated = true;


        }

    }
    alle_PwAnzeigen();
    return result;


}
// a function to save the fully generated passwords
function pwSpeichern() {
    if (hasGenerated == true) {
        text_to_save = generateString();
        localStorage.setItem("text", text_to_save);

        alert('Your password has been saved');

        resetAll();
    } else {
        alert('could not save your password')
    }
    return;
}
// a function to display the saved password
function alle_PwAnzeigen() {
    let savedPassword = "";
    savedPassword = localStorage.getItem("text"); //retrieve
    document.getElementById('PasswordStore').innerHTML = 'get your lately saved the Password: ' + savedPassword;
    return savedPassword;
    //display
}
