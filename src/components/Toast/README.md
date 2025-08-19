# Toast 组件使用说明

## 功能特性

- 🎯 支持多种状态：成功、失败、警告、信息
- 🚀 函数式调用，使用简单
- ⏰ 自动消失，可自定义持续时间
- 🎨 响应式设计，支持移动端
- 🌙 支持深色主题
- ✨ 平滑的动画效果
- 📍 屏幕上方居中显示
- 🔒 只能自动关闭，不能手动关闭

## 使用方法

### 1. 函数式调用（推荐）

```javascript
import toast from '@/components/Toast';

// 成功提示
toast.success('操作成功！');

// 错误提示
toast.error('操作失败，请重试');

// 警告提示
toast.warning('请注意这个操作');

// 信息提示
toast.info('这是一条信息');

// 自定义持续时间（毫秒）
toast.success('保存成功！', 5000);

// 高级用法
toast.show({
  message: '自定义消息',
  type: 'success',
  duration: 3000,
  onClose: () => {
    console.log('Toast已关闭');
  }
});
```

### 2. 组件式使用

```javascript
import { Toast } from '@/components/Toast';

function MyComponent() {
  const [showToast, setShowToast] = useState(false);

  return (
    <div>
      <button onClick={() => setShowToast(true)}>
        显示Toast
      </button>
      
      <Toast
        message="这是一条消息"
        type="success"
        duration={3000}
        visible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}
```

## API 说明

### 函数式调用方法

| 方法 | 参数 | 说明 |
|------|------|------|
| `toast.success(message, duration?)` | message: string, duration?: number | 显示成功提示 |
| `toast.error(message, duration?)` | message: string, duration?: number | 显示错误提示 |
| `toast.warning(message, duration?)` | message: string, duration?: number | 显示警告提示 |
| `toast.info(message, duration?)` | message: string, duration?: number | 显示信息提示 |
| `toast.show(options)` | options: ToastOptions | 显示自定义Toast |
| `toast.closeAll()` | - | 关闭所有Toast |
| `toast.destroy()` | - | 销毁Toast管理器 |

### ToastOptions 配置

```typescript
interface ToastOptions {
  message: string;        // 消息内容
  type?: 'success' | 'error' | 'warning' | 'info';  // 类型
  duration?: number;      // 持续时间（毫秒），0表示不自动消失
  onClose?: () => void;  // 关闭回调
}
```

### 组件属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `message` | string | - | 消息内容（必填） |
| `type` | string | 'info' | 消息类型 |
| `duration` | number | 3000 | 持续时间（毫秒） |
| `visible` | boolean | false | 是否显示 |
| `onClose` | function | - | 关闭回调 |

## 样式定制

Toast组件使用SCSS编写，支持以下自定义：

- 颜色主题：通过CSS变量或SCSS变量修改
- 动画效果：修改keyframes动画
- 响应式：通过媒体查询调整移动端样式
- 深色主题：自动检测系统主题偏好
- 位置：屏幕上方居中显示
- 大小：紧凑的小型提示框设计

## 注意事项

1. Toast会自动添加到body元素下，无需手动挂载
2. Toast在屏幕上方居中显示，位于其他元素上层
3. Toast只能自动关闭，不能手动关闭
4. 多个Toast会垂直堆叠显示
5. 建议在组件卸载时调用`toast.destroy()`清理资源
6. 移动端会自动调整样式和位置

## 示例场景

```javascript
// 表单提交成功
const handleSubmit = async () => {
  try {
    await submitForm();
    toast.success('表单提交成功！');
  } catch (error) {
    toast.error('提交失败：' + error.message);
  }
};

// 网络请求状态
const fetchData = async () => {
  toast.info('正在加载数据...', 0); // 不自动消失
  
  try {
    const data = await api.getData();
    toast.closeAll(); // 关闭加载提示
    toast.success('数据加载成功！');
  } catch (error) {
    toast.closeAll();
    toast.error('数据加载失败');
  }
};
``` 