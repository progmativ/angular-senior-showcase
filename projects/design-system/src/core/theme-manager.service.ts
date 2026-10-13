import { DOCUMENT } from '@angular/common';
import {effect, inject, Injectable, Renderer2, signal} from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class ThemeManager {
  public static LOCAL_STORAGE_KEY = 'theme';
  private readonly document = inject(DOCUMENT);

  public readonly theme = signal<string | null>(
    localStorage.getItem(ThemeManager.LOCAL_STORAGE_KEY)
  );

  private readonly syncLocalStorageEffect = effect(() => {
    const theme = this.theme();
    if (!theme) {
      return;
    }
    localStorage.setItem(ThemeManager.LOCAL_STORAGE_KEY, theme);
  });

  private readonly setThemeEffect = effect(() => {
    const theme = this.theme();
    if (!theme) {
      return;
    }
    this.document.documentElement.style.setProperty(
      'color-scheme',
      theme
    );
  })

  public toggle(): void {
    const theme = this.theme() === 'light' ? 'dark' : 'light';
    this.theme.set(theme);
  }
}
