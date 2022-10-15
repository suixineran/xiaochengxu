var express = require('express');
var mysql = require('../data/mysql-poll');
var DBSQL = require('../data/crud')
var router = express.Router();
var recordTable = new DBSQL('dw_record100',
    [`id`, `uid`, `at_date`, `note`, `update_at`, `create_at`,])
// 响应一个JSON数据
var responseJSON = function (res, result) {
    if (typeof result === 'undefined') {
        res.json({
            code: '-200',
            msg: '操作失败'
        });
    } else {
        let r = {
            code: 200,
            msg: '操作成功',
            data: result,
        }

        res.json(r);
    }
};

// list
router.post('/list', function (req, res, next) {
    let selectSql = recordTable.list
    mysql.query(selectSql, function (err, result) {
        // if (result) {
        //     res.json({
        //         code: '200',
        //         data: result,
        //         data1: 'detail',
        //     })
        // } else {
        //     res.json({
        //         code: '500',
        //         msg: err
        //     })
        // }
        responseJSON(res, result)
    })
});

//添加
router.post('/', function (req, res, next) {
    let mysqlSQL = recordTable.insert(req.body)
    mysql.query(mysqlSQL, function (err, result) {
        responseJSON(res, result)
    })
})

// 修改
router.put('/', function (req, res, next) {
    let mysqlSQL = recordTable.update('id', req.body)
    mysql.query(mysqlSQL, function (err, result) {
        responseJSON(res, result)
    })
})

// 删除
router.delete('/', function (req, res, next) {
    console.log('req.body.at_date', req.body.at_date)
    let mysqlSQL = recordTable.delete('at_date', req.body.at_date)
    mysql.query(mysqlSQL, function (err, result) {
        responseJSON(res, result)
    })
})

// 详情接口
router.get('/:at_date', function (req, res, next) {
    let selectSql = '';
    let at_date = req.params.at_date
    if (at_date) {
        selectSql = recordTable.select('at_date', at_date)
    }
    mysql.query(selectSql, function (err, result) {
        responseJSON(res, result)
    })
});


module.exports = router;