import * as data from './data'

const rules = [
  {
    url: '/user/current',
    response: () => {
      return data.userInfo
    }
  }
]

rules.forEach(item => {
  item.url = '/mock' + item.url
})

export default rules
