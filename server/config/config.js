/**
 * 需要检查的token的 请求地址
 */
// const verifyPath = [
//   '/api/userlist',
//   '/api/createarticle',
//   '/api/articlelist',
//   '/api/setarticle'
// ];

// const whitelist = ["http://boss.didiheng.com", "*"] //白名单

export default {
  db: {
      // url: 'mongodb://localhost:27017/herox'
      url: 'mongodb://47.106.163.14:27017/herox'
  },
  // secret: 'LiuHeng9227fe78182er',
  // port: process.env.port || '12345',
  // Imgurl: process.env.NODE_ENV === 'production' ? 'http://www.didiheng.com:8888' : `http://localhost:12345`,
  // verifyPath,
  // whitelist
}