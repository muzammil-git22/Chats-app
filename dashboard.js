import { auth, getDocs, signOut, collection, db, onAuthStateChanged, query, where } from "./config.js";
let currentUserId = null; 
window.logOut = () => {
    signOut(auth).then(() => {
        window.location.replace('./Signin.html');
    }).catch((error) => {
        console.log(error.message);
    });
}
function getUser() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            currentUserId = user.uid; 
            console.log("User logged in:", user);
            checkUserState(currentUserId); 
        } else {
            console.log("User logged out.");
            window.location.replace('./Signin.html'); 
        }
    });
}
getUser(); 
window.openChat = (friendId, friendName) => { 
    
    console.log("Chat View open ho raha hai:", friendName, "ID:", friendId);
    
    const defaultView = document.getElementById('default-chat-view');
    if (defaultView) {
        defaultView.classList.add('hidden');
    }

    const chatWindow = document.getElementById('chat-window-view');
    if (chatWindow) {
        chatWindow.classList.remove('hidden');
    }

    const chatHeader = document.getElementById('chat-header-name');
    if (chatHeader) {
        chatHeader.textContent = friendName;
    }
    document.getElementById('current-friend-id').textContent = friendId;
}

async function checkUserState(currentUserId) {
    const q = query(collection(db, "users"), where("userId", "!=", currentUserId)); 
    const querySnapshot = await getDocs(q);
    
    let friendContainer = document.getElementById("friend-container"); 
    friendContainer.innerHTML = ''; 

    querySnapshot.forEach((doc) => {
        const userData = doc.data();
        const friendId = userData.userId; 
        const friendFullName = `${userData.firstName} ${userData.lastName}`; 
        friendContainer.innerHTML += ` 
            <div 
                onclick="openChat('${friendId}', '${friendFullName}')" 
                class="flex items-center px-3 py-3 hover:bg-[#202c33] cursor-pointer group"
            >
                <img src="${"https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 7) + 1}"}" class="w-12 h-12 rounded-full mr-3">
                <div class="flex-1 border-b border-[#2f3b43] pb-3 group-hover:border-transparent">
                    <div class="flex justify-between items-baseline">
                        <h2 class="text-[#e9edef] text-[17px]">${friendFullName}</h2>
                        <span class="text-[#aebac1] text-xs">New Chat</span>
                    </div>
                    <p class="text-[#aebac1] text-sm truncate mt-1">${userData.phoneNumber || 'Click to Chat'}</p>
                </div>
            </div>`;
    });
}