var express = require('express');
var router = express.Router();
// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../db/DBConfig');
var userSQL = require('../db/goodList');
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
// 获取轮播图
router.get('/getIntroduceList',function (req, res ,next) {
    // 从连接池获取连接
    pool.getConnection(function(err, connection) {
// 获取前台页面传过来的参数
        connection.query(userSQL.queryAll, function(err, result) {
            if(result) {
                let id = Math.floor(Math.random() * 10)
                let randomResult = result.slice(id, id + 5)
                var data = {
                    code: 200,
                    msg:'获取成功',
                    data: randomResult
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
// 获取商品列表
router.post('/getList',function (req, res ,next) {
    // 从连接池获取连接
    pool.getConnection(function(err, connection) {
// 获取前台页面传过来的参数
        var param = req.body;
        console.log(param)
        connection.query(userSQL.queryLike, [param.query], function(err, result) {
            console.log(err)
            if(result) {
                var data = {
                    code: 200,
                    msg:'获取成功',
                    data: result
                };
                res.send(data);
                console.log(data)
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
