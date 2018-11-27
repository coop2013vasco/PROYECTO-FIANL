/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package modelo;

/**
 *
 * @author Daniel
 */
public class editarperfilcliente {
    private String CliId;
    private String CliNombre;
    private String CliTipo;
    private String CliTelefono;
    private String CliFechVinculacion;
    private String CliFoto; 

    public editarperfilcliente(String CliId, String CliNombre, String CliTipo, String CliTelefono, String CliFechVinculacion, String CliFoto) {
        this.CliId = CliId;
        this.CliNombre = CliNombre;
        this.CliTipo = CliTipo;
        this.CliTelefono = CliTelefono;
        this.CliFechVinculacion = CliFechVinculacion;
        this.CliFoto = CliFoto;
    }
   public editarperfilcliente(){
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
}
