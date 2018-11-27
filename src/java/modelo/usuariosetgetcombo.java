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
public class usuariosetgetcombo {
     private String UsuCargo;  

    public usuariosetgetcombo(String UsuCargo) {
        this.UsuCargo = UsuCargo;
    }
     
    public usuariosetgetcombo(){
        
    }

    public String getUsuCargo() {
        return UsuCargo;
    }

    public void setUsuCargo(String UsuCargo) {
        this.UsuCargo = UsuCargo;
    }
     
}
