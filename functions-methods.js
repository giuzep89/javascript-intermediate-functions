// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

//optie 1
function getEmailDomain(emailAddress){
    const splittingPoint = emailAddress.indexOf('@');
    return emailAddress.substring(splittingPoint + 1);

}

const emailAddress = 'n.eeken@novi-education.nl'
console.log(getEmailDomain(emailAddress));

// optie 2
function getEmailDomain2(emailaddress){
    const parts = emailaddress.split('@');
    return parts[1];
}

emailaddress = 'a.wiersma@outlook.com';
console.log(getEmailDomain2(emailaddress));


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail(emailAddress){
    if (emailAddress.includes('novi.nl')){
        return 'Medewerker';
    } else if (emailAddress.includes('novi-education.nl')){
        return 'Student';
    } else {
        return 'Extern';
    }
}

const studentAddress = 'g.rinaldi@novi-education.nl';
const workersAddress = 'l.a.hoekstra@novi.nl';
const externalAddress = 'joe_jones@outlook.nl';
console.log(typeOfEmail(studentAddress));
console.log(typeOfEmail(workersAddress));
console.log(typeOfEmail(externalAddress));


/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in


// Ik probeer een anonymous function gewoon om te oefenen
const checkEmailValidity = function (emailAddress){
     const lastCharacter = emailAddress.charAt(emailAddress.length - 1);
     // Webstorm suggereert om onderstaande if statement te versimpelen,
    // maar ik vind het dan een stuk minder duidelijk.
    //  Voor nu vind ik het zo prima
    if (emailAddress.includes('@')
        && !emailAddress.includes(',')
        && lastCharacter !== '.')
    {
        return true;
    } else {
        return false;
    }
}

const correctAddress = 'ga.rinaldi@hotmail.com';
const addressWithComma = 'ga,rinaldi@hotmail.com';
const addressWithDotAtEnd = 'ga.rinaldi@hotmailcom.'

console.log(checkEmailValidity(correctAddress));
console.log(checkEmailValidity(addressWithComma));
console.log(checkEmailValidity(addressWithDotAtEnd));