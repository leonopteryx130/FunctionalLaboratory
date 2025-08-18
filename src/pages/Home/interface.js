import ReactingTestPic from '@/assets/images/homePage/reactionTestImage.png'
import ColorTestPic from '@/assets/images/homePage/colorTestImage.png'
import QrCodeProductPic from '@/assets/images/homePage/qrCodeProductImage.png'

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
      }, {
        name: '颜色敏感度测试',
        describe: '通过颜色识别，测试颜色敏感度',
        pic: ColorTestPic,
        router: '/ColorSentivityTest',
      }, {
        name: '二维码生成',
        describe: '生成二维码，方便分享',
        pic: QrCodeProductPic,
        router: '/QrCode',
        //isDisable: true, // 是否禁用
        //isHidden: true
      }
    ]
  },
]