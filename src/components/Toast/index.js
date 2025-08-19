import React from 'react';
import ReactDOM from 'react-dom';
import Toast from './index.jsx';

class ToastManager {
  constructor() {
    this.toastContainer = null;
    this.toastQueue = [];
    this.isProcessing = false;
  }

  // 创建Toast容器
  createContainer() {
    if (this.toastContainer) return;
    
    this.toastContainer = document.createElement('div');
    this.toastContainer.id = 'toast-container';
    this.toastContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: 9999;
      pointer-events: none;
    `;
    document.body.appendChild(this.toastContainer);
  }

  // 显示Toast
  show(options) {
    const {
      message,
      type = 'info',
      duration = 3000,
      onClose
    } = options;

    if (!this.toastContainer) {
      this.createContainer();
    }

    const toastId = Date.now() + Math.random();
    const toastElement = document.createElement('div');
    toastElement.style.pointerEvents = 'auto';
    toastElement.style.marginBottom = '10px';
    
    this.toastContainer.appendChild(toastElement);

    const handleClose = () => {
      if (toastElement.parentNode) {
        toastElement.parentNode.removeChild(toastElement);
      }
      onClose && onClose();
    };

    ReactDOM.render(
      <Toast
        message={message}
        type={type}
        duration={duration}
        onClose={handleClose}
        visible={true}
      />,
      toastElement
    );

    // 自动移除
    if (duration > 0) {
      setTimeout(() => {
        if (toastElement.parentNode) {
          toastElement.parentNode.removeChild(toastElement);
        }
        onClose && onClose();
      }, duration);
    }

    return toastId;
  }

  // 成功提示
  success(message, duration = 3000) {
    return this.show({
      message,
      type: 'success',
      duration
    });
  }

  // 错误提示
  error(message, duration = 3000) {
    return this.show({
      message,
      type: 'error',
      duration
    });
  }

  // 警告提示
  warning(message, duration = 3000) {
    return this.show({
      message,
      type: 'warning',
      duration
    });
  }

  // 信息提示
  info(message, duration = 3000) {
    return this.show({
      message,
      type: 'info',
      duration
    });
  }

  // 手动关闭所有Toast
  closeAll() {
    if (this.toastContainer) {
      ReactDOM.unmountComponentAtNode(this.toastContainer);
      this.toastContainer.innerHTML = '';
    }
  }

  // 销毁Toast管理器
  destroy() {
    this.closeAll();
    if (this.toastContainer && this.toastContainer.parentNode) {
      this.toastContainer.parentNode.removeChild(this.toastContainer);
    }
    this.toastContainer = null;
  }
}

// 创建全局实例
const toastManager = new ToastManager();

// 导出函数式调用方法
export const toast = {
  success: (message, duration) => toastManager.success(message, duration),
  error: (message, duration) => toastManager.error(message, duration),
  warning: (message, duration) => toastManager.warning(message, duration),
  info: (message, duration) => toastManager.info(message, duration),
  show: (options) => toastManager.show(options),
  closeAll: () => toastManager.closeAll(),
  destroy: () => toastManager.destroy()
};

// 导出Toast组件和ToastManager类
export { default as Toast } from './index.jsx';
export { ToastManager };

// 默认导出
export default toast;
