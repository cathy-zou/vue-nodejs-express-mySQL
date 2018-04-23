var UserSQL = {
    insert:'INSERT INTO goodsList(uid,userName) VALUES(?,?)',
    queryAll:'SELECT * FROM goodsList',
    getUserById:'SELECT * FROM goodsList WHERE id = ? ',
    queryById: 'SELECT * FROM goodsList WHERE id = ?',
    queryLike: 'SELECT * FROM goodsList WHERE title LIKE \'%?%\''
};
module.exports = UserSQL;
