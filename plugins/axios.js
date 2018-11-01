export default function ({ $axios, redirect }) {
  $axios.baseURL = process.env.baseUrl;
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    console.log('codeOnError = '+code);
    // if (code === 400) {
    //   redirect('/400')
    // }
  })
}