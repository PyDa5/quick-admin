function getComponetName(path){
    path = path.trim()
    if(path.startsWith('/')){
        path= path.slice(1)
    }
    if(path.endsWith('/')){
        path= path.slice(0, -1)
    }
    var path_sep = path.split('/')
    var componet_name = path_sep.pop()

    path_sep.push(componet_name.slice(0, 1).toUpperCase() + componet_name.slice(1))
    return path_sep.join('/')
}


function path_route(path, name){
    console.log(`../views/${getComponetName(path)}.vue`)
    return {
        path: path,
        name: name,
        component: () => import(`../views/${getComponetName(path)}.vue`)
    }
}

export {
    path_route
}
