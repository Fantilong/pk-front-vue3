import { MockMethod } from 'vite-plugin-mock'

const prefix = '/api/v1'
const bg = '/api/image/bg.png'

export default [
  {
    url: `${prefix}/home`,
    method: 'get',
    response: ({ query }) => {
      return {
        code: 200,
        data: {
          swipers: [
            {
              image: bg,
              title: '标题1',
              subTitle: '副标题1',
              desc: '描述1',
            },
          ],
        },
      }
    },
  },
] as MockMethod[]
