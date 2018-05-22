import React from 'react'
import { render } from 'react-dom'

/**
 * Se importan los estilos
 */
import './src/assets/scss/index.scss' //aplicación

/**
 * Primer componente React
 */
import Base from './src/components/Base'

/** 
 * Segundo componente React
 */
import App from './src/components/LifeCycle/App'


/**
 * Hace render de componente React en Dom
 */
render(<App />, document.getElementById('root'))
