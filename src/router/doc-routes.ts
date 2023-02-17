import { h } from 'vue'
import Button from '@/views/doc/button/index.vue'
import Markdown from '@/components/Markdown.vue'

const md = (html: any) => h(Markdown, { content: html })
import { html as Intro } from '../markdown/intro.md'
const IntroDoc = md(Intro)

const routes = [
  {
    path: 'intro',
    component: IntroDoc,
    meta: {
      name: '介绍'
    }
  },
  {
    path: 'button',
    component: Button,
    meta: {
      name: 'Button 按钮'
    }
  }
]

export default routes