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
public class ClienteCaddiesetget {

    private String  CliCaCodigo;
    private String  CliCaCliId;
    private String  CliCaCaId;
    private String  CliCaFHSer;
    private String  CliCaCalific;
    private String CliCaTalega;

    public ClienteCaddiesetget(String CliCaCodigo, String CliCaCliId, String CliCaCaId, String CliCaFHSer, String CliCaCalific, String CliCaTalega) {
        this.CliCaCodigo = CliCaCodigo;
        this.CliCaCliId = CliCaCliId;
        this.CliCaCaId = CliCaCaId;
        this.CliCaFHSer = CliCaFHSer;
        this.CliCaCalific = CliCaCalific;
        this.CliCaTalega = CliCaTalega;

    }

    
    public ClienteCaddiesetget(){
        
    }
    
    
    public String getCliCaCodigo() {
        return CliCaCodigo;
    }

    public void setCliCaCodigo(String CliCaCodigo) {
        this.CliCaCodigo = CliCaCodigo;
    }

    public String getCliCaCliId() {
        return CliCaCliId;
    }

    public void setCliCaCliId(String CliCaCliId) {
        this.CliCaCliId = CliCaCliId;
    }

    public String getCliCaCaId() {
        return CliCaCaId;
    }

    public void setCliCaCaId(String CliCaCaId) {
        this.CliCaCaId = CliCaCaId;
    }

    public String getCliCaFHSer() {
        return CliCaFHSer;
    }

    public void setCliCaFHSer(String CliCaFHSer) {
        this.CliCaFHSer = CliCaFHSer;
    }

    public String getCliCaCalific() {
        return CliCaCalific;
    }

    public void setCliCaCalific(String CliCaCalific) {
        this.CliCaCalific = CliCaCalific;
    }

    public String getCliCaTalega() {
        return CliCaTalega;
    }

    public void setCliCaTalega(String CliCaTalega) {
        this.CliCaTalega = CliCaTalega;
    }

}

