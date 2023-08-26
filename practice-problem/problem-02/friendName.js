

const filterFriend = myFriend => {
    const newFriend = [];
    for (const friend of myFriend) {
        if (friend.length % 2 == 0) {
            newFriend.push(friend);
        }
    }
    return console.log(newFriend);
}

const friends = ["rashed", "fahad", "nayem", "raju",];

const resutl = filterFriend(friends);
// console.log(resutl);