import React, { useState } from 'react';
import { Toast } from './index.js';
import './index.scss';

const ToastDemo = () => {
  const [showComponentToast, setShowComponentToast] = useState(false);
  const [componentToastType, setComponentToastType] = useState('info');

  const handleFunctionToast = (type) => {
    const messages = {
      success: '操作成功完成！',
      error: '操作失败，请重试',
      warning: '请注意这个操作',
      info: '这是一条信息提示'
    };
    
    toast[type](messages[type]);
  };

  const handleSuccess = () => {
    toast.show({
      message: '这是一个自定义配置的Toast',
      type: 'success',
      duration: 500000,
      onClose: () => {
        console.log('自定义Toast已关闭');
      }
    });
  }

  const handleCustomToast = () => {
    toast.show({
      message: '这是一个自定义配置的Toast',
      type: 'success',
      duration: 5000,
      onClose: () => {
        console.log('自定义Toast已关闭');
      }
    });
  };

  const handleMultipleToasts = () => {
    toast.info('第一个Toast');
    setTimeout(() => toast.success('第二个Toast'), 500);
    setTimeout(() => toast.warning('第三个Toast'), 1000);
    setTimeout(() => toast.error('第四个Toast'), 1500);
  };

  const handleCloseAll = () => {
    toast.closeAll();
  };

  const handleComponentToast = (type) => {
    setComponentToastType(type);
    setShowComponentToast(true);
  };

  return (
    <div className="toast-demo" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Toast 组件演示</h1>
      
      <div style={{ marginBottom: '30px' }}>
        <h2>函数式调用</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button 
            onClick={handleSuccess}
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#52c41a', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            成功提示
          </button>
          <button 
            onClick={() => handleFunctionToast('error')}
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#ff4d4f', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            错误提示
          </button>
          <button 
            onClick={() => handleFunctionToast('warning')}
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#faad14', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            警告提示
          </button>
          <button 
            onClick={() => handleFunctionToast('info')}
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#1890ff', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            信息提示
          </button>
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h2>高级功能</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button 
            onClick={handleCustomToast}
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#722ed1', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            自定义Toast
          </button>
          <button 
            onClick={handleMultipleToasts}
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#13c2c2', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            显示多个Toast
          </button>
          <button 
            onClick={handleCloseAll}
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#eb2f96', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            关闭所有Toast
          </button>
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h2>组件式使用</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button 
            onClick={() => handleComponentToast('success')}
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#52c41a', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            组件成功Toast
          </button>
          <button 
            onClick={() => handleComponentToast('error')}
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#ff4d4f', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            组件错误Toast
          </button>
          <button 
            onClick={() => handleComponentToast('warning')}
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#faad14', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            组件警告Toast
          </button>
          <button 
            onClick={() => handleComponentToast('info')}
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#1890ff', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            组件信息Toast
          </button>
        </div>
      </div>

      {/* 组件式Toast */}
      <Toast
        message={`这是一个${componentToastType}类型的组件Toast`}
        type={componentToastType}
        duration={3000}
        visible={showComponentToast}
        onClose={() => setShowComponentToast(false)}
      />

      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <h3>使用说明：</h3>
        <ul>
          <li>点击上方按钮可以测试不同类型的Toast提示</li>
          <li>Toast会自动在屏幕上方居中显示，3秒后自动消失</li>
          <li>采用小巧的圆角药丸设计，图标和文字在同一行</li>
          <li>不同类型有颜色区分：成功(浅绿)、错误(浅红)、警告(浅黄)、信息(浅蓝)</li>
          <li>可以同时显示多个Toast，它们会垂直堆叠</li>
          <li>支持函数式调用和组件式使用两种方式</li>
          <li>Toast只能自动关闭，不能手动关闭</li>
          <li>移动端会自动调整样式和位置</li>
        </ul>
      </div>
    </div>
  );
};

export default ToastDemo; 