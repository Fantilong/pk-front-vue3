import { defineConfig, presetWind4, presetIcons } from 'unocss'
import { transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  // methods2: shortcurs 通常用于设置全局经常要使用的样式
  shortcuts: {
    // 'router-link': 'text-white text-xl px-8 py-2 cursor-pointer font-300 hover:font-500',
    's_c-bg-img': 'w-full h-full bg-cover bg-no-repeat bg-center-top',
  },
  presets: [
    presetWind4(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
        // ...
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
