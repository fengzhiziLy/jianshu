####

使用styled-components对样式进行管理

```js
import { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: green;
  }
`
```

运行reset.css适配任何浏览器的效果