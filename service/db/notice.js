var UserSQL = {
    insert:'INSERT INTO notice(uid,userName) VALUES(?,?)',
    queryAll:'SELECT * FROM notice',
    getUserById:'SELECT * FROM notice WHERE id = ? ',
    queryById: 'SELECT * FROM notice WHERE id = ?'
};
module.exports = UserSQL;
