export const rootFontSize = 16; // 根据设计稿的基准值设置

export const figmaWidth = 1920; // figma设计稿宽度
export const figmaHeight = 1080; // figma设计稿高度

export const mobileFigmaWidth = 375; // 移动端figma设计稿宽度


export const prodConfig = {
  outSourcePage: 'http://150.158.147.14:9011',
}

export const devConfig = {
  outSourcePage: 'http://150.158.147.14:9011',
}

export const envConfig = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;