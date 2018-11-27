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
public class Lugarsetget {
    public String  LugCodigo;
    public String  LugUbicacion;
    public String  LugHorario;
    public String LugCosto;
    public String LugCapacidad;
    public String LugEstado;

    public Lugarsetget(String LugCodigo, String LugUbicacion, String LugHorario, String LugCosto, String LugCapacidad, String LugEstado) {
        this.LugCodigo = LugCodigo;
        this.LugUbicacion = LugUbicacion;
        this.LugHorario = LugHorario;
        this.LugCosto = LugCosto;
        this.LugCapacidad = LugCapacidad;
        this.LugEstado = LugEstado;
   
    }

    public Lugarsetget(){
        
    }
    public String getLugCodigo() {
        return LugCodigo;
    }

    public void setLugCodigo(String LugCodigo) {
        this.LugCodigo = LugCodigo;
    }

    public String getLugUbicacion() {
        return LugUbicacion;
    }

    public void setLugUbicacion(String LugUbicacion) {
        this.LugUbicacion = LugUbicacion;
    }

    public String getLugHorario() {
        return LugHorario;
    }

    public void setLugHorario(String LugHorario) {
        this.LugHorario = LugHorario;
    }

    public String getLugCosto() {
        return LugCosto;
    }

    public void setLugCosto(String LugCosto) {
        this.LugCosto = LugCosto;
    }

    public String getLugCapacidad() {
        return LugCapacidad;
    }

    public void setLugCapacidad(String LugCapacidad) {
        this.LugCapacidad = LugCapacidad;
    }

    public String getLugEstado() {
        return LugEstado;
    }

    public void setLugEstado(String LugEstado) {
        this.LugEstado = LugEstado;
    }
    
    
}
