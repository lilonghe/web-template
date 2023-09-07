import * as data from './data'

const rules = [
  {
    url: '/user/current',
    mock: () => {
      return data.userInfo
    }
  },
  {
    url: '/projects',
    mock: () => {
      return data.projectList
    }
  }
]

rules.forEach((item) => {
  item.url = '/mock' + item.url
  item.rawResponse = async (req, res) => {
    const data = item.mock?.()
    await new Promise((resolve) => {
      req.on('end', () => resolve(data))
      setTimeout(() => {
        res.end(JSON.stringify(data))
      }, getRandom(50, 1000))
    })
  }
})

export default rules

function getRandom (n, m) {
  const num = Math.floor(Math.random() * (m - n + 1) + n)
  return num
}
