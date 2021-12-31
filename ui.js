class chatUI{
    constructor(list){
        this.list=list;

    }
    clearit(){
        this.list.innerHTML='';
        //chatbox.updateRoom(e.target.getAttribute("id"));
    }
    render(data){
        const user=data.username.toUpperCase();
        const when = dateFns.distanceInWordsToNow(
            data.created_at.toDate(),
            { addSuffix:true }
          );
        const html=`<li class="list-group-item>
        <span class="username" style="color:#FF5677">${user}</span>
        <br>
        <span class="message" style="color:black">${data.message}</span>
        <div class="time">${when}</div>
        </li>`;
        this.list.innerHTML+=html;
    }
}
