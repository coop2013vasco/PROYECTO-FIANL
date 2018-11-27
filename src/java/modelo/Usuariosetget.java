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
public class Usuariosetget {
    private String UsuId;
    private String UsuUsuario;
    private String UsuClave;
    private String UsuRol;
    private String UsuNombre;
    private String UsuCargo;
    private String UsuFoto;
    private String UsuEstado;

    public Usuariosetget(String UsuId, String UsuUsuario, String UsuClave, String UsuRol, String UsuNombre, String UsuCargo, String UsuFoto, String UsuEstado) {
        this.UsuId = UsuId;
        this.UsuUsuario = UsuUsuario;
        this.UsuClave = UsuClave;
        this.UsuRol = UsuRol;
        this.UsuNombre = UsuNombre;
        this.UsuCargo = UsuCargo;
        this.UsuFoto = UsuFoto;
        this.UsuEstado = UsuEstado;
    }
    public Usuariosetget(){
        
    }
    
    public String getUsuId() {
        return UsuId;
    }

    public void setUsuId(String UsuId) {
        this.UsuId = UsuId;
    }

    public String getUsuUsuario() {
        return UsuUsuario;
    }

    public void setUsuUsuario(String UsuUsuario) {
        this.UsuUsuario = UsuUsuario;
    }

    public String getUsuClave() {
        return UsuClave;
    }

    public void setUsuClave(String UsuClave) {
        this.UsuClave = UsuClave;
    }

    public String getUsuRol() {
        return UsuRol;
    }

    public void setUsuRol(String UsuRol) {
        this.UsuRol = UsuRol;
    }

    public String getUsuNombre() {
        return UsuNombre;
    }

    public void setUsuNombre(String UsuNombre) {
        this.UsuNombre = UsuNombre;
    }

    public String getUsuCargo() {
        return UsuCargo;
    }

    public void setUsuCargo(String UsuCargo) {
        this.UsuCargo = UsuCargo;
    }

    public String getUsuFoto() {
        return UsuFoto;
    }

    public void setUsuFoto(String UsuFoto) {
        this.UsuFoto = UsuFoto;
    }

    public String getUsuEstado() {
        return UsuEstado;
    }

    public void setUsuEstado(String UsuEstado) {
        this.UsuEstado = UsuEstado;
    }

}
