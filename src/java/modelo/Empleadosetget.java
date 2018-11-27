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
public class Empleadosetget {
    private String EmId;
    private String EmNombre;
    private String EmCargo;
    private String EmTipo;
    private String EmEspecialidad;
    private String EmEstado;
    private String EmFoto;

    public Empleadosetget(String EmId, String EmNombre, String EmCargo, String EmTipo, String EmEspecialidad, String EmEstado, String EmFoto) {
        this.EmId = EmId;
        this.EmNombre = EmNombre;
        this.EmCargo = EmCargo;
        this.EmTipo = EmTipo;
        this.EmEspecialidad = EmEspecialidad;
        this.EmEstado = EmEstado;
        this.EmFoto = EmFoto;
    }
    public Empleadosetget() {
}

    public String getEmId() {
        return EmId;
    }

    public void setEmId(String EmId) {
        this.EmId = EmId;
    }

    public String getEmNombre() {
        return EmNombre;
    }

    public void setEmNombre(String EmNombre) {
        this.EmNombre = EmNombre;
    }

    public String getEmCargo() {
        return EmCargo;
    }

    public void setEmCargo(String EmCargo) {
        this.EmCargo = EmCargo;
    }

    public String getEmTipo() {
        return EmTipo;
    }

    public void setEmTipo(String EmTipo) {
        this.EmTipo = EmTipo;
    }

    public String getEmEspecialidad() {
        return EmEspecialidad;
    }

    public void setEmEspecialidad(String EmEspecialidad) {
        this.EmEspecialidad = EmEspecialidad;
    }

    public String getEmEstado() {
        return EmEstado;
    }

    public void setEmEstado(String EmEstado) {
        this.EmEstado = EmEstado;
    }

    public String getEmFoto() {
        return EmFoto;
    }

    public void setEmFoto(String EmFoto) {
        this.EmFoto = EmFoto;
    }
    
}
