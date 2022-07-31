var intro = "Xush kelibsiz !";
var name = "Ismingiz ?";
var lastName = "Familyangiz ?";
var age = "Yoshingiz ?";
var birthday = "Tug'ilgan kuningiz ?";
var phoneNumber = "Telefon raqamingiz ?";
var gmail = "E-mail yoki g-mailingizni kiriting ?";
var address = "Manzilingiz ?";
var conditions = "Shaxsiy sharoitingiz ?";
var workplace = "Ish joyingiz ?";
var studyplace = "O'quv joyingiz ?";
var footer = "Malumotlar uchun raxmat !";



var alertIntro = alert(intro);
var answerName = prompt(name).trim();
var answerLastName = prompt(lastName).trim();
var answerAge = prompt(age).trim();
var answerBirthday = prompt(birthday).trim();
var answerPhoneNumber = prompt(phoneNumber).trim();
var answerGmail = prompt(gmail).trim();
var answerAddress = prompt(address).trim();
var answerConditions = prompt(conditions).trim();
var answerWorkplace = prompt(workplace).trim();
var answerStudyplace = prompt(studyplace).trim();
var alertFooter = alert(footer);



console.log(`Foydalanuvchi ma'lumotlari:

Foydalanuvchining ismi: ${answerName}.
${answerName}ning familiyasi: ${answerLastName}.
Uning yoshi: ${answerAge}ga teng. 
Uning tug'ilgan kuni: ${answerBirthday}.
Uning telefon raqami: ${answerPhoneNumber}.
Uning e-mail yoki g-mail manzili: ${answerGmail}.
Uning yashash joyi: ${answerAddress}.
Uning shaxsiy sharoiti: ${answerConditions}.
Ish joyi: ${answerWorkplace}.
O'qish joyi: ${answerStudyplace}.`);



var paragraphName = document.createElement("p");
paragraphName.textContent = `Foydalanuvchining ismi: ${answerName} !`;
document.body.appendChild(paragraphName);

var paragraphLastName = document.createElement("p");
paragraphLastName.textContent = `Foydalanuvchining familiyasi: ${answerLastName} !`;
document.body.appendChild(paragraphLastName);

var paragraphAge = document.createElement("p");
paragraphAge.textContent = `Foydalanuvchining yoshi: ${answerAge}ga teng !`;
document.body.appendChild(paragraphAge);

var paragraphBirthday = document.createElement("p");
paragraphBirthday.textContent = `Foydalanuvchining tug'ilgan kuni: ${answerBirthday} !`;
document.body.appendChild(paragraphBirthday);

var paragraphPhoneNumber = document.createElement("p");
paragraphPhoneNumber.textContent = `Foydalanuvchining telefon raqami: ${answerPhoneNumber} !`;
document.body.appendChild(paragraphPhoneNumber);

var paragraphGmail = document.createElement("p");
paragraphGmail.textContent = `Foydalanuvchining e-mail yoki g-mail manzili: ${answerGmail} !`;
document.body.appendChild(paragraphGmail);

var paragraphAddress = document.createElement("p");
paragraphAddress.textContent = `Foydalanuvchining yashash manzili: ${answerAddress} !`;
document.body.appendChild(paragraphAddress);

var paragraphConditions = document.createElement("p");
paragraphConditions.textContent = `Foydalanuvchining shaxsiy sharoiti: ${answerConditions} !`;
document.body.appendChild(paragraphConditions);

var paragraphWorkplace = document.createElement("p");
paragraphWorkplace.textContent = `Foydalanuvchining ish joyi: ${answerWorkplace} !`;
document.body.appendChild(paragraphWorkplace);

var paragraphStudyplace = document.createElement("p");
paragraphStudyplace.textContent = `Foydalanuvchining o'quv joyi: ${answerStudyplace} !`;
document.body.appendChild(paragraphStudyplace);