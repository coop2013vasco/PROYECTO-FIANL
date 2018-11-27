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
public class Serviciosetget {
 private String SerCodigo;
 private String SerNombre;
 private String SerCosto;
 private String SerDescripcion;
 private String SerEstado;

    public Serviciosetget(String SerCodigo, String SerNombre, String SerCosto, String SerDescripcion, String SerEstado) {
        this.SerCodigo = SerCodigo;
        this.SerNombre = SerNombre;
        this.SerCosto = SerCosto;
        this.SerDescripcion = SerDescripcion;
        this.SerEstado = SerEstado;
   
    }
    public Serviciosetget(){
        
    }

    public String getSerCodigo() {
        return SerCodigo;
    }

    public void setSerCodigo(String SerCodigo) {
        this.SerCodigo = SerCodigo;
    }

    public String getSerNombre() {
        return SerNombre;
    }

    public void setSerNombre(String SerNombre) {
        this.SerNombre = SerNombre;
    }

    public String getSerCosto() {
        return SerCosto;
    }

    public void setSerCosto(String SerCosto) {
        this.SerCosto = SerCosto;
    }

    public String getSerDescripcion() {
        return SerDescripcion;
    }

    public void setSerDescripcion(String SerDescripcion) {
        this.SerDescripcion = SerDescripcion;
    }

    public String getSerEstado() {
        return SerEstado;
    }

    public void setSerEstado(String SerEstado) {
        this.SerEstado = SerEstado;
    }

}
