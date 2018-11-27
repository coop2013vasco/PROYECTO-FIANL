
package modelo;

public class ingresodatosgetset {
    
    private String RolCodigo;
    private String RolNombre;

    public ingresodatosgetset(String RolCodigo, String RolNombre) {
        this.RolCodigo = RolCodigo;
        this.RolNombre = RolNombre;
    }

    public ingresodatosgetset(){
    
}
    public String getRolCodigo() {
        return RolCodigo;
    }

    public void setRolCodigo(String RolCodigo) {
        this.RolCodigo = RolCodigo;
    }

    public String getRolNombre() {
        return RolNombre;
    }

 
   public void setRolNombre(String RolNombre) {
        this.RolNombre = RolNombre;
    }
    
    private String CliId;
    private String CliNombre;
    private String CliTipo;
    private String CliTelefono;
    private String CliFechVinculacion;
    private String CliFoto;

    public ingresodatosgetset(String CliId, String CliNombre, String CliTipo, String CliTelefono, String CliFechVinculacion, String CliFoto) {
        this.CliId = CliId;
        this.CliNombre = CliNombre;
        this.CliTipo = CliTipo;
        this.CliTelefono = CliTelefono;
        this.CliFechVinculacion = CliFechVinculacion;
        this.CliFoto = CliFoto;
    }

    public String getCliId() {
        return CliId;
    }

    public void setCliId(String CliId) {
        this.CliId = CliId;
    }

    public String getCliNombre() {
        return CliNombre;
    }

    public void setCliNombre(String CliNombre) {
        this.CliNombre = CliNombre;
    }

    public String getCliTipo() {
        return CliTipo;
    }

    public void setCliTipo(String CliTipo) {
        this.CliTipo = CliTipo;
    }

    public String getCliTelefono() {
        return CliTelefono;
    }

    public void setCliTelefono(String CliTelefono) {
        this.CliTelefono = CliTelefono;
    }

    public String getCliFechVinculacion() {
        return CliFechVinculacion;
    }

    public void setCliFechVinculacion(String CliFechVinculacion) {
        this.CliFechVinculacion = CliFechVinculacion;
    }

    public String getCliFoto() {
        return CliFoto;
    }

    public void setCliFoto(String CliFoto) {
        this.CliFoto = CliFoto;
    }
    
    private String TipCodigo;
    private String TipNombre; 
    private String TipDescripcion;

    public ingresodatosgetset(String TipCodigo, String TipNombre, String TipDescripcion) {
        this.TipCodigo = TipCodigo;
        this.TipNombre = TipNombre;
        this.TipDescripcion = TipDescripcion;
    }

    public String getTipCodigo() {
        return TipCodigo;
    }

    public void setTipCodigo(String TipCodigo) {
        this.TipCodigo = TipCodigo;
    }

    public String getTipNombre() {
        return TipNombre;
    }

    public void setTipNombre(String TipNombre) {
        this.TipNombre = TipNombre;
    }

    public String getTipDescripcion() {
        return TipDescripcion;
    }

    public void setTipDescripcion(String TipDescripcion) {
        this.TipDescripcion = TipDescripcion;
    }
     
    
    
    private String FpCodigo;
    private String FpTorneo;
    private String FpJugador;
    private String FpAnotadotor;
    private String FpFecha;

    public ingresodatosgetset(String FpCodigo, String FpTorneo, String FpJugador, String FpAnotadotor, String FpFecha) {
        this.FpCodigo = FpCodigo;
        this.FpTorneo = FpTorneo;
        this.FpJugador = FpJugador;
        this.FpAnotadotor = FpAnotadotor;
        this.FpFecha = FpFecha;
    }

    public String getFpCodigo() {
        return FpCodigo;
    }

    public void setFpCodigo(String FpCodigo) {
        this.FpCodigo = FpCodigo;
    }

    public String getFpTorneo() {
        return FpTorneo;
    }

