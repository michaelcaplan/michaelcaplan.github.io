import { createApp, ref, computed } from "vue"
import { createVuetify } from "vuetify"
import App from "/assets/js/app.js?7";

const customDarkTheme = {
    dark: true,
    colors: {
        background: "#1a0933",
        surface: "#15202b",
        primary: "#6f42c1",
        secondary: "#ea39b8",
        error: "#e44c55",
        info: "#1ba2f6",
        success: "#3cf281",
        warning: "#ffc107",
    },
};

const vuetify = createVuetify({
    theme: {
        defaultTheme: "customDarkTheme",
        themes: {
            customDarkTheme,
        },
    },
});

const app = createApp(App);

app.config.compilerOptions.isCustomElement = (tag) => {
    return tag.startsWith('stripe-')
};

app.use(vuetify).mount('#app');

