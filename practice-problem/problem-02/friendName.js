

const filterFriend = myFriend => {
    const newFriend = [];
    for (const friend of friends) {
        if (friend.length % 2 == 0) {
            newFriend.push(friend);
        }
    }
    return newFriend;
}

const friends = ["rashed", "fahad", "nayem", "raju",];

const resutl = filterFriend(friends);
console.log(resutl);