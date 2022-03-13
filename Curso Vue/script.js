var data = {
  
  ],
};



var app = new Vue({
  el: "#lista",
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
  methods: {
    borrar: function (indice) {
      this.tareas.splice(indice, 1);
    },
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