    public void setFpTorneo(String FpTorneo) {
        this.FpTorneo = FpTorneo;
    }

    public String getFpJugador() {
        return FpJugador;
    }

    public void setFpJugador(String FpJugador) {
        this.FpJugador = FpJugador;
    }

    public String getFpAnotadotor() {
        return FpAnotadotor;
    }

    public void setFpAnotadotor(String FpAnotadotor) {
        this.FpAnotadotor = FpAnotadotor;
    }

    public String getFpFecha() {
        return FpFecha;
    }

    public void setFpFecha(String FpFecha) {
        this.FpFecha = FpFecha;
    }
    
    
private String ClFpFpCodigo;
private String ClFpCliId;
private String ClFpPar1;
private String ClFpPar2;
private String ClFpPar3;
private String ClFpPar4;
private String ClFpPar5;
private String ClFpPar6;
private String ClFpPar7;
private String ClFpPar8;
private String ClFpPar9;
private String ClFpSumaRonda1;
private String ClFpPar10;
private String ClFpPar11;
private String ClFpPar12;
private String ClFpPar13;
private String ClFpPar14;
private String ClFpPar15;
private String ClFpPar16;
private String ClFpPar17;
private String ClFpPar18;
private String ClFpSumaRonda2;
private String ClFpTotal;

    public ingresodatosgetset(String ClFpFpCodigo, String ClFpCliId, String ClFpPar1, String ClFpPar2, String ClFpPar3, String ClFpPar4, String ClFpPar5, String ClFpPar6, String ClFpPar7, String ClFpPar8, String ClFpPar9, String ClFpSumaRonda1, String ClFpPar10, String ClFpPar11, String ClFpPar12, String ClFpPar13, String ClFpPar14, String ClFpPar15, String ClFpPar16, String ClFpPar17, String ClFpPar18, String ClFpSumaRonda2, String ClFpTotal) {
        this.ClFpFpCodigo = ClFpFpCodigo;
        this.ClFpCliId = ClFpCliId;
        this.ClFpPar1 = ClFpPar1;
        this.ClFpPar2 = ClFpPar2;
        this.ClFpPar3 = ClFpPar3;
        this.ClFpPar4 = ClFpPar4;
        this.ClFpPar5 = ClFpPar5;
        this.ClFpPar6 = ClFpPar6;
        this.ClFpPar7 = ClFpPar7;
        this.ClFpPar8 = ClFpPar8;
        this.ClFpPar9 = ClFpPar9;
        this.ClFpSumaRonda1 = ClFpSumaRonda1;
        this.ClFpPar10 = ClFpPar10;
        this.ClFpPar11 = ClFpPar11;
        this.ClFpPar12 = ClFpPar12;
        this.ClFpPar13 = ClFpPar13;
        this.ClFpPar14 = ClFpPar14;
        this.ClFpPar15 = ClFpPar15;
        this.ClFpPar16 = ClFpPar16;
        this.ClFpPar17 = ClFpPar17;
        this.ClFpPar18 = ClFpPar18;
        this.ClFpSumaRonda2 = ClFpSumaRonda2;
        this.ClFpTotal = ClFpTotal;
    }

    public String getClFpFpCodigo() {
        return ClFpFpCodigo;
    }

    public void setClFpFpCodigo(String ClFpFpCodigo) {
        this.ClFpFpCodigo = ClFpFpCodigo;
    }

    public String getClFpCliId() {
        return ClFpCliId;
    }

    public void setClFpCliId(String ClFpCliId) {
        this.ClFpCliId = ClFpCliId;
    }

    public String getClFpPar1() {
        return ClFpPar1;
    }

    public void setClFpPar1(String ClFpPar1) {
        this.ClFpPar1 = ClFpPar1;
    }

    public String getClFpPar2() {
        return ClFpPar2;
    }

    public void setClFpPar2(String ClFpPar2) {
        this.ClFpPar2 = ClFpPar2;
    }

