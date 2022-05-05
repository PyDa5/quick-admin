import { ElMessage } from 'element-plus'
import router from '@/router/index'

const HTTP_403_UNAUTHORIZATION = 403

function AuthMiddleware(res){
    // 用于认证用户是否登录
    if (typeof res.data !== 'object') {
        ElMessage.error('服务端异常！')
        return Promise.reject(res)
    }
    if (res.status == HTTP_403_UNAUTHORIZATION) {
        if (res.data.message) ElMessage.error(res.data.message)
        router.push({ path: '/login' })
        return Promise.reject(res.data)
    }

    return res.data.data
}

export {AuthMiddleware}