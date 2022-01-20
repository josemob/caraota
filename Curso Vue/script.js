var app = new Vue({
    el: '#lista',
    data: {
        titulo: 'Lista de tareas',
        nuevaTarea: '',
        tareas: [
            {
                texto: 'Aprender Angular',
                terminada: false
            },
            {
                texto: 'Aprender React',
                terminada: false
            },
            {
                texto: 'Aprender Vue',
                terminada: false
            }
        ]
    },
    methods: {
        agregarTarea: function () {
            var tareaM = this.nuevaTarea.trim();
            if (tareaM) {
                this.tareas.push({
                    texto: tareaM,
                    terminada: false
                })
            }
            this.nuevaTarea = ''
        },
        borrar: function (indice) {
            this.tareas.splice(indice,1);
        }
    },
})












