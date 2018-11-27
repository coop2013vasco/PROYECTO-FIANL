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
public class Fundacionsetget {
    private String FunNit;
    private String FunTelefono;
    private String FunUbicacion;
    private String FunNombre;
    private String Encargado;
    private String FunFoto;

    public Fundacionsetget(String FunNit, String FunTelefono, String FunUbicacion, String FunNombre, String Encargado, String FunFoto) {
        this.FunNit = FunNit;
        this.FunTelefono = FunTelefono;
        this.FunUbicacion = FunUbicacion;
        this.FunNombre = FunNombre;
        this.Encargado = Encargado;
        this.FunFoto = FunFoto;
    }
    
    public Fundacionsetget(){
        
    }

    public String getFunNit() {
        return FunNit;
    }

    public void setFunNit(String FunNit) {
        this.FunNit = FunNit;
    }

    public String getFunTelefono() {
        return FunTelefono;
    }

    public void setFunTelefono(String FunTelefono) {
        this.FunTelefono = FunTelefono;
    }

    public String getFunUbicacion() {
        return FunUbicacion;
    }

    public void setFunUbicacion(String FunUbicacion) {
        this.FunUbicacion = FunUbicacion;
    }

    public String getFunNombre() {
        return FunNombre;
    }

    public void setFunNombre(String FunNombre) {
        this.FunNombre = FunNombre;
    }

    public String getEncargado() {
        return Encargado;
    }

    public void setEncargado(String Encargado) {
        this.Encargado = Encargado;
    }

    public String getFunFoto() {
        return FunFoto;
    }

    public void setFunFoto(String FunFoto) {
        this.FunFoto = FunFoto;
    }
    
    
}
