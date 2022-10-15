var express = require('express')
// 导入中间件
const cors = require('cors')

// 1. 导入解析表单数据的中间件 body-parser
const parser = require('body-parser')
//5.引入路由模块并使用app.use()函数注册路由模块

const record = require('./router/record.js');
const dwWorkType = require('./router/work_type');
const recordWork = require('./router/record_work');

//创建你服务器应用程序
//也就是原来的http.createServer
var app = express()

//  使用 app.use() 注册中间件
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.use(cors())  // 解决跨域问题


// app.use(parser.urlencoded({ extended: true }))
// 是否进行url解码
app.use(parser.urlencoded({extended: false}))
// app.use(bodyParser.urlencoded({ extended: false }));
// 将数据转换为json格式
app.use(parser.json())


//多个全局生效的中间件  //会按照定义中间件的顺序来执行
app.use((req, res, next) => {
    // console.log('第一个中间件')
    next();
});
app.use((req, res, next) => {
    // console.log('第二个中间件')
    next();
});


app.use('/record', record);
app.use('/dw-work-type', dwWorkType);
app.use('/record-work', recordWork);


// 2. 定义错误级别的中间件，捕获整个项目的异常错误，从而防止程序的崩溃
// app.use((err, req, res, next) => {
//     console.log('发生了错误！' + err.message)
//     res.send('Error：' + err.message)
// })


// 导入路由模块
// const router = require('router')
// // 把路由模块，注册到 app 上
// app.use('/api', router)


// 配置解析表单数据的中间件
// app.use(express.urlencoded({ extended: false }))
//
//
// // app.use('/public/',express.static('./public'))
//
// app.get('/',function(req,res){
//     res.send('hello express--------8888-')
// })


// app.get('请求url', (req, res) => {
//     console.log({req})
//     console.log({res})
// });
// app.post('请求url', (req, res) => {
// });


// app.get('/user', (req, res) => {
//     console.log(req.query);
//     res.send(req.query);
// });
//
//
// app.get('/:ids/:username', (req, res) => {
//     console.log(req.params);
//     res.send(req.params)
// });


// 注意：除了错误级别的中间件，其他的中间件，必须在路由之前进行配置
// // 通过 express.json() 这个中间件，解析表单中的 JSON 格式的数据
// app.use(express.json())
// // 通过 express.urlencoded() 这个中间件，来解析 表单中的 url-encoded 格式的数据
// app.use(express.urlencoded({ extended: false }))
//
// app.post('/user', (req, res) => {
//     // 在服务器，可以使用 req.body 这个属性，来接收客户端发送过来的请求体数据
//     // 默认情况下，如果不配置解析表单数据的中间件，则 req.body 默认等于 undefined
//     console.log(req.body)
//     res.send('ok')
// })
//
// app.post('/book', (req, res) => {
//     // 在服务器端，可以通过 req,body 来获取 JSON 格式的表单数据和 url-encoded 格式的数据
//     console.log(req.body)
//     res.send('ok')
// })


app.use((err, req, res, next) => {
    console.log('err----', err)
    console.log('发生了错误！' + err.message)
    return res.send('Error：' + err.message)
})


app.listen(3000, function () {
    console.log('点击http://127.0.0.1:3000/ 服务启动成功！！！！');
})
