var express = require('express');
var router = express.Router();
// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../db/DBConfig');
var userSQL = require('../db/notice');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool( dbConfig.mysql );
// 响应一个JSON数据
var responseJSON = function (res, ret) {
    if(typeof ret === 'undefined') {
        res.json({     code:'-200',     msg: '操作失败'
        });
    } else {
        res.json(ret);
    }};
// 获取用户信息
router.get('/getNotice',function (req, res ,next) {
    // 从连接池获取连接
    pool.getConnection(function(err, connection) {
// 获取前台页面传过来的参数
        var param = req.query || req.params;

        connection.query(userSQL.queryAll, [param.id], function(err, result) {
            if(result) {
                var data = {
                    code: 200,
                    msg:'获取成功',
                    data: result
                };
                res.send(data);
            } else {
                var data = {
                    code: '-200',
                    msg: '找不到该条数据'
                }
                res.send(data)
            }
            // 释放连接
            connection.release();
        });
    });
});

module.exports = router;
