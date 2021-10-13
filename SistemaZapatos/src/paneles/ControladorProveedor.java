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
public class ControladorProveedor {

    String nombre;
    String apellido;
    String cedula;
    String numeroCuenta;
    String diasPlazo;
    String telefono;
    String recibo;
    String banco;
    String id;

    Conexion conexion = new Conexion();
    pnlProveedores proveedor = new pnlProveedores();

    public ControladorProveedor(String nombre, String apellido, String cedula,
            String numeroCuenta, String diasPlazo, String telefono, String recibo, String banco, String id) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.numeroCuenta = numeroCuenta;
        this.diasPlazo = diasPlazo;
        this.telefono = telefono;
        this.recibo = recibo;
        this.banco = banco;
        this.id = id;

        System.out.println("nombre: " + this.nombre + " apellido: " + this.apellido
                + " cedula: " + this.cedula + " numeroCuenta: " + this.numeroCuenta
                + " dias Plazo: " + this.diasPlazo + " telefono: " + this.telefono
                + " recibo: " + this.recibo + " banco: " + this.banco + " id: " + this.id);
    }

    public String verificacion(boolean modificar) {

        String mensaje = "";
        Pattern patronNombreApellido = Pattern.compile("[a-zA-ZñÑ]{0,50}");
        Pattern patronCedula = Pattern.compile("[0-9]{10,15}");
        Pattern patronDiasPlazo = Pattern.compile("[0-9]{1,3}");
        Pattern patronTelefono = Pattern.compile("[0-9]{7,15}");
        Pattern patronBanco = Pattern.compile("[a-zA-Z0-9,.\\-ñÑ ]{3,250}");

        if (this.nombre.equals("") || this.apellido.equals("") || this.cedula.equals("")
                || this.numeroCuenta.equals("") || this.diasPlazo.equals("")
                || this.telefono.equals("") || this.banco.equals("") || this.recibo.equals("--Seleccione Recibo--")) {

            mensaje = "Llene todos los campos por favor";
        } else {

            //Regex Banco
            Matcher matchBanco = patronBanco.matcher(this.banco);
            if (!matchBanco.matches()) {
                mensaje = "El nombre del bancopuede contener letras, números y algunos símbolos";
            }

            //Regex Número teléfono
            Matcher matchTelefono = patronTelefono.matcher(this.telefono);
            if (!matchTelefono.matches()) {
                mensaje = "El número de teléfono solo puede contener números, de 7 a 15";
            }

            //Regex Días Plazo
            Matcher matchDiasPlazo = patronDiasPlazo.matcher(this.diasPlazo);
            if (!matchDiasPlazo.matches()) {
                mensaje = "Los días solo pueden ser números";
            }
            //Regex Número Cuenta
            Matcher matchNumeroCUenta = patronCedula.matcher(this.numeroCuenta);
            if (!matchNumeroCUenta.matches()) {
                mensaje = "El número de cuenta solo pueden ser números, de 10 a 15 dígitos";
            }
            //Regex Cedula
            Matcher matchCedula = patronCedula.matcher(this.cedula);
            if (!matchCedula.matches()) {
                mensaje = "La cédula/RUC debe contener solo números, de 10 a 15";
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
            String cedulaMod = "";

            if (modificar) {

                try {
                    st = conexion.con.createStatement();
                    rs = st.executeQuery("SELECT cedulaRucProveedor FROM sistemamg.proveedor where idProveedor=" + this.id + ";");
                    while (rs.next()) {
                        cedulaMod = rs.getString("cedulaRucProveedor").toString();

                    }

                } catch (Exception e) {
                    System.out.println("Error Cedula/ proveedor modificado");
                }

            }

            try {
                st = conexion.con.createStatement();
                rs = st.executeQuery("SELECT cedulaRucProveedor FROM sistemamg.proveedor where cedulaRucProveedor='" + this.cedula + "';");
                while (rs.next()) {
                    cedulaVer = rs.getString("cedulaRucProveedor").toString();

                }

            } catch (Exception e) {
                System.out.println("Error Cedula");
            }

            if (cedulaVer.length() != 0 && modificar == false) {
                mensaje = "El proveedor ya está registrado por su número de cédula";
            } else if (modificar == true) {
                if (cedulaMod.equals(cedulaVer) || cedulaVer == "") {
                    mensaje = "";
                } else {
                    mensaje = "El proveedor ya está registrado por su número de cédula";
                }

            }

        }

        System.out.println("modificar");
        if (mensaje.equals("") && modificar == false) {
            Statement st;
            ResultSet rs;

            try {
                st = conexion.con.createStatement();
                st.executeUpdate("INSERT INTO `sistemamg`.`proveedor` "
                        + "(`nombreProveedor`, `apellidoProveedor`, `cedulaRucProveedor`, "
                        + "`numeroCuenta`, `diasPlazo`, `numeroTelefono`,"
                        + "`reciboProveedor`,`bancoProveedor`) "
                        + "VALUES ('" + this.nombre + "', '" + this.apellido + "', '" + this.cedula
                        + "', '" + this.numeroCuenta + "', '" + this.diasPlazo + "', '" + this.telefono + "', '" + this.recibo + "', '" + this.banco + "');");

            } catch (Exception e) {
                System.out.println("Error al registrar");
            }

        } else if (mensaje.equals(
                "") && modificar == true) {

            PreparedStatement ps = null;
            try {

                ps = conexion.con.prepareStatement("UPDATE `sistemamg`.`proveedor` SET "
                        + "`nombreProveedor`='" + this.nombre + "',"
                        + "`apellidoProveedor`='" + this.apellido + "',"
                        + "`cedulaRucProveedor`='" + this.cedula + "',"
                        + "`numeroCuenta`='" + this.numeroCuenta + "',"
                        + "`diasPlazo`='" + this.diasPlazo + "',"
                        + "`numeroTelefono`='" + this.telefono + "',"
                        + "`reciboProveedor`='" + this.recibo + "',"
                        + "`bancoProveedor`='" + this.banco + "'"
                        + "WHERE (`idProveedor`='" + this.id + "');");
                ps.execute();

            } catch (SQLException ex) {
                JOptionPane.showMessageDialog(null, "Error al Modificar Proveedor");
                System.out.println(ex.toString());
            }

        }

        return mensaje;
    }

}
