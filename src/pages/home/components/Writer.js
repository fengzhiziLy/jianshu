import React, { PureComponent } from 'react'
import { WriterWrapper } from '../style'

class Writer extends PureComponent {
  render () {
    return (
      <WriterWrapper>
        <img className="write-img" src="http://pic.58pic.com/58pic/13/81/48/15T58PICNcG_1024.jpg"  alt=""/>
        <div className="info">
          <div>扫描二维码，加我微信</div>
          <div className="desc">随时可以加我为好友</div>
        </div>
      </WriterWrapper>
    )
  }
}

export default Writer