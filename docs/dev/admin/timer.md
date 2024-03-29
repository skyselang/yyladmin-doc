# 定时任务

## 定时任务

### 添加定时操作
在 app\command\Timer 的 start 方法中添加需要定时执行的操作  
app\command\Timer
```php
try {
    // 会员日志清除
    LogService::clearLog();
} catch (\Exception $e) {
    echo 'timer member-log-clear ' . $e->getMessage() . PHP_EOL;
}
```

### 开启定时任务
#### 开发模式开启
```bash
php think timer
```
> debug 模式，开发调试使用

#### 守护进程方式开启
```bash
php think timer -m d
```
> daemon 模式，正式部署使用

#### 守护进程并设置间隔时间开启
```bash
php think timer -m d -i 1
```
> -i 1，间隔时间为1秒，即每秒执行一次  
> 设置：开启时传入参数或在 app\command\Timer 修改

### 查看定时任务参数
```bash
php think timer --help
```

```bash
Usage:
  timer [options] [--] [<action>]

Arguments:
  action                     start|stop|restart|reload|status|connections [default: "start"]

Options:
  -m, --mode[=MODE]          守护进程方式启动（-m d）
  -i, --interval[=INTERVAL]  多长时间执行一次（秒）
  -h, --help                 Display this help message
  -V, --version              Display this console version
  -q, --quiet                Do not output any message
      --ansi                 Force ANSI output
      --no-ansi              Disable ANSI output
  -n, --no-interaction       Do not ask any interactive question
  -v|vv|vvv, --verbose       Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
```

::: warning 注意
确保执行命令的用户有足够权限或添加 sudo
:::
