/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package sistemazapatos;

import Conexion.Conexion;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 *
 * @author brant
 */
public class ControladorLogin {

    String usuario, pass, passReal;
    boolean existe = false;
    Login login = new Login();
    Conexion conexion = new Conexion();

    public ControladorLogin(String usuario, String pass) {

        this.usuario = usuario;
        this.pass = pass;

    }

    public String verificacion() {

        String mensaje = "";

        if (usuario.equals("Ingrese su usuario") || usuario.length() == 0) {
            mensaje = "Ingrese su usuario";

        } else if (pass.equals("Ingrese su contraseña") || pass.length() == 0) {
            mensaje = "Ingrese su contraseña";

        } else {

            //Conexion
            Statement st;
            ResultSet rs;

            try {
                st = conexion.con.createStatement();
                rs = st.executeQuery("SELECT * FROM sistemamg.empleado where usuarioEmpleado='" + this.usuario + "';");
                while (rs.next()) {
                    if (rs.getString("idEmpleado").length() != 0) {
                        existe = true;
                    }
                }

            } catch (SQLException e) {
                System.out.println("Error");
            }

            try {
                st = conexion.con.createStatement();
                rs = st.executeQuery("SELECT * FROM sistemamg.empleado where usuarioEmpleado='" + this.usuario + "';");
                while (rs.next()) {
                    passReal = rs.getString("contraseñaEmpleado");

                }

            } catch (SQLException e) {
                System.out.println("Error");
            }

            if (!existe) {
                mensaje = "Usuario incorrecto";

            } else if (!pass.equals(passReal)) {
                mensaje = "Contraseña incorrecta";

            }

        }

        return mensaje;
    }

}
