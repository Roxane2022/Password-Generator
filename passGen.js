// declare the list of characters
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%!)$:~#*@&';
var text_to_save = "";
var savedTextList = [];
var hasGenerated = false;

function resetAll() {
    window.location.reload();
    form.reset();
    text.reset();
}

function choosePwLength() {
    let MeineEingebeneZahl = document.getElementById("meineZahl");
    let meineZahl = MeineEingebeneZahl.value;
    return meineZahl;
}

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
                // message.reset();
                throw 'Your password does not fit the norm:Missing digits!, reset and try again';



            } else if (result.match(/[A-Z]/g) == false) {

                throw 'Your password does not fit the norm: Uppercase characters are missing; reset and try again';


            } else if (result.match(/[a-z]/g) == false) {

                throw 'Your password does not fit the norm:Lowercase characters are missing, reset and try again';


            } else if (result.match(/[%!)$:~#*@&]/g) == false) {

                throw 'Your password does not fit the norm:Spezial characters are missing!, reset and try again';


            } else {

            }

        }


        // text.reset();
        catch (err) {
            message.innerHTML = err;
            // resetAll();

        } finally {
            text.innerHTML = result;
            hasGenerated = true;


        }

    }
    //hasGenerated = true;
    return result;

    /* pwSpeichern(result);
    alle_PwAnzeigen(); */

}

function pwSpeichern() {

    if (hasGenerated == true) {
        text_to_save = generateString();
        //  text_to_save = document.getElementById('message').value;
        localStorage.setItem("text", text_to_save);
        alert('Your password has been saved');
        resetAll();
    } else {
        alert('could not save your password')
    }
    return true;
}

function alle_PwAnzeigen() {
    let savedPassword = "";
    savedPassword = localStorage.getItem("text"); //retrieve
    document.getElementById('PasswordStore').innerHTML = savedPassword;
    return savedPassword;
    //display
}