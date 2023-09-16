import {create} from 'dva-core-ts';
import models from '@/models/index';

// 1.创建一个Dva的实例
const app = create();

// 2.加载module对象
models.forEach(model => {
  app.model(model);
});

// 3.启动dva,初始化
app.start();

// 4.导出dva的数据
const store = app._store; //获取redux的store对象供react-redux使用
export default store;
