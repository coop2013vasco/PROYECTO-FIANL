package modelo;

public class ingresodatosgetset2 {
    
        private String EmSerEmId;
	private String EmSerSerCod;
	private String EmSerFH;

    public ingresodatosgetset2(String EmSerEmId, String EmSerSerCod, String EmSerFH) {
        this.EmSerEmId = EmSerEmId;
        this.EmSerSerCod = EmSerSerCod;
        this.EmSerFH = EmSerFH;
    }

      public ingresodatosgetset2(){
    
}
    
    public String getEmSerEmId() {
        return EmSerEmId;
    }

    public void setEmSerEmId(String EmSerEmId) {
        this.EmSerEmId = EmSerEmId;
    }

    public String getEmSerSerCod() {
        return EmSerSerCod;
    }

    public void setEmSerSerCod(String EmSerSerCod) {
        this.EmSerSerCod = EmSerSerCod;
    }

    public String getEmSerFH() {
        return EmSerFH;
    }

    public void setEmSerFH(String EmSerFH) {
        this.EmSerFH = EmSerFH;
    }
        
    private String RespCodigo;
    private String RespCliId;
    private String RespCodEnc;
    private String RespCodPre;
    private String RespRespuesta;

    public ingresodatosgetset2(String RespCodigo, String RespCliId, String RespCodEnc, String RespCodPre, String RespRespuesta) {
        this.RespCodigo = RespCodigo;
        this.RespCliId = RespCliId;
        this.RespCodEnc = RespCodEnc;
        this.RespCodPre = RespCodPre;
        this.RespRespuesta = RespRespuesta;
    }

    public String getRespCodigo() {
        return RespCodigo;
    }

    public void setRespCodigo(String RespCodigo) {
        this.RespCodigo = RespCodigo;
    }

    public ingresodatosgetset2(String RespCodEnc) {
        this.RespCodEnc = RespCodEnc;
    }

    public String getRespCliId() {
        return RespCliId;
    }

    public void setRespCliId(String RespCliId) {
        this.RespCliId = RespCliId;
    }

    public String getRespCodEnc() {
        return RespCodEnc;
    }

    public void setRespCodEnc(String RespCodEnc) {
        this.RespCodEnc = RespCodEnc;
    }

    public String getRespCodPre() {
        return RespCodPre;
    }

    public void setRespCodPre(String RespCodPre) {
        this.RespCodPre = RespCodPre;
    }

    public String getRespRespuesta() {
        return RespRespuesta;
    }

    public void setRespRespuesta(String RespRespuesta) {
        this.RespRespuesta = RespRespuesta;
    }
    
    
    
    
}
