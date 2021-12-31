// dom queries 
const classList=document.querySelector(".chat-list");
const newChatForm=document.querySelector(".new-chat");
const newForm= document.querySelector(".new-name");
const rooms = document.querySelector(".chat-rooms");
;
const updateMssg=document.querySelector(".update-mssg");
newForm.addEventListener("submit",e=>{
    e.preventDefault();
    const newName= newForm.name.value.trim();
    // updating name in the chatbox
    chatbox.updateName(newName);
    //reset the form 
    newForm.reset();
    //show then hide the update msg 
    updateMssg.innerText=`Your name was updated to ${newName} `;
  setTimeout(()=>
        updateMssg.innerText="",3000 );


})


//class instants
const chatui=new chatUI(classList);
const username=localStorage.username?localStorage.username:"annonymous";
const chatbox= new Chatbox("confessions",username);

//get chats and render 
chatbox.getChats(data=> chatui.render(data));
newChatForm.addEventListener("submit",  e=>{
    e.preventDefault();
    const message= newChatForm.message.value.trim();
   console.log(message); 

    chatbox.addChat(message).then(()=>{newChatForm.reset()})
    .catch((err)=>console.log(err));
});
//update the rooms

rooms.addEventListener("click",e=>{
    if(e.target.tagName==="BUTTON"){
        chatui.clearit();
        chatbox.updateRoom(e.target.getAttribute("id"));
        chatbox.getChats(chat=>chatui.render(chat));
    }
});