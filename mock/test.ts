// test.ts

import { MockMethod, MockConfig } from 'vite-plugin-mock'
import path from 'path'
import fs from 'fs'
export default [
  {
    url: '/api/get',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 0,
        data: {
          name: 'vben',
        },
      }
    },
  },
  {
    url: '/api/post',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: 'vben',
      },
    },
  },
  {
    url: '/api/text',
    method: 'post',
    rawResponse: async (req, res) => {
      let reqbody = ''
      await new Promise((resolve) => {
        req.on('data', (chunk) => {
          reqbody += chunk
        })
        req.on('end', () => resolve(undefined))
      })
      res.setHeader('Content-Type', 'text/plain')
      res.statusCode = 200
      res.end(`hello, ${reqbody}`)
    },
  },
  {
    url: '/api/image/:imageName',
    method: 'get',
    rawResponse: async (_req, res) => {
      const imageName = _req.url.replace('/api/image/', '')
      const imagePath = path.join(__dirname, 'assets', imageName)
      debugger

      fs.readFile(imagePath, (err, data) => {
        if (err) {
        } else {
          res.setHeader('Content-Type', 'image/jpeg')
          res.statusCode = 200
          res.end(data)
        }
      })
    },
  },
] as MockMethod[]

// export default function (config: MockConfig) {
//   return [
//     {
//       url: '/api/text',
//       method: 'post',
//       rawResponse: async (req, res) => {
//         let reqbody = ''
//         await new Promise((resolve) => {
//           req.on('data', (chunk) => {
//             reqbody += chunk
//           })
//           req.on('end', () => resolve(undefined))
//         })
//         res.setHeader('Content-Type', 'text/plain')
//         res.statusCode = 200
//         res.end(`hello, ${reqbody}`)
//       },
//     },
//   ]
// }
