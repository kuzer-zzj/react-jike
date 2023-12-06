import { Layout, Menu, Popconfirm } from 'antd'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import './index.scss'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {fetchUserInfo,clearUser} from '@/store/modules/user'

const { Header, Sider } = Layout

const items = [
  {
    label: '首页',
    key: '/',
    icon: <HomeOutlined />,
  },
  {
    label: '文章管理',
    key: '/article',
    icon: <DiffOutlined />,
  },
  {
    label: '创建文章',
    key: '/publish',
    icon: <EditOutlined />,
  },
]

const GeekLayout = () => {
const navigate= useNavigate()
  const menuClick =(route)=>{
    console.log('菜单点击：', route.key)
    navigate(route.key)
  }
   const location = useLocation()
   console.log('location:',location)

   //获取用户信息
   const disptch = useDispatch()
   useEffect(()=>{
    disptch(fetchUserInfo())
   },[disptch])

   const userName = useSelector(state =>state.user.userInfo.name)

   //退出
   const outConfirm =()=>{
     console.log('退出确认')
    disptch(clearUser())
    navigate('/login')
   }
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{userName}</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消" onConfirm={outConfirm}>
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
          onClick={menuClick}
            mode="inline"
            theme="dark"
            selectedKeys={[location.pathname]}
            items={items}
            style={{ height: '100%', borderRight: 0 }}></Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          <Outlet></Outlet>
        </Layout>
      </Layout>
    </Layout>
  )
}
export default GeekLayout