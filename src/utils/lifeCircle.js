/**
 * 生命周期方法
 * 
 * 包括初始化页面布局，初始化路由，初始化数据等
 * 同时也包括页面的销毁，数据的销毁等
 * 路由拦截，数据拦截等也可以放在这里边
 * 
 */
import { rootFontSize, figmaWidth } from '@/utils/config';

export const initPageLayout = () => {
  // 初始化页面布局
    const scale = Math.max(document.documentElement.clientWidth, figmaWidth) / figmaWidth; // 屏幕宽度 / 设计稿宽度 = 缩放比例，最小为1
    document.documentElement.style.fontSize = rootFontSize * scale + 'px'; // 1rem = 16px
    document.documentElement.style.minWidth = figmaWidth + 'px'; // 设置最小宽度为设计稿宽度
}