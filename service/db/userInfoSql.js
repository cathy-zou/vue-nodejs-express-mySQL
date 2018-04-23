var UserSQL = {
    insert:'INSERT INTO usersInfo(uid,userName) VALUES(?,?)',
    queryAll:'SELECT * FROM usersInfo',
    getUserById:'SELECT * FROM usersInfo WHERE id = ? ',
    queryById: 'SELECT * FROM usersInfo WHERE id = ?'
};
module.exports = UserSQL;
