import { injectGlobal } from 'styled-components'

injectGlobal`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1531197168778'); /* IE9*/
  src: url('./iconfont.eot?t=1531197168778#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1531197168778') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1531197168778#iconfont') format('svg'); /* iOS 4.1- */
}

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

