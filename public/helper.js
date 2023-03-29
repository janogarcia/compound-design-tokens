/*
Copyright 2023 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const levels = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400];

function renderTheme(themeJson, themeName, alpha = false) {
  const {
    theme,
    alpha: alphaColors,
    ...colors
  } = themeJson.color;
  const root = document.createElement("div");
  root.classList.add("theme", `theme--${themeName}`);
  root.style = `background-color: ${theme.bg.value}; `;
  for (const color of Object.keys(colors)) {
    const hue = templateHue.content.cloneNode(true).firstChild;
    for (const level of levels) {
      hue.style.setProperty(`--hue-${level}`, `var(--cpd-color-${color}-${level})`);
    }
    root.appendChild(hue);
  }
  return root;
}
