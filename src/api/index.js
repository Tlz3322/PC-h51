import request from '../pages/untils/request'

export default {
  login(data) {
    return request.post('/login', data)
  },
  Index() {
    return request.get('/Index/index')
  },
  h5Companion() {
    return request.get('/h5/companion')
  },
  createOrder(data) {
    return request.post('/createOrde', data)
  },
  orderList(params) {
    return request.get('/order/list', { params })
  },
  orderDetail(params) {
    return request.get('/order/detail', { params })
  }
}
