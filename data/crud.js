// 每张表的增删改查询

function DBSQL(dbname, arguments) {
    var index = '';
    var value = '';
    this.list = `SELECT * from ${dbname};`; //列表查询
    this.arguments = arguments
    var that = this
    this.insert = function (args) {
        index = '';
        value = '';
        args = filter1(that.arguments, args)
        for (let key in args) {
            index = `${index}${key},`
            value = `${value}${args[key]},`
        }
        index = index.substr(0, index.length - 1);
        value = value.substr(0, value.length - 1);

        let s = `INSERT INTO ${dbname} (${index}) VALUES(${value})`
        console.log('s',s)
        return s
    };
    this.insertBatch = function (keys,) {

        // let s = `INSERT INTO ${dbname} (${keys}) VALUES(${value})`;
        // console.log('s', s)
        // return s
    };

    //按需增加
    this.select = function (index, value) {
        return `SELECT * from ${dbname} where ${index}='${value}';` //按需查询
    };
    this.delete = function (index, value) {
        return `DELETE from ${dbname} where ${index}='${value}';` //按需删除
    };
    this.update = function (index, params) { //提交修改
        if (index in params) {
            value = '';
            params = filter(that.arguments, params)
            for (let key in params) {
                value = `${value}${key}='${params[key]}',`
            }
            value = value.substr(0, value.length - 1)
            return `UPDATE ${dbname} SET ${value} WHERE ${index}=${params[index]};`
        }
    };
};

function filter(arguments, obj) {
    let newObj = {}
    arguments.forEach(every => {
        if (every in obj) {
            newObj[every] = `${obj[every]}`
        }
    });
    return newObj;
};

function filter1(arguments, obj) {
    let newObj = {}
    arguments.forEach(every => {
        if (every in obj) {
            newObj[every] = `"${obj[every]}"`
        }
    });
    return newObj;
};
module.exports = DBSQL;