    public String getClFpPar3() {
        return ClFpPar3;
    }

    public void setClFpPar3(String ClFpPar3) {
        this.ClFpPar3 = ClFpPar3;
    }

    public String getClFpPar4() {
        return ClFpPar4;
    }

    public void setClFpPar4(String ClFpPar4) {
        this.ClFpPar4 = ClFpPar4;
    }

    public String getClFpPar5() {
        return ClFpPar5;
    }

    public void setClFpPar5(String ClFpPar5) {
        this.ClFpPar5 = ClFpPar5;
    }

    public String getClFpPar6() {
        return ClFpPar6;
    }

    public void setClFpPar6(String ClFpPar6) {
        this.ClFpPar6 = ClFpPar6;
    }

    public String getClFpPar7() {
        return ClFpPar7;
    }

    public void setClFpPar7(String ClFpPar7) {
        this.ClFpPar7 = ClFpPar7;
    }

    public String getClFpPar8() {
        return ClFpPar8;
    }

    public void setClFpPar8(String ClFpPar8) {
        this.ClFpPar8 = ClFpPar8;
    }

    public String getClFpPar9() {
        return ClFpPar9;
    }

    public void setClFpPar9(String ClFpPar9) {
        this.ClFpPar9 = ClFpPar9;
    }

    public String getClFpSumaRonda1() {
        return ClFpSumaRonda1;
    }

    public void setClFpSumaRonda1(String ClFpSumaRonda1) {
        this.ClFpSumaRonda1 = ClFpSumaRonda1;
    }

    public String getClFpPar10() {
        return ClFpPar10;
    }

    public void setClFpPar10(String ClFpPar10) {
        this.ClFpPar10 = ClFpPar10;
    }

    public String getClFpPar11() {
        return ClFpPar11;
    }

    public void setClFpPar11(String ClFpPar11) {
        this.ClFpPar11 = ClFpPar11;
    }

    public String getClFpPar12() {
        return ClFpPar12;
    }

    public void setClFpPar12(String ClFpPar12) {
        this.ClFpPar12 = ClFpPar12;
    }

    public String getClFpPar13() {
        return ClFpPar13;
    }

    public void setClFpPar13(String ClFpPar13) {
        this.ClFpPar13 = ClFpPar13;
    }

    public String getClFpPar14() {
        return ClFpPar14;
    }

    public void setClFpPar14(String ClFpPar14) {
        this.ClFpPar14 = ClFpPar14;
    }

    public String getClFpPar15() {
        return ClFpPar15;
    }

    public void setClFpPar15(String ClFpPar15) {
        this.ClFpPar15 = ClFpPar15;
    }

    public String getClFpPar16() {
        return ClFpPar16;
    }

    public void setClFpPar16(String ClFpPar16) {
        this.ClFpPar16 = ClFpPar16;
    }

    public String getClFpPar17() {
        return ClFpPar17;
    }

    public void setClFpPar17(String ClFpPar17) {
        this.ClFpPar17 = ClFpPar17;
    }

    public String getClFpPar18() {
        return ClFpPar18;
    }

    public void setClFpPar18(String ClFpPar18) {
        this.ClFpPar18 = ClFpPar18;
    }

    public String getClFpSumaRonda2() {
        return ClFpSumaRonda2;
    }

    public void setClFpSumaRonda2(String ClFpSumaRonda2) {
        this.ClFpSumaRonda2 = ClFpSumaRonda2;
    }

    public String getClFpTotal() {
        return ClFpTotal;
    }

    public void setClFpTotal(String ClFpTotal) {
        this.ClFpTotal = ClFpTotal;
    }

        private String PqCodRadicacion;
	private String PqCliId;
	private String PqTipo;
	private String PqFechaHor;
        private String PqContenido;
	private String PqEstado;
	private String PqRespuesta;

    public ingresodatosgetset(String PqCliId) {
        this.PqCliId = PqCliId;
    }
        

