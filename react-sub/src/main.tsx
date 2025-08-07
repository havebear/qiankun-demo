import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

let root: any = null

function render(props: any = {}) {
  const { container } = props
  const containerElement = container ? container.querySelector('#root') : document.getElementById('root')
  
  root = createRoot(containerElement)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

renderWithQiankun({
  mount(props) {
    console.log('react mount')
    render(props)
  },
  bootstrap() {
    console.log('react bootstrap')
  },
  unmount(props: any) {
    console.log('react unmount')
    root?.unmount()
  },
  update(props: any) {
    console.log('react update props', props)
  }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
}
