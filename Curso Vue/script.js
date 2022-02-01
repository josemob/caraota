var data = {
    nuevaTarea: "",
    tareas: [
        {
            texto: "Aprender Angular",
            terminada: false,
        },
        {
            texto: "Aprender React",
            terminada: false,
        },
        {
            texto: "Aprender Vue",
            terminada: false,
        },
    ],
};

Vue.component("titulo", {
    template: "<h2>{{titulo}}</h2>",
    data: function () {
        return {
            titulo: "Lista de titulos",
        };
    },
});

Vue.component("nueva-tarea", {
    template: `
            <div class="input-group">
                <input class="form-control" placeholder="introduce una tarea" v-on:keyup.enter="agregarTarea" v-model="nuevaTarea" type="text">
                <span class="input-group-btn">
                    <button class="btn btn-primary" v-on:click="agregarTarea">Agregar</button>
                </span>
            </div>`,
    data: function () {
        return data;
    },
    methods: {
        agregarTarea: function () {
            var tareaM = this.nuevaTarea.trim();
            if (tareaM) {
                this.tareas.push({
                    texto: tareaM,
                    terminada: false,
                });
            }
            this.nuevaTarea = "";
        },
    },
});

Vue.component("lista-de-tareas", {
    template: `
            <ul class="list-group">
                <li class="list-group-item" v-for="(tarea, indice) of tareas" v-bind:class="{terminada: tarea.terminada}"> {{ tarea.texto }}
                <span class="pull-right">
                    <buttom type="button" v-on:click="tarea.terminada = !tarea.terminada" class="btn btn-success  btn-xs glyphicon glyphicon-ok"></buttom>
                    <buttom type="button" v-on:click="borrar(indice)" class="btn btn-danger  btn-xs glyphicon glyphicon-ice-lolly-tasted"></buttom>
                </span>
            </li>
    </ul>`,
    data: function () {
        return data;
    },
    methods: {
        borrar: function (indice) {
            this.tareas.splice(indice, 1);
        },
    },
});

var app = new Vue({
    el: "#lista",
    data: data,
    methods: {},
});
