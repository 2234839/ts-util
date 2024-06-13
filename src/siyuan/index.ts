import { mergePluginPackage } from "./mergePluginPackage";
export { mergePluginPackage, bindData };

/** 插件专用，用于管理 data 的类型 */
function bindData<T>(opt: {
  that: {
    loadData(storageName: string): Promise<any>;
    saveData(storageName: string, content: any): Promise<void>;
  };
  storageName: string;
  initValue: T;
}) {
  const { that, storageName, initValue } = opt;
  let _value = initValue;
  const loadValue = async () => {
    const value = await that.loadData(storageName);
    if (value !== "") {
      _value = value;
    }
    return _value;
  };
  // 立刻一次加载执行
  loadValue();
  return {
    /** 会执行 loadData 然后再返回结果*/
    loadValue,
    value: () => _value,
    set(value: T) {
      _value = value;
      that.saveData(storageName, _value);
    },
  };
}
