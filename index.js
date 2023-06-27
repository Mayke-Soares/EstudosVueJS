const app = vue.createApp({
    template: '<h1>Olá Mundo!</h1><button v-on:click="increaseCount">Countador: {{ count }}<button>',
    data() {
        return {
            name: 'Onebitcode',
            count: 0
        }
    },

    methods: {
        increaseCount() {
            this.count++
        }
    }
})

app.mount('#app')