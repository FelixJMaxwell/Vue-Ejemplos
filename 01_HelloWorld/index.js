var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World!'
    },
    methods: {
        back: function(event){
            window.location.href = "http://127.0.0.1:5500"
        }
    },
})