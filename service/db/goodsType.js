var UserSQL = {
    insert:'INSERT INTO goodsType(uid,userName) VALUES(?,?)',
    queryAll:'SELECT * FROM goodsType',
    getUserById:'SELECT * FROM goodsType WHERE id = ? ',
    queryById: 'SELECT * FROM goodsType WHERE id = ?'
};
module.exports = UserSQL;
