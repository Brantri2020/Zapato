/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package paneles;

import Conexion.Conexion;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import javax.swing.JOptionPane;

/**
 *
 * @author brant
 */
public class ControladorEmpleados {

    String nombre;
    String apellido;
    String cedula;
    String direccion;
    String usuario;
    String pass1;
    String pass2;
    String rol;
    String id;

    Conexion conexion = new Conexion();
    pnlEmpleados empleado = new pnlEmpleados();

    public ControladorEmpleados(String nombre, String apellido, String cedula,
            String direccion, String usuario, String pass1, String pass2, String rol, String id) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.direccion = direccion;
        this.usuario = usuario;
        this.pass1 = pass1;
        this.pass2 = pass2;
        this.rol = rol;
        this.id = id;

        System.out.println("nombre: " + this.nombre + " apellido: " + this.apellido
                + " cedula: " + this.cedula + " direccion: " + this.direccion
                + " usuario: " + this.usuario + " pass1: " + this.pass1
                + " pass2: " + this.pass2 + " rol: " + this.rol + " id: " + this.id);
    }

    public String verificacion(boolean modificar) {

        String mensaje = "";
        Pattern patronNombreApellido = Pattern.compile("[a-zA-ZñÑ]{0,50}");
        Pattern patronCedula = Pattern.compile("[0-9]{10,15}");
        Pattern patronDireccion = Pattern.compile("[a-zA-Z0-9,.\\-ñÑ ]{3,250}");
        Pattern patronUsuario = Pattern.compile("[a-zA-Z0-9ñÑ]{5,15}");
        Pattern patronPass = Pattern.compile("[a-zA-Z0-9ñÑ]{8,15}");

        if (this.nombre.equals("") || this.apellido.equals("") || this.cedula.equals("")
                || this.direccion.equals("") || this.usuario.equals("")
                || this.pass1.equals("") || this.pass2.equals("")
                || this.rol.equals("--Seleccione un rol--")) {

            mensaje = "Llene todos los campos por favor";
        } else {
            //Contraseñas iguales
            if (!this.pass2.equals(this.pass1)) {
                mensaje = "Las contraseñas no coinciden";
            }

            if (modificar && this.pass1.equals("***") && this.pass2.equals("***")) {

            } else {

                //Regex Pass1
                Matcher matchPass = patronPass.matcher(this.pass1);
                if (!matchPass.matches()) {
                    mensaje = "La contraseña puede contener letras y número de longitud 8 hasta 15";
                }

            }

            //Regex Usuario
            Matcher matchUsuario = patronUsuario.matcher(this.usuario);
            if (!matchUsuario.matches()) {
                mensaje = "El usuario puede contener letras y números de longitud 5 hasta 15";
            }
            //Regex Direccion
            Matcher matchDireccion = patronDireccion.matcher(this.direccion);
            if (!matchDireccion.matches()) {
                mensaje = "La dirección puede contener solo caracteres, coma,punto y guión";
            }
            //Regex Cedula
            Matcher matchCedula = patronCedula.matcher(this.cedula);
            if (!matchCedula.matches()) {
                mensaje = "La cédula debe contener solo números de 10 a 15";
            }
            //Regex Apellido
            Matcher matchApellido = patronNombreApellido.matcher(this.apellido);
            if (!matchApellido.matches()) {
                mensaje = "El apellido debe contener solo letras y sin espacios";
            }
            //Regex Nombre
            Matcher matchNombre = patronNombreApellido.matcher(this.nombre);
            if (!matchNombre.matches()) {
                mensaje = "El nombre debe contener solo letras y sin espacios";
            }

        }

        if (mensaje.equals("")) {

            //Conexion
            Statement st;
            ResultSet rs;
            String cedulaVer = "";
            String usuarioVer = "";
            String cedulaMod = "";
            String usuarioMod = "";

            if (modificar) {


                
                try {
                    st = conexion.con.createStatement();
                    rs = st.executeQuery("SELECT usuarioEmpleado, cedulaEmpleado FROM sistemamg.empleado where idEmpleado=" + this.id + ";");
                    while (rs.next()) {
                        usuarioMod = rs.getString("usuarioEmpleado").toString();
                        cedulaMod = rs.getString("cedulaEmpleado").toString();

                    }

                } catch (Exception e) {
                    System.out.println("Error Cedula/ usuario modificado");
                }

            }

            try {
                st = conexion.con.createStatement();
                rs = st.executeQuery("SELECT usuarioEmpleado FROM sistemamg.empleado where usuarioEmpleado='" + this.usuario + "';");
                while (rs.next()) {
                    usuarioVer = rs.getString("usuarioEmpleado").toString();

                }

            } catch (Exception e) {
                System.out.println("ErrorUsiario");
            }

            try {
                st = conexion.con.createStatement();
                rs = st.executeQuery("SELECT cedulaEmpleado FROM sistemamg.empleado where cedulaEmpleado='" + this.cedula + "';");
                while (rs.next()) {
                    cedulaVer = rs.getString("cedulaEmpleado").toString();

                }

            } catch (Exception e) {
                System.out.println("Error Cedula");
            }
            
            if (usuarioVer.length() != 0 && modificar == false) {
                mensaje = "El nombre de usuario ya esta registrado";
            } else if (modificar == true) {

                if (usuarioMod.equals(usuarioVer) || usuarioVer == "") {
                    mensaje = "";
                } else {
                    mensaje = "El nombre de usuario ya esta registrado";
                }

            }

            if(mensaje.length()==0){
            if (cedulaVer.length() != 0 && modificar == false) {
                mensaje = "El usuario ya está registrado por su número de cédula";
            } else if (modificar == true) {
                if (cedulaMod.equals(cedulaVer)|| cedulaVer == "") {
                    mensaje = "";
                } else {
                    System.out.println("ENTREEE");
                    mensaje = "El usuario ya está registrado por su número de cédula";
                }

            }
            }

        }

        System.out.println("modificar");
        if (mensaje.equals("") && modificar == false) {
            Statement st;
            ResultSet rs;

            try {
                st = conexion.con.createStatement();
                st.executeUpdate("INSERT INTO `sistemamg`.`empleado` "
                        + "(`nombreEmpleado`, `apellidoEmpleado`, `cedulaEmpleado`, "
                        + "`direccionEmpleado`, `usuarioEmpleado`, `contraseñaEmpleado`,"
                        + "`rolEmpleado`) "
                        + "VALUES ('" + this.nombre + "', '" + this.apellido + "', '" + this.cedula
                        + "', '" + this.direccion + "', '" + this.usuario + "', '" + this.pass1 + "', '" + this.rol + "');");

            } catch (Exception e) {
                System.out.println("Error");
            }

        } else if (mensaje.equals(
                "") && modificar == true) {

            PreparedStatement ps = null;
            try {

                if (this.pass1.equals("***")) {

                    ps = conexion.con.prepareStatement("UPDATE `sistemamg`.`empleado` SET "
                            + "`nombreEmpleado`='" + this.nombre + "',"
                            + "`apellidoEmpleado`='" + this.apellido + "',"
                            + "`cedulaEmpleado`='" + this.cedula + "',"
                            + "`direccionEmpleado`='" + this.direccion + "',"
                            + "`usuarioEmpleado`='" + this.usuario + "',"
                            + "`rolEmpleado`='" + this.rol + "'"
                            + "WHERE (`idEmpleado`='" + this.id + "');");
                    ps.execute();

                } else {

                    ps = conexion.con.prepareStatement("UPDATE `sistemamg`.`empleado` SET "
                            + "`nombreEmpleado`='" + this.nombre + "',"
                            + "`apellidoEmpleado`='" + this.apellido + "',"
                            + "`cedulaEmpleado`='" + this.cedula + "',"
                            + "`direccionEmpleado`='" + this.direccion + "',"
                            + "`usuarioEmpleado`='" + this.usuario + "',"
                            + "`contraseñaEmpleado`='" + this.pass1 + "',"
                            + "`rolEmpleado`='" + this.rol + "'"
                            + "WHERE (`idEmpleado`='" + this.id + "');");
                    ps.execute();

                }

            } catch (SQLException ex) {
                JOptionPane.showMessageDialog(null, "Error al Modificar Empleado");
                System.out.println(ex.toString());
            }

        }

        return mensaje;
    }

}
