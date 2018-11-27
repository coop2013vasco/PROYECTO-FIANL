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
public class caddiesetgetcombo {
     private String CadId;

    public caddiesetgetcombo(String CadId) {
        this.CadId = CadId;
        
    }
    public caddiesetgetcombo(){
        
    }

    public String getCadId() {
        return CadId;
    }

    public void setCadId(String CadId) {
        this.CadId = CadId;
    }
}
