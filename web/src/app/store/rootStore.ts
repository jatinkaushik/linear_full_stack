import { ThemeStore } from './themeStore';
export class RootStore {
  themeStore: ThemeStore;
  constructor() {
    this.themeStore = new ThemeStore();
  }
}