// 把view下所有的vue文件都导入
const modules = import.meta.glob("../views/**/**.vue")

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
    return {
        path: path,
        name: name,
        component: modules[`../views/${getComponetName(path)}.vue`]
    }
}

export {
    path_route
}
