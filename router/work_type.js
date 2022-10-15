var express = require('express');
var mysql = require('../data/mysql-poll');
var DBSQL = require('../data/crud')
var router = express.Router();
var recordTable = new DBSQL('dw_work_type100',
    [`id`, `pid`, `name`, `code`])
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
        responseJSON(res, result)
    })
});

//添加
router.post('/', function (req, res, next) {
    console.log('add', req.body)
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
    console.log('req.body.at_date', req.body.id)
    let mysqlSQL = recordTable.delete('id', req.body.id)
    mysql.query(mysqlSQL, function (err, result) {
        responseJSON(res, result)
    })
})

// 详情接口
router.get('/:id', function (req, res, next) {
    let selectSql = '';
    let id = req.params.id
    if (id) {
        selectSql = recordTable.select('id', id)
    }
    mysql.query(selectSql, function (err, result) {
        responseJSON(res, result)
    })
});


module.exports = router;











