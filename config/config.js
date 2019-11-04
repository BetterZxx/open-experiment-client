import defaultSettings from './defaultSettings'; // https://umijs.org/config/

import slash from 'slash2';
import webpackPlugin from './plugin.config';
const { pwa, primaryColor } = defaultSettings; // preview.pro.ant.design only do not use in your production ;
// preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。

const { ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION } = process.env;
const isAntDesignProPreview = ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site';

//开发模式代理
const proxyURL = 'http://10.20.0.57:8083' 
const proxyKeys = ['/anon','user/getMyInfo','/project/','/funds','/announcemen','/file']
const proxyOptions = {
  target: proxyURL,
  changeOrigin: true,
}
const proxy = {}
proxyKeys.forEach(item=>{
  proxy[item] = proxyOptions
})


const plugins = [
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        hmr: true,
      },
      locale: {
        // default false
        enable: true,
        // default zh-CN
        default: 'zh-CN',
        // default true, when it is true, will use `navigator.language` overwrite default
        baseNavigator: true,
      },
      // dynamicImport: {
      //   loadingComponent: './components/PageLoading/index',
      //   webpackChunkName: true,
      //   level: 3,
      // },
      pwa: pwa
        ? {
            workboxPluginMode: 'InjectManifest',
            workboxOptions: {
              importWorkboxFrom: 'local',
            },
          }
        : false, // default close dll, because issue https://github.com/ant-design/ant-design-pro/issues/4665
      // dll features https://webpack.js.org/plugins/dll-plugin/
      // dll: {
      //   include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch'],
      //   exclude: ['@babel/runtime', 'netlify-lambda'],
      // },
    },
  ],
  [
    'umi-plugin-pro-block',
    {
      moveMock: false,
      moveService: false,
      modifyRequest: true,
      autoAddMenu: true,
    },
  ],
]; // 针对 preview.pro.ant.design 的 GA 统计代码

if (isAntDesignProPreview) {
  plugins.push([
    'umi-plugin-ga',
    {
      code: 'UA-72788897-6',
    },
  ]);
  plugins.push([
    'umi-plugin-pro',
    {
      serverUrl: 'https://ant-design-pro.netlify.com',
    },
  ]);
}

