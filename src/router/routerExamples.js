/**
 * 驼峰式命名
 * eg:component : indexIndex1 , name: index-index1
 * @param r
 */

const index = r => require(['../app/index/index.js'], r)

let routes = [
  {
    path: '/',
    label: '',
    uri: '/',
    component: index,
    name: 'index'
  }
]
export default routes
