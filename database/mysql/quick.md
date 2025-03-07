# 表结构

```sql
create table table_name
(
    id           bigint unsigned auto_increment,
    #todo
    PRIMARY KEY (`id`)
);
```

# 为所有表添加gmtcreate,update,deleted字段

```sql
-- 运行下面sql添加存储过程之后
call AddFixedFields('database_name')
```

```sql
drop procedure if exists  AddFixedFields;
DELIMITER $$

CREATE PROCEDURE AddFixedFields(IN dbName VARCHAR(255))
BEGIN
    DECLARE done INT DEFAULT 0;
    DECLARE tableName VARCHAR(255);
    DECLARE columnCount INT;

    DECLARE cur CURSOR FOR
        SELECT TABLE_NAME 
        FROM INFORMATION_SCHEMA.TABLES
        WHERE TABLE_SCHEMA = dbName;
        
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

    OPEN cur;

    read_loop: LOOP
        FETCH cur INTO tableName;
        IF done THEN
            LEAVE read_loop;
        END IF;

        -- Check if 'gmt_create' column exists
        SET @stmt = CONCAT(
            'SELECT COUNT(*) INTO @columnCount FROM INFORMATION_SCHEMA.COLUMNS ',
            'WHERE TABLE_SCHEMA = ''', dbName, ''' AND TABLE_NAME = ''', tableName, ''' ',
            'AND COLUMN_NAME = ''gmt_create'';'
        );
        PREPARE checkStmt FROM @stmt;
        EXECUTE checkStmt;
        DEALLOCATE PREPARE checkStmt;

        IF @columnCount = 0 THEN
            SET @stmt = CONCAT('ALTER TABLE ', dbName, '.', tableName, ' ADD COLUMN gmt_create DATETIME DEFAULT CURRENT_TIMESTAMP;');
            PREPARE alterStmt FROM @stmt;
            EXECUTE alterStmt;
            DEALLOCATE PREPARE alterStmt;
        END IF;

        -- Check if 'gmt_modified' column exists
        SET @stmt = CONCAT(
            'SELECT COUNT(*) INTO @columnCount FROM INFORMATION_SCHEMA.COLUMNS ',
            'WHERE TABLE_SCHEMA = ''', dbName, ''' AND TABLE_NAME = ''', tableName, ''' ',
            'AND COLUMN_NAME = ''gmt_modified'';'
        );
        PREPARE checkStmt FROM @stmt;
        EXECUTE checkStmt;
        DEALLOCATE PREPARE checkStmt;

        IF @columnCount = 0 THEN
            SET @stmt = CONCAT('ALTER TABLE ', dbName, '.', tableName, ' ADD COLUMN gmt_modified DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;');
            PREPARE alterStmt FROM @stmt;
            EXECUTE alterStmt;
            DEALLOCATE PREPARE alterStmt;
        END IF;

        -- Check if 'deleted' column exists
        SET @stmt = CONCAT(
            'SELECT COUNT(*) INTO @columnCount FROM INFORMATION_SCHEMA.COLUMNS ',
            'WHERE TABLE_SCHEMA = ''', dbName, ''' AND TABLE_NAME = ''', tableName, ''' ',
            'AND COLUMN_NAME = ''deleted'';'
        );
        PREPARE checkStmt FROM @stmt;
        EXECUTE checkStmt;
        DEALLOCATE PREPARE checkStmt;

        IF @columnCount = 0 THEN
            SET @stmt = CONCAT('ALTER TABLE ', dbName, '.', tableName, ' ADD COLUMN deleted TINYINT(1) DEFAULT 0 COMMENT ''0 未删除; null 已删除'';');
            PREPARE alterStmt FROM @stmt;
            EXECUTE alterStmt;
            DEALLOCATE PREPARE alterStmt;
        END IF;
    END LOOP;

    CLOSE cur;
END$$

DELIMITER ;
```