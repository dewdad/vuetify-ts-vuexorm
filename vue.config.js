module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/vuetify-ts-vuexorm/'
    : '/',
  devServer: {
    disableHostCheck: true
  },
  pwa: {
    name: 'FlexPay',
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    }
  },
}