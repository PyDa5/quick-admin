function simple_route(component_name){
    // 简单路由映射
    return {
        path: '/'+component_name.slice(0, 1).toUpperCase() + component_name.slice(1),
        name: component_name,
        component: () => import(`../views/${component_name}.vue`)
    }
}

export {
    simple_route
}
