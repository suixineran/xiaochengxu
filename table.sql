//成功

DROP TABLE IF EXISTS`dw_record`;
CREATE TABLE `dw_record100` (
`id` int(10) UNSIGNED NOT NULL COMMENT 'ID',
`uid` varchar(50) NOT NULL DEFAULT '' COMMENT '用户ID',
`at_date` date NOT NULL DEFAULT '1000-01-01' COMMENT '日期',
`note` varchar(2048) NOT NULL DEFAULT '' COMMENT '备注',
`update_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新时间',
`create_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '创建时间'
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- 表的结构`dw_record_work
DROP TABLE IF EXISTS `dw_record_work`;
CREATE TABLE `dw_record_work_01` (
`id` int(10) UNSIGNED NOT NULL COMMENT 'ID',
`uid` varchar(58) NOT NULL DEFAULT '' COMMENT '用户ID',
`record_id` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '所属日志ID',
`pm2id` int(10)UNSIGNED NOT NULL DEFAULT 0 COMMENT '关联的PM2任务单ID',
`description` varchar(2048) NOT NULL DEFAULT '' COMMENT '事务摄述',
`type_id` int(10) UNSIGNED NOT NULL DEFAULT O COMMENT '事务类型ID',
`duration` smallint(6) NOT NULL DEFAULT O COMMENT '事务耗时(单位:分钟)',
`update_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新时间',
`create_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '创建时间'
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='日志中的任务数据表';



oooooooo
CREATE TABLE `dw_record_work100` (
`id` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT 'ID' ,
`uid` varchar(50) NOT NULL DEFAULT '' COMMENT '用户ID',
`record_id` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '所属日志ID',
`pm2id`  int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '关联的PM2任务单ID',
`description` varchar(2048) NOT NULL DEFAULT '' COMMENT '事务摄述',
`type_id` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '事务类型ID' ,
`duration` smallint(6) NOT NULL DEFAULT 0 COMMENT '事务耗时(单位:分钟)',
`update_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新时间',
`create_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '创建时间'
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;




INSERT INTO `dw_work_type100` (`id`,`pid`,`name`, `code`) VALUES(1, 0, "需求与目标管理',"'),(2, 1 ,"需求评估" ,"rqe'),(3, 1, 需求分析' ,'rga');



-- 表的结构`dw_work_type
//成功
DROP TABLE IF EXISTS 'dw_work_type100';
CREATE TABLE `dw_work_type100` (
`id` int(10) UNSIGNED NOT NULL,
`pid` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '上级ID',
`name` varchar(255) NOT NULL DEFAULT '' COMMENT '类型名称',
`code` varchar(20) NOT NULL DEFAULT '' COMMENT '类型代号'
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='事务类型表';



//成功

CREATE TABLE `dw_work_type`(
 `id` int(10) UNSIGNED NOT NULL ,
 `pid` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '上级ID' ,
 `name` varchar(255) NOT NULL DEFAULT '' COMMENT '类型名称',
 `code` varchar(20) NOT NULL DEFAULT '' COMMENT '类型代号'

)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;