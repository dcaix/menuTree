//下面的变量tree是一个树结构,id是唯一的,树机构的层级是不固定的,要求从这个树结构中取出id==21的对象节点.

var tree = [{id: 1, name: "商铺", children: [{id: 11, name: "商铺", children: []}]}, {id: 2, name: "商铺", children: [{id: 21, name: "商铺", children: []}]}, {id: 3, name: "商铺", children: [{id: 31, name: "商铺", children: []}, {id: 32, name: "商铺", children: []}]}];
//把结果封装到一个函数里,名字叫result
function result(tree, id) {
    //定义父亲的索引值的初始值,命名主树
    var fatherIndex = "主树";
  //  递归函数menuTree用于遍历菜单树,参数tree为要遍历的树节点,fatherIndex为当前分支自定义属性index的父级index,id为需要在树种找到的条件id
    return (function menuTree(tree, fatherIndex, id) {
        for (var i = 0; i < tree.length; i++) {
            //定义自己的索引值,index表示这个对象的节点索引
            var index = i + 1;
            //当前位置等于父亲的索引加自己的索引
            tree[i].index = fatherIndex + "-" + index;
            if (tree[i].id === id) {
                //当找到相应ID值时,return对应的tree.index ,那么下面函数返回自己就是这里拿到的ID对应索引
                return tree[i].index;
            } else {
                //如果遇到children,递归,fatherIndex为本次自己的index,进入下一级函数,成为下一级的fatherIndex
                var result = menuTree(tree[i].children, tree[i].index, id);
                if (result) {
                    //这里是整个题的难点和关键点
                //当递归函数有值时,即为上面id返回的index(整个递归返回的唯一一个有意义数值),那么现在返回自己.如果没有值为undefined返回无意义,且会造成递归函数循环到底,最后menuTree为undefined
                return result
                }
            }
        }
    })(tree, fatherIndex, id);
}




