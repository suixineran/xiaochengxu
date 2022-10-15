var express = require('express');
var mysql = require('../data/mysql-poll');
var DBSQL = require('../data/crud')
var router = express.Router();
var recordTable = new DBSQL('dw_record_work100',
    [`id`, `uid`, `record_id`, `pm2id`, `description`,
        `type_id`, `duration`, `update_at`, `create_at`,
    ])
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
    let param = req.body
    console.log('param', param)
    let keys = Object.keys(param[0]).join(',')
    let arr = []
    param.map(item => {
        let v = Object.values(item)
        v[1] = `"${v[1]}"`
        console.log('v', v)
        let s = `(${v})`
        arr.push(s)
    })
    let val = arr.join(',')

    let sql = `INSERT INTO dw_record_work100 (${keys}) VALUES ${val};`
    console.log('sql--------->', sql)
    mysql.query(sql, function (err, result) {
        responseJSON(res, result)
    })
})

// 修改
router.put('/', function (req, res, next) {
    let mysqlSQL = recordTable.update('id', req.body)
    console.log('mysqlSQL', mysqlSQL)
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