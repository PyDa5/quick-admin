import { createApp } from 'vue'
import { ElButton, ElContainer, ElAside, ElHeader, ElMain, ElFooter, ElMenu, ElSubmenu, ElMenuItemGroup, ElMenuItem, ElForm, ElFormItem, ElInput, ElPopover, ElTag, ElCard, ElTable, ElTableColumn, ElPagination, ElDialog, ElPopconfirm, ElUpload, ElLoading, ElSelect, ElOption, ElRadioGroup, ElRadio, ElCascader, ElCheckbox, ElInputNumber } from 'element-plus'
import App from './App.vue'
import router from './router/index'

// import 'element-plus/lib/theme-chalk/index.css'

// 自定义皮肤替换ElementUI的皮肤
import '../theme/index.css'

const app = createApp(App)

app.use(router)

app.use(ElButton)
    .use(ElContainer)
    .use(ElAside)
    .use(ElHeader)
    .use(ElMain)
    .use(ElFooter)
    .use(ElMenu)
    .use(ElSubmenu)
    .use(ElMenuItemGroup)
    .use(ElMenuItem)
    .use(ElForm)
    .use(ElFormItem)
    .use(ElInput)
    .use(ElPopover)
    .use(ElTag)
    .use(ElCard)
    .use(ElTable)
    .use(ElTableColumn)
    .use(ElPagination)
    .use(ElDialog)
    .use(ElPopconfirm)
    .use(ElUpload)
    .use(ElLoading)
    .use(ElSelect)
    .use(ElOption)
    .use(ElRadioGroup)
    .use(ElRadio)
    .use(ElCascader)
    .use(ElCheckbox)
    .use(ElInputNumber)

    // Sentry.init({
    //   dsn: "https://f866b695d21d467ba523f1adf14e0a24@o584908.ingest.sentry.io/5737358",
    //   integrations: [new Integrations.BrowserTracing()],
    
    //   // Set tracesSampleRate to 1.0 to capture 100%
    //   // of transactions for performance monitoring.
    //   // We recommend adjusting this value in production
    //   tracesSampleRate: 1.0,
    // });

app.mount('#app')