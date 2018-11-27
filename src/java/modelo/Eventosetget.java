/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package modelo;

/**
 *
 * @author SENA
 */
public class Eventosetget {
    private String Evecodigo;
    private String EveEmpId;
    private String EveLugCod;
    private String Descripcion;
    private String EveFoto;
    private String EveFecHo;

    public Eventosetget(String Evecodigo, String EveEmpId, String EveLugCod, String Descripcion, String EveFoto, String EveFecHo) {
        this.Evecodigo = Evecodigo;
        this.EveEmpId = EveEmpId;
        this.EveLugCod = EveLugCod;
        this.Descripcion = Descripcion;
        this.EveFoto = EveFoto;
        this.EveFecHo = EveFecHo;
        
    }
    public Eventosetget(){
        
    }

    public String getEvecodigo() {
        return Evecodigo;
    }

    public void setEvecodigo(String Evecodigo) {
        this.Evecodigo = Evecodigo;
    }

    public String getEveEmpId() {
        return EveEmpId;
    }

    public void setEveEmpId(String EveEmpId) {
        this.EveEmpId = EveEmpId;
    }

    public String getEveLugCod() {
        return EveLugCod;
    }

    public void setEveLugCod(String EveLugCod) {
        this.EveLugCod = EveLugCod;
    }

    public String getDescripcion() {
        return Descripcion;
    }

    public void setDescripcion(String Descripcion) {
        this.Descripcion = Descripcion;
    }

    public String getEveFoto() {
        return EveFoto;
    }

    public void setEveFoto(String EveFoto) {
        this.EveFoto = EveFoto;
    }

    public String getEveFecHo() {
        return EveFecHo;
    }

    public void setEveFecHo(String EveFecHo) {
        this.EveFecHo = EveFecHo;
    }
    
}
