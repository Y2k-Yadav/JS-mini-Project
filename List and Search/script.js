//list 
// filter



let userContainer = document.getElementById('userList');
let searchInput = document.getElementById('searchInput');


// database which consists of all values
const user = [

    {
        profileUrl: 'https://i.pravatar.cc/50?img=12',
        name: 'mahesh',
        email: 'ka36mahesh@gamil.com'
    },
    {
        profileUrl: 'https://i.pravatar.cc/50?img=13',
        name: 'shivalinga',
        email: 'shivalinga@email.com'
    },
    {
        profileUrl: 'https://i.pravatar.cc/50?img=14',
        name: 'advith',
        email: 'advithyadav@zahoo.com'
    },
    {
        profileUrl: 'https://i.pravatar.cc/50?img=55',
        name: 'hanumantha',
        email: 'kunna12@priv.com'
    },
    {
        profileUrl: 'https://i.pravatar.cc/50?img=51',
        name: 'virat venkat',
        email: 'vk18virat@yahoo.com'
    }, {
        profileUrl: 'https://i.pravatar.cc/50?img=17',
        name: 'abhishek',
        email: 'abhi_rcr@gamil.com'
    }, {
        profileUrl: 'https://i.pravatar.cc/50?img=64',
        email: 'noNameHere@test.com'
    },
    {
        profileUrl: 'https://i.pravatar.cc/50?img=68',
        name: 'no email exist '
    }

]

// Taking the value from searchInput
searchInput.addEventListener('input', handleSearch)

// adding the list of items in userContainer
function renderUsers(arr) {
    console.log(arr);
    userContainer.innerHTML = ''
    arr.map(item => {

        let { profileUrl
            , name, email } = item
        let divElement = document.createElement('div');
        divElement.className = 'user-item'
        divElement.innerHTML =
            `
                                            <img src="${profileUrl}" alt="user" class="user-img">
                                            <div class="user-info">
                                                <p class="user-name">${name}</p>
                                                <p class="user-email">${email}</p>
                                            </div>
                                            
                                        `


        userContainer.append(divElement)

    })
}

renderUsers(user);

// handle search function 

function handleSearch(e) {
    // let value = searchInput.value
    // or
    let searchvalue = e.target.value.replaceAll(' ', '');

    let filteruser = user.filter(obj => {
        let nameMatch = obj.name ? obj.name.replaceAll(' ', '').toLowerCase().includes(searchvalue.toLowerCase()) : false;
        let emailMatch = obj.email ? obj.email.toLowerCase().includes(searchvalue.toLowerCase()) : false;
        return nameMatch || emailMatch;
    });
    if (filteruser.length != 0) {

        renderUsers(filteruser)
    }
    else {
        userContainer.innerHTML = `<p style="text-align:center; font-weight:900">No user found</p>`
    }


}


