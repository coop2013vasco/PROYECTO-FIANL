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
public class fundacionsetgetcombo {
    
    private String CadFun;

    public fundacionsetgetcombo(String CadFun) {
        this.CadFun = CadFun;
    }
    public fundacionsetgetcombo(){
        
    }

    public String getCadFun() {
        return CadFun;
    }

    public void setCadFun(String CadFun) {
        this.CadFun = CadFun;
    }
}
