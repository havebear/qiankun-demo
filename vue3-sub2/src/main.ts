import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

let app: any = null

function render(props: any = {}) {
  const { container } = props
  const containerElement = container ? container.querySelector('#app') : document.getElementById('app')
  
  app = createApp(App)
  app.mount(containerElement)
}

renderWithQiankun({
  mount(props) {
    console.log('vue3 mount')
    render(props)
  },
  bootstrap() {
    console.log('vue3 bootstrap')
  },
  unmount(props: any) {
    console.log('vue3 unmount')
    app?.unmount()
  },
  update(props: any) {
    console.log('vue3 update props', props)
  }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
}
