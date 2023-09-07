import Mockjs from 'mockjs'

export const userInfo = Mockjs.mock({
  id: '@uuid',
  name: '@name',
  permissions: ['user-confirm']
})

export const projectList = Mockjs.mock({
  'list|10': [
    {
      id: '@uuid',
      name: '@name'
    }
  ],
  total: '@integer(10, 100)'
})
