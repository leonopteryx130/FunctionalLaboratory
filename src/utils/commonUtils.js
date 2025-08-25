export const px2rem = (px) => {
  return px / 16 + 'rem';
}

export const rgb2hex = (r, g, b) => {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

export const randomTF = () => {
  return Math.random() > 0.5;
}

/**
 * 判断移动端还是PC端
 */
export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * 把N随机分成M份，每份不超过X
 * 
 * @param {number} N 
 * @param {number} M 
 * @param {number} X 
 * @returns 
 */
export const randomSplit = (N, M, X) => {
  if (M <= 0 || N <= 0 || X <= 0) {
      throw new Error("N, M, and X must be positive integers.");
  }

  // 存储结果的数组
  const result = [];

  // 确保每份至少为1
  const minRequired = M; 
  if (N < minRequired || (M * X < N)) {
      throw new Error("Cannot split N into M parts with each part not exceeding X.");
  }

  // 随机分配值
  for (let i = 0; i < M - 1; i++) {
      // 计算当前可用的最大值
      const max = Math.min(X, N - (M - i - 1)); // 剩余的份数至少为1
      const value = Math.floor(Math.random() * max) + 1; // 随机生成1到max之间的数
      result.push(value);
      N -= value; // 从N中减去已分配的值
  }

  // 将剩余的值分配给最后一份
  result.push(N);

  return result;
}

/**
 * 计算带透明度的背景色
 * @param {string} color - 原始颜色值（支持十六进制、rgb、rgba格式）
 * @param {number} opacity - 透明度值（0-1，0为完全透明，1为完全不透明）
 * @returns {string} 带透明度的颜色值
 */
export const getBackgroundColorWithOpacity = (color, opacity) => {
  if (color.startsWith('#')) {
    // 如果是十六进制颜色，转换为rgba
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  } else if (color.startsWith('rgb(')) {
    // 如果是rgb颜色，转换为rgba
    return color.replace('rgb(', 'rgba(').replace(')', `, ${opacity})`);
  } else if (color.startsWith('rgba(')) {
    // 如果已经是rgba，只更新透明度
    return color.replace(/rgba\(([^,]+,[^,]+,[^,]+),[^)]+\)/, `rgba($1, ${opacity})`);
  }
  // 其他情况直接返回原色
  return color;
};