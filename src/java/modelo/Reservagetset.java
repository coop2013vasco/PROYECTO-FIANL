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
public class Reservagetset {
    public String ResCodReserva;
    public String ResCliId;
    public String ResLugCodigo;
    public String ResSerCodigo;
    public String ResPrecio;
    public String ResFHInicio;
    public String ResFHFin;

    public Reservagetset(String ResCodReserva, String ResCliId, String ResLugCodigo, String ResSerCodigo, String ResPrecio, String ResFHInicio, String ResFHFin) {
        this.ResCodReserva = ResCodReserva;
        this.ResCliId = ResCliId;
        this.ResLugCodigo = ResLugCodigo;
        this.ResSerCodigo = ResSerCodigo;
        this.ResPrecio = ResPrecio;
        this.ResFHInicio = ResFHInicio;
        this.ResFHFin = ResFHFin;
    
    }
    public Reservagetset(){
        
    }

    public String getResCodReserva() {
        return ResCodReserva;
    }

    public void setResCodReserva(String ResCodReserva) {
        this.ResCodReserva = ResCodReserva;
    }

    public String getResCliId() {
        return ResCliId;
    }

    public void setResCliId(String ResCliId) {
        this.ResCliId = ResCliId;
    }

    public String getResLugCodigo() {
        return ResLugCodigo;
    }

    public void setResLugCodigo(String ResLugCodigo) {
        this.ResLugCodigo = ResLugCodigo;
    }

    public String getResSerCodigo() {
        return ResSerCodigo;
    }

    public void setResSerCodigo(String ResSerCodigo) {
        this.ResSerCodigo = ResSerCodigo;
    }

    public String getResPrecio() {
        return ResPrecio;
    }

    public void setResPrecio(String ResPrecio) {
        this.ResPrecio = ResPrecio;
    }

    public String getResFHInicio() {
        return ResFHInicio;
    }

    public void setResFHInicio(String ResFHInicio) {
        this.ResFHInicio = ResFHInicio;
    }

    public String getResFHFin() {
        return ResFHFin;
    }

    public void setResFHFin(String ResFHFin) {
        this.ResFHFin = ResFHFin;
    }

}
