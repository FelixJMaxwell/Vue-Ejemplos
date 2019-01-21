var app = new Vue({
    el: "#app",
    data: {
        nombres: [ 'Oliver', 'FelixJMaxwell', 'Kreioz', 'JMind' ]
    },
    methods: {
        submit: function(){
            this.nombres.push(this.name);
            this.name="";
        }
    },
})