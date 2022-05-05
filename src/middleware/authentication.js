import router from '@/router/index'

function AuthMiddleware(res){
    // 用于认证用户是否登录
    if (typeof res.data !== 'object') {
    ElMessage.error('服务端异常！')
    return Promise.reject(res)
    }
    if (res.status < 200 || res.status > 300) {
    if (res.data.message) ElMessage.error(res.data.message)
    if (res.data.resultCode == 419) {
        router.push({ path: '/login' })
    }
    return Promise.reject(res.data)
    }

    return res.data.data
}

export {AuthMiddleware}