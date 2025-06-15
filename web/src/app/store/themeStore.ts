import { observable, action, makeObservable } from 'mobx';
export class ThemeStore {
  theme = "light";
  constructor() {
    makeObservable(this, {
      theme: observable,
      toggleTheme: action
    });
  }
  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
    if (this.theme === "dark") {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
    localStorage.setItem('theme', this.theme);
  }
}