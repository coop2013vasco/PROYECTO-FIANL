/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package modelo;

import Controlador.Conexion;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import javax.swing.JOptionPane;

/**
 *
 * @author user
 */
public class Consultados {
     Conexion con=new Conexion();
   Connection cnn=con.conexionbd();
    PreparedStatement ps=null;
    ResultSet rs=null;
  
    public   ArrayList<Usuariosetget> ConsultaUsuario(){
        ArrayList<Usuariosetget> arreglo=new ArrayList<Usuariosetget>();

    try {
        ps=cnn.prepareStatement("SELECT*FROM Usuario");
        rs=ps.executeQuery();
    while(rs.next()){
        Usuariosetget getset=new Usuariosetget(rs.getString(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getString(6),rs.getString(7),rs.getString(8));
        arreglo.add(getset);
    }
    }catch (Exception e){
        JOptionPane.showMessageDialog(null,"ERROR"+e);
    }
    return arreglo;
    }
    
    
    public   ArrayList<Fundacionsetget> ConsultaFundacion(){
        ArrayList<Fundacionsetget> arreglo=new ArrayList<Fundacionsetget>();

    try {
        ps=cnn.prepareStatement("SELECT*FROM Fundacion");
        rs=ps.executeQuery();
    while(rs.next()){
       Fundacionsetget getset=new Fundacionsetget(rs.getString(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getString(6));
        arreglo.add(getset);
    }
    }catch (Exception e){
        JOptionPane.showMessageDialog(null,"ERROR"+e);
    }
    return arreglo;
    }
   public   ArrayList<Empleadosetget> ConsultaEmpleado(){
        ArrayList<Empleadosetget> arreglo=new ArrayList<Empleadosetget>();

    try {
        ps=cnn.prepareStatement("SELECT*FROM Empleado");
        rs=ps.executeQuery();
    while(rs.next()){
       Empleadosetget getset=new Empleadosetget(rs.getString(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getString(6),rs.getString(7));
        arreglo.add(getset);
    }
    }catch (Exception e){
        JOptionPane.showMessageDialog(null,"ERROR"+e);
    }
    return arreglo;
    } 
  
   public   ArrayList<Caddiesetget> ConsultaCaddie(){
        ArrayList<Caddiesetget> arreglo=new ArrayList <Caddiesetget>();

    try {
        ps=cnn.prepareStatement("SELECT*FROM Caddie");
        rs=ps.executeQuery();
    while(rs.next()){
       Caddiesetget getset=new Caddiesetget(rs.getString(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getString(6));
        arreglo.add(getset);
    }
    }catch (Exception e){
        JOptionPane.showMessageDialog(null,"ERROR"+e);
    }
    return arreglo;
    } 
   
   
    public   ArrayList<ClienteCaddiesetget> ConsultaClienteCaddie(){
        ArrayList<ClienteCaddiesetget> arreglo=new ArrayList <ClienteCaddiesetget>();

    try {
        ps=cnn.prepareStatement("SELECT*FROM ClienteCaddie");
        rs=ps.executeQuery();
    while(rs.next()){
       ClienteCaddiesetget getset=new ClienteCaddiesetget(rs.getString(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getString(6));
        arreglo.add(getset);
    }
    }catch (Exception e){
        JOptionPane.showMessageDialog(null,"ERROR"+e);
    }
    return arreglo;
    } 
   
 public   ArrayList<Serviciosetget> ConsultaServicio(){
        ArrayList<Serviciosetget> arreglo=new ArrayList <Serviciosetget>();

    try {
        ps=cnn.prepareStatement("SELECT*FROM Servicio");
        rs=ps.executeQuery();
    while(rs.next()){
       Serviciosetget getset=new Serviciosetget(rs.getString(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5));
        arreglo.add(getset);
    }
    }catch (Exception e){
        JOptionPane.showMessageDialog(null,"ERROR"+e);
    }
    return arreglo;
    }    
 
  public   ArrayList<Lugarsetget> ConsultaLugar(){
        ArrayList<Lugarsetget> arreglo=new ArrayList <Lugarsetget>();

    try {
        ps=cnn.prepareStatement("SELECT*FROM Lugar");
        rs=ps.executeQuery();
    while(rs.next()){
       Lugarsetget getset=new Lugarsetget(rs.getString(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getString(6));
        arreglo.add(getset);
    }
    }catch (Exception e){
        JOptionPane.showMessageDialog(null,"ERROR"+e);
    }
    return arreglo;
    }    
   public   ArrayList<Reservagetset> ConsultaReserva(){
        ArrayList<Reservagetset> arreglo=new ArrayList <Reservagetset>();

    try {
        ps=cnn.prepareStatement("SELECT*FROM Reservacion");
        rs=ps.executeQuery();
    while(rs.next()){
       Reservagetset getset=new Reservagetset(rs.getString(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getString(6),rs.getString(7));
        arreglo.add(getset);
    }
    }catch (Exception e){
        JOptionPane.showMessageDialog(null,"ERROR"+e);
    }
    return arreglo;
    }    
   
     public   ArrayList<Eventosetget> ConsultaEvento(){
        ArrayList<Eventosetget> arreglo=new ArrayList <Eventosetget>();

    try {
        ps=cnn.prepareStatement("SELECT*FROM Evento");
        rs=ps.executeQuery();
    while(rs.next()){
        Eventosetget getset=new Eventosetget(rs.getString(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getString(6));
        arreglo.add(getset);
    }
    }catch (Exception e){
        JOptionPane.showMessageDialog(null,"ERROR"+e);
    }
    return arreglo;
    } 
  
      public   ArrayList<usuariosetgetcombo> ConsultaCargoUsuario(){
        ArrayList<usuariosetgetcombo> arreglo=new ArrayList <usuariosetgetcombo>();

    try {
        ps=cnn.prepareStatement("SELECT UsuCargo from usuario ");
        rs=ps.executeQuery();
    while(rs.next()){
        usuariosetgetcombo getset=new usuariosetgetcombo(rs.getString(1));
        arreglo.add(getset);
    }
    }catch (Exception e){
        JOptionPane.showMessageDialog(null,"ERROR"+e);
    }
    return arreglo;
    }
 
     
      
   
         public   ArrayList<caddiesetgetcombo> ConsultaCaddieid(){
        ArrayList<caddiesetgetcombo> arreglo=new ArrayList <caddiesetgetcombo>();

    try {
        ps=cnn.prepareStatement("SELECT CadId from caddie");
        rs=ps.executeQuery();
    while(rs.next()){
        caddiesetgetcombo getset=new caddiesetgetcombo(rs.getString(1));
        arreglo.add(getset);
    }
    }catch (Exception e){
        JOptionPane.showMessageDialog(null,"ERROR"+e);
    }
    return arreglo;
    }
         
         
         
             public   ArrayList<fundacionsetgetcombo> ConsultaCaddieFun(){
        ArrayList<fundacionsetgetcombo> arreglo=new ArrayList <fundacionsetgetcombo>();

    try {
        ps=cnn.prepareStatement("SELECT CadFun from caddie");
        rs=ps.executeQuery();
    while(rs.next()){
        fundacionsetgetcombo getset=new fundacionsetgetcombo(rs.getString(1));
        arreglo.add(getset);
    }
    }catch (Exception e){
        JOptionPane.showMessageDialog(null,"ERROR"+e);
    }
    return arreglo;
    }    
             
               public   ArrayList<rankinsetgetcombo> Consultaranking(){
        ArrayList<rankinsetgetcombo> arreglo=new ArrayList <rankinsetgetcombo>();

    try {
        ps=cnn.prepareStatement("SELECT CadRanking from caddie");
        rs=ps.executeQuery();
    while(rs.next()){
        rankinsetgetcombo  getset=new rankinsetgetcombo(rs.getString(1));
        arreglo.add(getset);
    }
    }catch (Exception e){
        JOptionPane.showMessageDialog(null,"ERROR"+e);
    }
    return arreglo;
    }           
               
               
     public   ArrayList<disposetget> Consultadispo(){
        ArrayList<disposetget> arreglo=new ArrayList <disposetget>();

    try {
        ps=cnn.prepareStatement("SELECT Estado from caddie");
        rs=ps.executeQuery();
    while(rs.next()){
        disposetget  getset=new disposetget(rs.getString(1));
        arreglo.add(getset);
    }
    }catch (Exception e){
        JOptionPane.showMessageDialog(null,"ERROR"+e);
    }
    return arreglo;
    }              
        public   ArrayList<idclientecombo> Consultaidcliente(){
        ArrayList<idclientecombo> arreglo=new ArrayList <idclientecombo>();

    try {
        ps=cnn.prepareStatement("SELECT CliId from cliente");
        rs=ps.executeQuery();
    while(rs.next()){
        idclientecombo  getset=new idclientecombo(rs.getString(1));
        arreglo.add(getset);
    }
    }catch (Exception e){
        JOptionPane.showMessageDialog(null,"ERROR"+e);
    }
    return arreglo;
    }              
     
     public   ArrayList<estadoempleadocombo> Consultaestadoempleado(){
        ArrayList<estadoempleadocombo> arreglo=new ArrayList <estadoempleadocombo>();

    try {
        ps=cnn.prepareStatement("SELECT EmEstado from empleado");
        rs=ps.executeQuery();
    while(rs.next()){
        estadoempleadocombo  getset=new estadoempleadocombo(rs.getString(1));
        arreglo.add(getset);
    }
    }catch (Exception e){
        JOptionPane.showMessageDialog(null,"ERROR"+e);
    }
    return arreglo;
    }
     
        public   ArrayList<cargocombo> Consultacargo(){
        ArrayList<cargocombo> arreglo=new ArrayList <cargocombo>();

    try {
        ps=cnn.prepareStatement("SELECT EmCargo from empleado");
        rs=ps.executeQuery();
    while(rs.next()){
        cargocombo  getset=new cargocombo(rs.getString(1));
        arreglo.add(getset);
    }
    }catch (Exception e){
        JOptionPane.showMessageDialog(null,"ERROR"+e);
    }
    return arreglo;
    }
     
         public   ArrayList<tipoempleado> ConsultaTipo(){
        ArrayList<tipoempleado> arreglo=new ArrayList <tipoempleado>();

    try {
        ps=cnn.prepareStatement("SELECT EmTipo from empleado");
        rs=ps.executeQuery();
    while(rs.next()){
        tipoempleado  getset=new tipoempleado(rs.getString(1));
        arreglo.add(getset);
    }
    }catch (Exception e){
        JOptionPane.showMessageDialog(null,"ERROR"+e);
    }
    return arreglo;
    }
       
         
         public   ArrayList<nombresocio> ConsultaNom(){
        ArrayList<nombresocio> arreglo=new ArrayList <nombresocio>();

    try {
        ps=cnn.prepareStatement("SELECT CliNombre from Cliente");
        rs=ps.executeQuery();
    while(rs.next()){
        nombresocio  getset=new nombresocio(rs.getString(1));
        arreglo.add(getset);
    }
    }catch (Exception e){
        JOptionPane.showMessageDialog(null,"ERROR"+e);
    }
    return arreglo;
    }
         
         
     
   /* public   ArrayList<Empleadosetget> ConsultaEmpleado(){
        ArrayList<Empleadosetget> arreglo=new ArrayList<Empleadosetget>();

    try {
        ps=cnn.prepareStatement("SELECT*FROM Empleado");
        rs=ps.executeQuery();
    while(rs.next()){
        Usuariosetget getset=new Usuariosetget(rs.getString(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getString(6),rs.getString(7),rs.getString(8));
        arreglo.add(getset);
    }
    }catch (Exception e){
        JOptionPane.showMessageDialog(null,"ERROR"+e);
    }
    return arreglo;
    }
    */
}
