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
public class tipoempleado {
    
    private String EmTipo;

    public tipoempleado(String EmTipo) {
        this.EmTipo = EmTipo;
    }
    public tipoempleado(){
        
    }

    public String getEmTipo() {
        return EmTipo;
    }

    public void setEmTipo(String EmTipo) {
        this.EmTipo = EmTipo;
    }
}