    public ingresodatosgetset(String PqCodRadicacion, String PqCliId, String PqTipo, String PqFechaHor, String PqContenido, String PqEstado, String PqRespuesta) {
        this.PqCodRadicacion = PqCodRadicacion;
        this.PqCliId = PqCliId;
        this.PqTipo = PqTipo;
        this.PqFechaHor = PqFechaHor;
        this.PqContenido = PqContenido;
        this.PqEstado = PqEstado;
        this.PqRespuesta = PqRespuesta;
    }

    public String getPqCodRadicacion() {
        return PqCodRadicacion;
    }

    public void setPqCodRadicacion(String PqCodRadicacion) {
        this.PqCodRadicacion = PqCodRadicacion;
    }

    public String getPqCliId() {
        return PqCliId;
    }

    public void setPqCliId(String PqCliId) {
        this.PqCliId = PqCliId;
    }

    public String getPqTipo() {
        return PqTipo;
    }

    public void setPqTipo(String PqTipo) {
        this.PqTipo = PqTipo;
    }

    public String getPqFechaHor() {
        return PqFechaHor;
    }

    public void setPqFechaHor(String PqFechaHor) {
        this.PqFechaHor = PqFechaHor;
    }

    public String getPqContenido() {
        return PqContenido;
    }

    public void setPqContenido(String PqContenido) {
        this.PqContenido = PqContenido;
    }

    public String getPqEstado() {
        return PqEstado;
    }

    public void setPqEstado(String PqEstado) {
        this.PqEstado = PqEstado;
    }

    public String getPqRespuesta() {
        return PqRespuesta;
    }

    public void setPqRespuesta(String PqRespuesta) {
        this.PqRespuesta = PqRespuesta;
    }
        
    private String EncCodigo;
    private String EncEncargado;
    private String EnDisponibilidad;
    private String EncNombre;
    private String EncCantPreguntas;
    private String Encfhp;
    private String Encfhe;
    private String Estadistica;
        
         public ingresodatosgetset(String EncCodigo, String EncEncargado, String EnDisponibilidad, String EncNombre, String EncCantPreguntas, String Encfhp, String Encfhe, String Estadistica) {
        this.EncCodigo = EncCodigo;
        this.EncEncargado = EncEncargado;
        this.EnDisponibilidad = EnDisponibilidad;
        this.EncNombre = EncNombre;
        this.EncCantPreguntas = EncCantPreguntas;
        this.Encfhp = Encfhp;
        this.Encfhe = Encfhe;
        this.Estadistica = Estadistica;
    }

    public String getEncCodigo() {
        return EncCodigo;
    }

    public void setEncCodigo(String EncCodigo) {
        this.EncCodigo = EncCodigo;
    }

    public String getEncEncargado() {
        return EncEncargado;
    }

    public void setEncEncargado(String EncEncargado) {
        this.EncEncargado = EncEncargado;
    }

    public String getEnDisponibilidad() {
        return EnDisponibilidad;
    }

    public void setEnDisponibilidad(String EnDisponibilidad) {
        this.EnDisponibilidad = EnDisponibilidad;
    }

    public String getEncNombre() {
        return EncNombre;
    }

    public void setEncNombre(String EncNombre) {
        this.EncNombre = EncNombre;
    }

    public String getEncCantPreguntas() {
        return EncCantPreguntas;
    }

    public void setEncCantPreguntas(String EncCantPreguntas) {
        this.EncCantPreguntas = EncCantPreguntas;
    }

    public String getEncfhp() {
        return Encfhp;
    }

    public void setEncfhp(String Encfhp) {
        this.Encfhp = Encfhp;
    }

    public String getEncfhe() {
        return Encfhe;
    }

    public void setEncfhe(String Encfhe) {
        this.Encfhe = Encfhe;
    }

    public String getEstadistica() {
        return Estadistica;
    }

    public void setEstadistica(String Estadistica) {
        this.Estadistica = Estadistica;
    }
         
           
}
