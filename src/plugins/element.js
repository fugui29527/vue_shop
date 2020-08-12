import Vue from 'vue'
import {
  Button, Form, FormItem, Input, Message,
  Container, Header, Aside, Main, Menu, Submenu,
  MenuItem, Breadcrumb, BreadcrumbItem, Card, Table,
  TableColumn, Switch, Tooltip, Row, Col, Pagination,
  Dialog, MessageBox, Tag, Tree
} from 'element-ui'

Vue.prototype.$message = Message

Vue.prototype.$confirm = MessageBox.confirm

Vue.use(Tree)
Vue.use(Dialog)
Vue.use(Tag)
Vue.use(Pagination)
Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
