import { h } from 'vue'
import Button from '@/views/doc/button/index.vue'
import Markdown from '@/components/Markdown.vue'

const md = (html: any) => h(Markdown, { content: html })
import { html as Intro } from '../markdown/intro.md'
const IntroDoc = md(Intro)

const routes = [
  {
    path: 'intro',
    component: IntroDoc
  },
  {
    path: 'button',
    component: Button
  }
]

export default routes