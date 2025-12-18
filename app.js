import { auth, createUserWithEmailAndPassword, db, doc, onAuthStateChanged, setDoc } from "./config.js";

function checkUserState() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            console.log("user mojood hai" , uid)
                window.location.replace("./dashboard.html")
        } else {
            console.log("user mojoood nh he")
            // User is signed out
            // ...
        }
    });

}
checkUserState()
let email = document.getElementById("email");
let password = document.getElementById("password");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let phoneNumber = document.getElementById("phoneNumber");
let signupBtn = document.getElementById("signup-btn"); 

const loadingCard = document.getElementById("loadingCard"); 
const form = document.querySelector(".form"); 

function showLoading() {
    loadingCard.classList.add('active'); 
}

function hideLoading() {
    loadingCard.classList.remove('active');
    form.classList.remove('disabled');
}


window.signUp = async (event) => {
    event.preventDefault();     
    showLoading(); 
    try {
        console.log("Account create ho raha hai...");
        
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        const user = userCredential.user;
        
        console.log("User create ho gaya:", user.uid);

        await saveDataToDb(firstName, lastName, email, phoneNumber, user.uid);

        console.log("Sab kuch sahi chal gaya, ab redirect kar rahe hain...");
        
        
        window.location.replace("./dashboard.html"); 

    } catch (error) {
        const errorMessage = error.message;
        console.log("Masla agaya hai:", errorMessage);
        alert(errorMessage); 
        
        hideLoading(); 
    
    }
}

async function saveDataToDb(firstName, lastName, email, phoneNumber, userId) {
    console.log("Database mein data ja raha hai...");
    
    await setDoc(doc(db, "users", userId), {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
        userId: userId,
    });

    console.log("Data saved successfully!");
}
