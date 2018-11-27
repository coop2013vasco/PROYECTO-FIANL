package modelo;
public class ingresodatosgetset3 {
    private String PreEncCodigo;
    private String PreEncContenido;
    private String PreEncEnccod;

    public ingresodatosgetset3(String PreEncCodigo, String PreEncContenido, String PreEncEnccod) {
        this.PreEncCodigo = PreEncCodigo;
        this.PreEncContenido = PreEncContenido;
        this.PreEncEnccod = PreEncEnccod;
    }

    public ingresodatosgetset3(String PreEncCodigo) {
        this.PreEncCodigo = PreEncCodigo;
    }
    
    
    public ingresodatosgetset3(){
    
}
    public String getPreEncCodigo() {
        return PreEncCodigo;
    }

    public void setPreEncCodigo(String PreEncCodigo) {
        this.PreEncCodigo = PreEncCodigo;
    }

    public String getPreEncContenido() {
        return PreEncContenido;
    }

    public void setPreEncContenido(String PreEncContenido) {
        this.PreEncContenido = PreEncContenido;
    }

    public String getPreEncEnccod() {
        return PreEncEnccod;
    }

    public void setPreEncEnccod(String PreEncEnccod) {
        this.PreEncEnccod = PreEncEnccod;
    }
    
    
}
