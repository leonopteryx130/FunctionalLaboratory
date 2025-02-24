import ReactingTestPic from '@/assets/images/homePage/reactionTestImage.png'

// 首页功能块定义
export const homePageModules = [
  {
    name: 'Workbench',
    describe: '工作台小功能，包含一些常用的小工具，也可以是娱乐工具',
    showCards: [
      {
        name: '反应测试',
        describe: '通过鼠标点击，简单测试反应时间',
        pic: ReactingTestPic,
        router: '/ReactionTest',
      }
    ]
  }
]