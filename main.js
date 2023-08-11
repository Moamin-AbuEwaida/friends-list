const visitorPage = document.querySelector('.welcomePage');
const visitorNameBtn = document.querySelector('#visitorNameBtn');
const visitorName = document.querySelector('#visitorName');
const formTitle = document.querySelector('#formTitle');

function showVisitorPage(){
    setTimeout(()=> visitorPage.style.opacity=1, 2000)
}

showVisitorPage();

// visitorName.onclick = ()=>{
//     this.style.border = '2px solid #a6e9f5';
// }

visitorNameBtn.addEventListener('click', enterName);

function enterName(e){
    e.preventDefault();
    let visitorBtn = e.target;
    let vName = visitorBtn.parentElement.children[1].value;
    // console.log(vName);
    if (visitorName.value === ''){
        visitorPage.style.opacity = 1;
        visitorName.style.border = '2px solid red';
    } else {
        visitorPage.style.display = 'none';
        formTitle.innerHTML = `Hi ${vName}, add your friends`
    }
}


const inputName = document.getElementById('nameInput');
const inputNumber = document.getElementById('numberInput');
const addBtn = document.getElementById('addFriendBtn');
const friendsList = document.querySelector('.friendsList');
const msg = document.querySelector('.message');

inputName.addEventListener('click', function(){
    this.style.border= '2px solid #a6e9f5'
})
inputNumber.addEventListener('click', function(){
    this.style.border= '2px solid #a6e9f5'
})

addBtn.addEventListener('click', addFriendToList);

function addFriendToList(e){
    e.preventDefault();

    let btn = e.target;
    let friendName = btn.parentElement[0].value;
    let friendNumber = btn.parentElement[1].value;

    if (inputName.value === '' || inputNumber.value === ''){
        msg.classList.add('active');
        setTimeout(() => msg.remove(), 3000);
        inputName.style.border = '2px solid red';
        inputNumber.style.border = '2px solid red';
    }else {
        let newFriend = document.createElement('div');
        newFriend.classList.add('friend');
        newFriend.innerHTML = `
        <span class='friendName'>${friendName}</span>
        <span class='friendNumber'>${friendNumber}</span>
        `
        let deleteBtn = document.createElement('div');
        deleteBtn.classList.add('deleteFriend');
        deleteBtn.innerHTML = 'x';
        newFriend.append(deleteBtn);

        friendsList.append(newFriend);

        const newTitle = document.querySelector('.friendsListTitle');
        newTitle.innerHTML=`Added friend(s)`;

        deleteBtn.onclick = () => {
            newFriend.classList.add('fall');
            newFriend.addEventListener('transitionend',function(){
                newFriend.remove();
            });
        };

        inputName.value = '';
        inputNumber.value = '';
        inputName.style.border = 'none';
        inputNumber.style.border = 'none';

    }

}