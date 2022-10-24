var Serie = /** @class */ (function () {
    //numcapitulos: number;
    //calificacion: number:
    function Serie(id, name, canal, seasons, synapsis, imagen, streaming) {
        this.id = id;
        this.name = name;
        this.canal = canal;
        this.seasons = seasons;
        this.synapsis = synapsis;
        this.imagen = imagen;
        this.streaming = streaming;
        //this.numcapitulos = numcapitulos;
        //this.calificacion = calificacion;
    }
    return Serie;
}());
export { Serie };