export default {
  plugins,
  block: {
    // 国内用户可以使用码云
    defaultGitUrl: 'https://gitee.com/ant-design/pro-blocks', // defaultGitUrl: 'https://github.com/ant-design/pro-blocks',
  },
  hash: true,
  targets: {
    ie: 11,
  },
  devtool: isAntDesignProPreview ? 'source-map' : false,
  // umi routes: https://umijs.org/zh/guide/router.html
  routes: [
    {
      path: '/',
      component: '../layouts/BlankLayout',
      routes: [
        {
          path: '/user',
          component: '../layouts/UserLayout',
          routes: [
            {
              path: '/user',
              redirect: '/user/login',
            },
            {
              name: 'login',
              path: '/user/login',
              component: './user/login',
            },
            {
              name: 'register-result',
              path: '/user/register-result',
              component: './user/register-result',
            },
            {
              name: 'register',
              path: '/user/register',
              component: './user/register',
            },
            {
              component: '404',
            },
          ],
        },
        {
          path: '/',
          component: '../layouts/BasicLayout',
          Routes: ['src/pages/Authorized'],
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/',
              name: '首页',
              icon: 'home',
              component:'./home'
            },
            {
              path: '/openProjects/detail',
              name: '详情',
              icon: 'home',
              component:'./common/detail',
              hideInMenu:true
            },
            {
              path: '/announcement/detail',
              name: '公告详情',
              icon: 'home',
              component:'./settings/announcement/detail',
              hideInMenu:true
            },
            {
              path: '/tproject',
              name: '项目管理(老师)',
              icon: 'project',
              routes: [
                {
                  name: '项目申报',
                  path: '/tproject/apply',
                  component: './project-t/apply',
                  icon: 'file-add'
                },
                {
                  name: '修改立项申请表',
                  path: '/tproject/manage/edit',
                  component: './project-t/edit',
                  hideInMenu:true,
                  icon: 'file-add'
                },
                {
                  name: '项目详情',
                  path: '/tproject/manage/detail',
                  component: './common/detail',
                  hideInMenu:true,
                  icon: 'file-add'
                },
                {
                  name: '重点项目申请',
                  path: '/tproject/manage/key-detail',
                  component: './common/key-detail',
                  hideInMenu:true,
                  icon: 'file-add'
                },
                {
                  name: '已报项目',
                  path: '/tproject/manage',
                  component: './project-t/projects',
                  icon: 'file-done',
                  
                },
                {
                  name: '重点项目审批',
                  path: '/tproject/manage/key-projects',
                  component: './project-t/key-projects',
                  icon: 'file-done',
                  hideInMenu:true
                  
                },
                {
                  name: '成员审批',
                  path: '/tproject/members',
                  component: './project-t/members',
                  icon: 'usergroup-add'
                },
              ],
            },
            {
              path: '/sproject',
              name: '项目管理(学生)',
              icon: 'project',
              routes: [
                {
                  name: '项目申请',
                  path: '/sproject/join/all',
                  component: './project-s/join/projects',
                  icon: 'file-add'
                },
                {
                  name: '项目申请表',
                  path: '/sproject/join/all/apply',
                  component: './project-s/join/basic-form',
                  icon: 'file-add',
                  hideInMenu:true
                },
                {
                  name: '已选项目',
                  path: '/sproject/manage',
                  component: './project-s/manage/projects',
                  icon: 'file-done'
                },
                {
                  name: '重点项目申请',
                  path: '/sproject/manage/keyProject',
                  component: './project-s/manage/key-project',
                  icon: 'file-add',
                  hideInMenu:true
                },
                {
                  name: '重点项目申请',
                  path: '/sproject/manage/key-detail',
                  component: './common/key-detail',
                  icon: 'file-add',
                  hideInMenu:true
                },
                {
                  name: '项目详情',
                  path: '/sproject/join/all/detail',
                  component: './common/detail',
                  hideInMenu:true,
                  icon: 'file-add'
                },
                {
                  name: '项目详情',
                  path: '/sproject/manage/detail',
                  component: './common/detail',
                  hideInMenu:true,
                  icon: 'file-add'
                },
                {
                  name: '证书申领',
                  path: '/sproject/certificate',
                  component: './project-s/certificate',
                  icon: 'read'
                },
              ],
            },
            // {
            //   path: '/projects/auth',
            //   name: '项目审批',
            //   icon: 'diff',
            //   routes: [
                {
                  name: '实验室审批',
                  path: '/auth/lab',
                  routes:[
                    {
                      name: '立项审批',
                      path: '/auth/lab/projects',
                      component: './agreement/lab/projects',
                      icon: 'team'
                    },
                    {
                      name: '重点实验审批',
                      path: '/auth/lab/key-projects',
                      component: './agreement/lab/key-projects',
                      icon: 'team'
                    },
                    {
                      name: '项目详情',
                      path: '/auth/lab/projects/detail',
                      component: './common/detail',
                      hideInMenu:true,
                      icon: 'team'
                    },
                    {
                      name: '重点项目详情',
                      path: '/auth/lab/key-projects/detail',
                      component: './common/key-detail',
                      hideInMenu:true,
                      icon: 'team'
                    },
                 ],
                  icon: 'experiment'
                },
                {
                  name: '二级单位审批',
                  path: '/auth/second',
                  routes:[
                    {
                      name: '立项审批',
                      path: '/auth/second/projects',
                      component: './agreement/second/projects',
                      icon: 'team'
                    },
                    {
                      name: '重点项目审批',
                      path: '/auth/second/key-projects',
                      component: './agreement/second/key-projects',
                      icon: 'team'
                    },
                    {
                      name: '项目详情',
                      path: '/auth/second/projects/detail',
                      component: './common/detail',
                      hideInMenu:true,
                      icon: 'team'
                    },
                    {
                      name: '重点项目详情',
                      path: '/auth/second/key-projects/detail',
                      component: './common/key-detail',
                      hideInMenu:true,
                      icon: 'team'
                    },
                  ],
                  icon: 'team'
                },
                {
                  name:'test',
                  path:'test',
                  component:'./common/test'
                },
                {
                  name: '职能部门审批',
                  path: 'auth/equipment',
                  routes:[
                    {
                      name: '立项审批',
                      path: '/auth/equipment/projects',
                      component: './agreement/equipment/projects',
                      icon: 'team'
                    },
                    {
                      name: '重点项目审批',
                      path: '/auth/equipment/key-projects',
                      component: './agreement/equipment/key-projects',
                      icon: 'team'
                    },
                    {
                      name: '项目详情',
                      path: '/auth/equipment/projects/detail',
                      component: './common/detail',
                      hideInMenu:true,
                      icon: 'team'
                    },
                    {
                      name: '重点项目详情',
                      path: '/auth/equipment/key-projects/detail',
                      component: './common/key-detail',
                      hideInMenu:true,
                      icon: 'team'
                    },
                  ],
                  icon: 'reconciliation'
                },
            //   ],
            // },
            {
              path: '/funds',
              name: '资金管理',
              component: './funds',
              icon: 'account-book'
            },
            {
              path: '/achievement',
              name: '成果统计',
              component: './achievement',
              icon: 'bar-chart'
            },
            {
              path: '/settings',
              name: '系统设置',
              icon: 'setting',
              routes: [
                {
                  name: '基本设置',
                  path: '/settings/basic',
                  component: './settings/basic',
                  icon: 'profile'
                },
                {
                  name: '权限设置',
                  path: '/settings/authority',
                  component: './settings/authority',
                  icon: 'safety-certificate'
                },
                {
                  name: '公告管理',
                  path: '/settings/announcement',
                  component: './settings/announcement/announcements',
                  icon: 'file-text'
                },
                {
                  name: '新增公告',
                  path: '/settings/announcement/append',
                  component: './settings/announcement/append',
                  icon: 'file-text',
                  hideInMenu:true
                },
                {
                  name: '公告详情',
                  path: '/settings/announcement/detail',
                  component: './settings/announcement/detail',
                  icon: 'file-text',
                  hideInMenu:true
                },
              ],
            },
            {
              path: '/dashboard',
              name: 'dashboard',
              icon: 'dashboard',
              routes: [
                {
                  name: 'analysis',
                  path: '/dashboard/analysis',
                  component: './dashboard/analysis',
                },
                {
                  name: 'monitor',
                  path: '/dashboard/monitor',
                  component: './dashboard/monitor',
                },
                {
                  name: 'workplace',
                  path: '/dashboard/workplace',
                  component: './dashboard/workplace',
                },
              ],
            },
            {
              path: '/form',
              icon: 'form',
              name: 'form',
              routes: [
                {
                  name: 'basic-form',
                  path: '/form/basic-form',
                  component: './form/basic-form',
                },
                {
                  name: 'step-form',
                  path: '/form/step-form',
                  component: './form/step-form',
                },
                {
                  name: 'advanced-form',
                  path: '/form/advanced-form',
                  component: './form/advanced-form',
                },
              ],
            },
            {
              path: '/list',
              icon: 'table',
              name: 'list',
              routes: [
                {
                  path: '/list/search',
                  name: 'search-list',
                  component: './list/search',
                  routes: [
                    {
                      path: '/list/search',
                      redirect: '/list/search/articles',
                    },
                    {
                      name: 'articles',
                      path: '/list/search/articles',
                      component: './list/search/articles',
                    },
                    {
                      name: 'projects',
                      path: '/list/search/projects',
                      component: './list/search/projects',
                    },
                    {
                      name: 'applications',
                      path: '/list/search/applications',
                      component: './list/search/applications',
                    },
                  ],
                },
                {
                  name: 'table-list',
                  path: '/list/table-list',
                  component: './list/table-list',
                },
                {
                  name: 'basic-list',
                  path: '/list/basic-list',
                  component: './list/basic-list',
                },
                {
                  name: 'card-list',
                  path: '/list/card-list',
                  component: './list/card-list',
                },
              ],
            },
            {
              path: '/profile',
              name: 'profile',
              icon: 'profile',
              routes: [
                {
                  name: 'basic',
                  path: '/profile/basic',
                  component: './profile/basic',
                },
                {
                  name: 'advanced',
                  path: '/profile/advanced',
                  component: './profile/advanced',
                },
              ],
            },
            {
              name: 'result',
              icon: 'check-circle-o',
              path: '/result',
              routes: [
                {
                  name: 'success',
                  path: '/result/success',
                  component: './result/success',
                },
                {
                  name: 'fail',
                  path: '/result/fail',
                  component: './result/fail',
                },
              ],
            },
            {
              name: 'exception',
              icon: 'warning',
              path: '/exception',
              routes: [
                {
                  name: '403',
                  path: '/exception/403',
                  component: './exception/403',
                },
                {
                  name: '404',
                  path: '/exception/404',
                  component: './exception/404',
                },
                {
                  name: '500',
                  path: '/exception/500',
                  component: './exception/500',
                },
              ],
            },
            {
              name: 'account',
              icon: 'user',
              path: '/account',
              routes: [
                {
                  name: 'center',
                  path: '/account/center',
                  component: './account/center',
                },
                {
                  name: 'settings',
                  path: '/account/settings',
                  component: './account/settings',
                },
              ],
            },
            {
              name: 'editor',
              icon: 'highlight',
              path: '/editor',
              routes: [
                {
                  name: 'flow',
                  path: '/editor/flow',
                  component: './editor/flow',
                },
                {
                  name: 'mind',
                  path: '/editor/mind',
                  component: './editor/mind',
                },
                {
                  name: 'koni',
                  path: '/editor/koni',
                  component: './editor/koni',
                },
              ],
            },
            {
              path: '/',
              redirect: '/dashboard/analysis',
              authority: ['admin', 'user'],
            },
            {
              component: '404',
            },
          ],
        },
      ],
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': primaryColor,
  },
  define: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION:
      ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION || '', // preview.pro.ant.design only do not use in your production ; preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (context, _, localName) => {
      if (
        context.resourcePath.includes('node_modules') ||
        context.resourcePath.includes('ant.design.pro.less') ||
        context.resourcePath.includes('global.less')
      ) {
        return localName;
      }

      const match = context.resourcePath.match(/src(.*)/);

      if (match && match[1]) {
        const antdProPath = match[1].replace('.less', '');
        const arr = slash(antdProPath)
          .split('/')
          .map(a => a.replace(/([A-Z])/g, '-$1'))
          .map(a => a.toLowerCase());
        return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
      }

      return localName;
    },
  },
  manifest: {
    basePath: '/',
  },
  chainWebpack: webpackPlugin,
  
  proxy/*: {
    '/anon': {
      target: 'http://47.107.61.232:8666',
      changeOrigin: true,
      //pathRewrite: { '^/server': '' },
    },
    '/user/getMyInfo': {
      target: 'http://47.107.61.232:8666',
      changeOrigin: true,
      //pathRewrite: { '^/server': '' },
    },
    '/project/createApply': {
      target: 'http://47.107.61.232:8666',
      changeOrigin: true,
      //pathRewrite: { '^/server': '' },
    },
  },*/
  
};
