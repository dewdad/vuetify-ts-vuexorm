module.exports = {
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