const users = [];
function joinUser(id,username,room)
{
    const user = {id,username,room};
    users.push(user);
    return user;
}
// getting current user
function getCurrentUser(id)
{
    return users.find(user => user.id === id);
}
// user leaving the chat
function leaveUser(id)
{
    const index = users.findIndex(user => user.id === id);
    if(index!=-1)
    {
        return users.splice(index,1)[0];
    }
}

// getting room users
function getRoomUsers(room)
{
    return users.filter(user => user.room === room);
}


// exporting
module.exports = {
    joinUser,
    leaveUser,
    getCurrentUser,
    getRoomUsers
};