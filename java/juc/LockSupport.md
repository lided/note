# 背景

wait/notify,await/signal 使用时必须在同步代码快中,并且顺序不能变,有很大的限制

# locksupport

###### 为什么可以不用遵守调用顺序?

locksupport有一个通行凭证来确定线程是否阻塞,可以先unpark获得凭证,当再次park阻塞时就会直接放行(不会阻塞)

###### 为什么连续unpark俩次后不能park俩次?

凭证最多只能有一个