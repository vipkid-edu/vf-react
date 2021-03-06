import React from 'react'
import PropTypes from 'prop-types'
import { createVF } from '@vf.js/launcher'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <main style="width: 100%; height: 100%" ref={ el => this.el = el}/>
  }

  componentDidMount() {
    const vfConfig = Object.assign({}, {
      container: this.el
    }, this.props)

    createVF(vfConfig, player => {
      player.onReady = this.props.onReady
      player.onError = this.props.onError
      player.onDispose = this.props.onDispose
      player.onMessage = this.props.onMessage
      player.onSceneCreate = this.props.onSceneCreate
      this.props.onLoadSuccess && this.props.onLoadSuccess(player)
    }, err => {
      this.props.onLoadFail && this.props.onLoadFail(err)
    })
  }
}

App.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  debug: PropTypes.bool,
  bgcolor: PropTypes.string,
  wmode: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  logAdvancedTrace: PropTypes.bool,
  language: PropTypes.string,
  frameRate: PropTypes.number,
  scaleMode: PropTypes.string,
  play: PropTypes.bool,
  id: PropTypes.string,
  loop: PropTypes.bool,
  menu: PropTypes.bool,
  quality: PropTypes.string,
  align: PropTypes.string,
  vfvars: PropTypes.object,
  orientation: PropTypes.string,
  maxTouches: PropTypes.number,
  showFPS: PropTypes.bool,
  onLoadFail: PropTypes.func,
  onLoadSuccess: PropTypes.func,
  onReady: PropTypes.func,
  onError: PropTypes.func,
  onMessage: PropTypes.func,
  onDispose: PropTypes.func,
  onSceneCreate: PropTypes.func,
  resolution: PropTypes.number,
}
