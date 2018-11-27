/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package modelo;

/**
 *
 * @author user
 */
public class Caddiesetget {

    private String cadId;
    private String CadFun;
    private String CadNombre;
    private String CadRanking;
    private String Estado;
    private String CadFoto;

    public Caddiesetget(String cadId, String CadFun, String CadNombre, String CadRanking, String Estado, String CadFoto) {
        this.cadId = cadId;
        this.CadFun = CadFun;
        this.CadNombre = CadNombre;
        this.CadRanking = CadRanking;
        this.Estado = Estado;
        this.CadFoto = CadFoto;
    }
    public Caddiesetget(){
        
    }

    public String getCadId() {
        return cadId;
    }

    public void setCadId(String cadId) {
        this.cadId = cadId;
    }

    public String getCadFun() {
        return CadFun;
    }

    public void setCadFun(String CadFun) {
        this.CadFun = CadFun;
    }

    public String getCadNombre() {
        return CadNombre;
    }

    public void setCadNombre(String CadNombre) {
        this.CadNombre = CadNombre;
    }

    public String getCadRanking() {
        return CadRanking;
    }

    public void setCadRanking(String CadRanking) {
        this.CadRanking = CadRanking;
    }

    public String getEstado() {
        return Estado;
    }

    public void setEstado(String Estado) {
        this.Estado = Estado;
    }

    public String getCadFoto() {
        return CadFoto;
    }

    public void setCadFoto(String CadFoto) {
        this.CadFoto = CadFoto;
    }

    
    
}
