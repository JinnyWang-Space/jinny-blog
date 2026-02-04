export const bilibiliBackV1Base = `
import { promptAction } from '@kit.ArkUI';

@Entry
@Component
struct Index {
  // 是否为第一次退出
  @State isFirstExit: boolean = false;
  // 记录定时器ID，方便后续操作（删除定时器）
  @State timeoutID?: number = undefined;

  // 系统返回操作
  // true 代表拦截返回操作，false 代表不拦截返回操作
  onBackPress(): boolean | void {
    // 第一次返回操作
    if (!this.isFirstExit) {
      // 更改退出状态
      this.isFirstExit = true;
      // 清理旧的定时器（防御性编程）
      if (this.timeoutID !== undefined) {
        clearTimeout(this.timeoutID);
      }
      // 在 2S 后重置退出状态
      this.timeoutID = setTimeout(() => {
        this.isFirstExit = false;
        this.timeoutID = undefined;
      }, 2000)
      // 弹出提示框
      promptAction.openToast({ message: '再划一次退出', duration: 2000 }).catch(() => {
        // TODO: Implement error handling.
      })
    }
    // 最终返回操作
    else {
      // 重置状态
      this.isFirstExit = false;
      // 取消定时器
      clearTimeout(this.timeoutID);
      this.timeoutID = undefined;
      // 不拦截返回操作
      return false;
    }
    // 拦截返回操作
    return true;
  }

  // 组件生命周期
  aboutToDisappear(): void {
    // 取消定时器
    if (this.timeoutID !== undefined) {
      clearTimeout(this.timeoutID);
      this.timeoutID = undefined;
    }
  }

  build() {
    Column(){
    }
    .width('100%')
    .height('100%')
  }
}`;

export const bilibiliBackV2Base = `
import { promptAction } from '@kit.ArkUI';

@Entry
@ComponentV2
struct Index {
  // 是否为第一次退出
  @Local isFirstExit: boolean = false;
  // 记录定时器ID，方便后续操作（删除定时器）
  @Local timeoutID?: number;

  // 系统返回操作
  // true 代表拦截返回操作，false 代表不拦截返回操作
  onBackPress(): boolean | void {
    // 第一次返回操作
    if (!this.isFirstExit) {
      // 更改退出状态
      this.isFirstExit = true;
      // 清理旧的定时器（防御性编程）
      if (this.timeoutID !== undefined) {
        clearTimeout(this.timeoutID);
      }
      // 在 2S 后重置退出状态
      this.timeoutID = setTimeout(() => {
        this.isFirstExit = false;
        this.timeoutID = undefined;
      }, 2000)
      // 弹出提示框
      promptAction.openToast({ message: '再划一次退出', duration: 2000 }).catch(() => {
        // TODO: Implement error handling.
      })
    }
    // 最终返回操作
    else {
      // 重置状态
      this.isFirstExit = false;
      // 取消定时器
      clearTimeout(this.timeoutID);
      this.timeoutID = undefined;
      // 不拦截返回操作
      return false;
    }
    // 拦截返回操作
    return true;
  }

  // 组件生命周期
  aboutToDisappear(): void {
    // 取消定时器
    if (this.timeoutID !== undefined) {
      clearTimeout(this.timeoutID);
      this.timeoutID = undefined;
    }
  }

  build() {
    Column(){
    }
    .width('100%')
    .height('100%')
  }
}`;

export const exitViewModelV1 = `
import { promptAction } from "@kit.ArkUI";

@Observed
export class ExitViewModel {
  // 是否为第一次退出
  @Track isFirstExit: boolean = false;
  // 记录定时器ID，方便后续操作（销毁定时器）
  @Track timeoutID?: number;

  // 第一次退出操作
  firstExit(){
    // 更改退出状态
    this.isFirstExit = true;
    // 清理旧的定时器（防御性编程）
    if (this.timeoutID !== undefined) {
      clearTimeout(this.timeoutID);
    }
    // 在 2S 后重置退出状态
    this.timeoutID = setTimeout(() => {
      this.isFirstExit = false;
      this.timeoutID = undefined;
    }, 2000)
    // 弹出提示框
    promptAction.openToast({ message: '再划一次退出', duration: 2000 }).catch(() => {
      // TODO: Implement error handling.
    }) 
  }

  // 最后一次退出操作
  endExit(){
    // 重置状态
    this.isFirstExit = false;
    // 取消定时器
    clearTimeout(this.timeoutID);
    this.timeoutID = undefined;
    // 不拦截返回操作
    return false;
  }

  // 销毁定时器
  clearTimeout(){
    // 取消定时器
    if (this.timeoutID !== undefined) {
      clearTimeout(this.timeoutID);
      this.timeoutID = undefined;
    }
  }
}`;

export const exitViewModelV2 = `
import { promptAction } from "@kit.ArkUI";

@ObservedV2
export class ExitViewModel {
  // 是否为第一次退出
  @Trace isFirstExit: boolean = false;
  // 记录定时器ID，方便后续操作（销毁定时器）
  @Trace timeoutID?: number;

  // 第一次退出操作
  firstExit(){
    // 更改退出状态
    this.isFirstExit = true;
    // 清理旧的定时器（防御性编程）
    if (this.timeoutID !== undefined) {
      clearTimeout(this.timeoutID);
    }
    // 在 2S 后重置退出状态
    this.timeoutID = setTimeout(() => {
      this.isFirstExit = false;
      this.timeoutID = undefined;
    }, 2000)
    // 弹出提示框
    promptAction.openToast({ message: '再划一次退出', duration: 2000 }).catch(() => {
      // TODO: Implement error handling.
    })  
  }

  // 最后一次退出操作
  endExit(){
    // 重置状态
    this.isFirstExit = false;
    // 取消定时器
    clearTimeout(this.timeoutID);
    this.timeoutID = undefined;
    // 不拦截返回操作
    return false;
  }

  // 销毁定时器
  clearTimeout(){
    // 取消定时器
    if (this.timeoutID !== undefined) {
      clearTimeout(this.timeoutID);
      this.timeoutID = undefined;
    }
  }
}`;

export const bilibiliBackV1High = `
import { ExitViewModel } from '../viewmodel/ExitViewModel';

@Entry
@Component
struct Index {
  // 创建退出视图模型实例
  @State exitVM: ExitViewModel = new ExitViewModel();

  // 系统返回操作
  // true 代表拦截返回操作，false 代表不拦截返回操作
  onBackPress(): boolean | void {
    if (!this.exitVM.isFirstExit) {
      this.exitVM.firstExit();
    } else {
      return this.exitVM.endExit();
    }
    return true;
  }
  
  // 组件生命周期
  aboutToDisappear(): void {
    this.exitVM.clearTimeout();
  }
  
  build() {
    Column() {
      
    }
    .width('100%')
    .height('100%')
  }
}`;

export const bilibiliBackV2High = `
import { ExitViewModel } from '../viewmodel/ExitViewModel';

@Entry
@ComponentV2
struct Index {
  // 创建退出视图模型实例
  @Local exitVM: ExitViewModel = new ExitViewModel();

  // 系统返回操作
  // true 代表拦截返回操作，false 代表不拦截返回操作
  onBackPress(): boolean | void {
    if (!this.exitVM.isFirstExit) {
      this.exitVM.firstExit();
    } else {
      return this.exitVM.endExit();
    }
    return true;
  }

  // 组件生命周期
  aboutToDisappear(): void {
    this.exitVM.clearTimeout();
  }
  
  build() {
    Column() {
      
    }
    .width('100%')
    .height('100%')
  }
}`;
