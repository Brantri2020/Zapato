/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package paneles;

import Conexion.Conexion;
import java.awt.Color;
import java.awt.Dimension;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import javax.swing.JOptionPane;
import javax.swing.JScrollPane;
import javax.swing.table.DefaultTableModel;

/**
 *
 * @author brant
 */
public class pnlPedidos extends javax.swing.JPanel {

    /**
     * Creates new form pnlInicioo
     */
    public pnlPedidos() {
        initComponents();
        btnNuevo.setVisible(true);
        btnRegistrar.setVisible(true);
        btnModificar.setVisible(false);
        btnEliminar.setVisible(false);



        
        
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        lblTituloPpedidos = new javax.swing.JLabel();
        jScrollPane1 = new javax.swing.JScrollPane();
        tblPedidos = new javax.swing.JTable();
        btnCargar = new javax.swing.JButton();
        jPanel2 = new javax.swing.JPanel();
        lblTituloPedido = new javax.swing.JLabel();
        jLabel4 = new javax.swing.JLabel();
        txtNombreProveedor = new javax.swing.JTextField();
        jLabel5 = new javax.swing.JLabel();
        txtApellidoProveedor = new javax.swing.JTextField();
        jLabel6 = new javax.swing.JLabel();
        txtCedulaProveedor = new javax.swing.JTextField();
        jLabel7 = new javax.swing.JLabel();
        txtNumeroCuenta = new javax.swing.JTextField();
        jLabel8 = new javax.swing.JLabel();
        txtTelefonoProveedor = new javax.swing.JTextField();
        jLabel9 = new javax.swing.JLabel();
        jLabel10 = new javax.swing.JLabel();
        cbxRecibo = new javax.swing.JComboBox<>();
        btnRegistrar = new javax.swing.JButton();
        lblMensaje = new javax.swing.JLabel();
        btnModificar = new javax.swing.JButton();
        btnEliminar = new javax.swing.JButton();
        btnNuevo = new javax.swing.JButton();
        lblId = new java.awt.Label();
        txtDiasPlazo = new javax.swing.JTextField();
        lblBanco = new javax.swing.JLabel();
        txtBanco = new javax.swing.JTextField();

        setBackground(new java.awt.Color(255, 255, 255));

        jPanel1.setBackground(new java.awt.Color(255, 255, 255));

        lblTituloPpedidos.setFont(new java.awt.Font("Tahoma", 0, 40)); // NOI18N
        lblTituloPpedidos.setText("Pedidos");

        tblPedidos.setFont(new java.awt.Font("Tahoma", 0, 18)); // NOI18N
        tblPedidos.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {
                {null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null}
            },
            new String [] {
                "Nombre", "Apellido", "C??dula/RUC", "N??mero cuenta", "D??as plazo", "N??mero tel??fono", "Recibo", "Banco"
            }
        ) {
            Class[] types = new Class [] {
                java.lang.String.class, java.lang.String.class, java.lang.String.class, java.lang.String.class, java.lang.String.class, java.lang.String.class, java.lang.String.class, java.lang.String.class
            };
            boolean[] canEdit = new boolean [] {
                false, false, false, false, false, false, false, false
            };

            public Class getColumnClass(int columnIndex) {
                return types [columnIndex];
            }

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit [columnIndex];
            }
        });
        tblPedidos.setRowHeight(30);
        tblPedidos.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                tblPedidosMouseClicked(evt);
            }
        });
        jScrollPane1.setViewportView(tblPedidos);

        btnCargar.setFont(new java.awt.Font("Tahoma", 0, 24)); // NOI18N
        btnCargar.setText("Cargar");
        btnCargar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnCargarActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jScrollPane1, javax.swing.GroupLayout.DEFAULT_SIZE, 1312, Short.MAX_VALUE)
                .addGap(18, 18, 18)
                .addComponent(btnCargar)
                .addGap(235, 235, 235))
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGap(602, 602, 602)
                .addComponent(lblTituloPpedidos)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(lblTituloPpedidos)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                        .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 112, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                        .addComponent(btnCargar)
                        .addGap(66, 66, 66))))
        );

        jPanel2.setBackground(new java.awt.Color(255, 255, 255));

        lblTituloPedido.setFont(new java.awt.Font("Tahoma", 0, 32)); // NOI18N
        lblTituloPedido.setText("Registrar nuevo pedido");

        jLabel4.setFont(new java.awt.Font("Tahoma", 0, 24)); // NOI18N
        jLabel4.setText("Nombre:");

        txtNombreProveedor.setFont(new java.awt.Font("Tahoma", 0, 24)); // NOI18N
        txtNombreProveedor.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                txtNombreProveedorActionPerformed(evt);
            }
        });

        jLabel5.setFont(new java.awt.Font("Tahoma", 0, 24)); // NOI18N
        jLabel5.setText("Apellido:");

        txtApellidoProveedor.setFont(new java.awt.Font("Tahoma", 0, 24)); // NOI18N
        txtApellidoProveedor.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                txtApellidoProveedorActionPerformed(evt);
            }
        });

        jLabel6.setFont(new java.awt.Font("Tahoma", 0, 24)); // NOI18N
        jLabel6.setText("C??dula/RUC:");

        txtCedulaProveedor.setFont(new java.awt.Font("Tahoma", 0, 24)); // NOI18N

        jLabel7.setFont(new java.awt.Font("Tahoma", 0, 24)); // NOI18N
        jLabel7.setText("N??mero cuenta:");

        txtNumeroCuenta.setFont(new java.awt.Font("Tahoma", 0, 24)); // NOI18N

        jLabel8.setFont(new java.awt.Font("Tahoma", 0, 24)); // NOI18N
        jLabel8.setText("D??as plazo:");

        txtTelefonoProveedor.setFont(new java.awt.Font("Tahoma", 0, 24)); // NOI18N

        jLabel9.setFont(new java.awt.Font("Tahoma", 0, 24)); // NOI18N
        jLabel9.setText("N??mero tel??fono:");

        jLabel10.setFont(new java.awt.Font("Tahoma", 0, 24)); // NOI18N
        jLabel10.setText("Factura/Nota venta:");

        cbxRecibo.setFont(new java.awt.Font("Tahoma", 0, 24)); // NOI18N
        cbxRecibo.setModel(new javax.swing.DefaultComboBoxModel<>(new String[] { "--Seleccione Recibo--", "Factura", "Nota de venta", "Otro" }));

        btnRegistrar.setFont(new java.awt.Font("Tahoma", 0, 30)); // NOI18N
        btnRegistrar.setText("Registrar");
        btnRegistrar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnRegistrarActionPerformed(evt);
            }
        });

        lblMensaje.setFont(new java.awt.Font("Tahoma", 0, 20)); // NOI18N
        lblMensaje.setForeground(new java.awt.Color(204, 0, 0));
        lblMensaje.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        lblMensaje.setHorizontalTextPosition(javax.swing.SwingConstants.CENTER);
        lblMensaje.setInheritsPopupMenu(false);

        btnModificar.setFont(new java.awt.Font("Tahoma", 0, 30)); // NOI18N
        btnModificar.setText("Modificar");
        btnModificar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnModificarActionPerformed(evt);
            }
        });

        btnEliminar.setFont(new java.awt.Font("Tahoma", 0, 30)); // NOI18N
        btnEliminar.setText("Eliminar");
        btnEliminar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnEliminarActionPerformed(evt);
            }
        });

        btnNuevo.setFont(new java.awt.Font("Tahoma", 0, 30)); // NOI18N
        btnNuevo.setText("Nuevo");
        btnNuevo.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnNuevoActionPerformed(evt);
            }
        });

        lblId.setForeground(new java.awt.Color(255, 255, 255));

        txtDiasPlazo.setFont(new java.awt.Font("Tahoma", 0, 24)); // NOI18N

        lblBanco.setFont(new java.awt.Font("Tahoma", 0, 24)); // NOI18N
        lblBanco.setText("Banco:");

        txtBanco.setFont(new java.awt.Font("Tahoma", 0, 24)); // NOI18N

        javax.swing.GroupLayout jPanel2Layout = new javax.swing.GroupLayout(jPanel2);
        jPanel2.setLayout(jPanel2Layout);
        jPanel2Layout.setHorizontalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel2Layout.createSequentialGroup()
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel2Layout.createSequentialGroup()
                        .addGap(97, 97, 97)
                        .addComponent(btnNuevo)
                        .addGap(18, 18, 18)
                        .addComponent(btnRegistrar)
                        .addGap(18, 18, 18)
                        .addComponent(btnModificar)
                        .addGap(18, 18, 18)
                        .addComponent(btnEliminar))
                    .addGroup(jPanel2Layout.createSequentialGroup()
                        .addGap(86, 86, 86)
                        .addComponent(lblMensaje, javax.swing.GroupLayout.PREFERRED_SIZE, 727, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addGroup(jPanel2Layout.createSequentialGroup()
                        .addGap(94, 94, 94)
                        .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                            .addComponent(jLabel5, javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jLabel6, javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jLabel7, javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jLabel8, javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jLabel9, javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jLabel10, javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jLabel4, javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(lblBanco, javax.swing.GroupLayout.Alignment.LEADING))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                        .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(jPanel2Layout.createSequentialGroup()
                                .addComponent(lblTituloPedido)
                                .addGap(17, 17, 17)
                                .addComponent(lblId, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                            .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                .addComponent(txtNombreProveedor)
                                .addComponent(txtApellidoProveedor, javax.swing.GroupLayout.DEFAULT_SIZE, 448, Short.MAX_VALUE)
                                .addComponent(txtCedulaProveedor, javax.swing.GroupLayout.DEFAULT_SIZE, 448, Short.MAX_VALUE)
                                .addComponent(txtNumeroCuenta, javax.swing.GroupLayout.DEFAULT_SIZE, 448, Short.MAX_VALUE)
                                .addComponent(txtTelefonoProveedor, javax.swing.GroupLayout.DEFAULT_SIZE, 448, Short.MAX_VALUE)
                                .addComponent(cbxRecibo, 0, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                .addComponent(txtDiasPlazo, javax.swing.GroupLayout.DEFAULT_SIZE, 448, Short.MAX_VALUE)
                                .addComponent(txtBanco, javax.swing.GroupLayout.DEFAULT_SIZE, 448, Short.MAX_VALUE)))))
                .addContainerGap(331, Short.MAX_VALUE))
        );
        jPanel2Layout.setVerticalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel2Layout.createSequentialGroup()
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(lblTituloPedido)
                    .addGroup(jPanel2Layout.createSequentialGroup()
                        .addContainerGap()
                        .addComponent(lblId, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addGap(18, 18, 18)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel4)
                    .addComponent(txtNombreProveedor, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(18, 18, 18)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(txtApellidoProveedor, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel5))
                .addGap(18, 18, 18)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel6)
                    .addComponent(txtCedulaProveedor, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(18, 18, 18)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel7)
                    .addComponent(txtNumeroCuenta, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(18, 18, 18)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel8)
                    .addComponent(txtDiasPlazo, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(18, 18, 18)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel9)
                    .addComponent(txtTelefonoProveedor, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(18, 18, 18)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(lblBanco)
                    .addComponent(txtBanco, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(16, 16, 16)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel10)
                    .addComponent(cbxRecibo, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(18, 18, 18)
                .addComponent(lblMensaje, javax.swing.GroupLayout.PREFERRED_SIZE, 24, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(btnRegistrar)
                    .addComponent(btnModificar)
                    .addComponent(btnEliminar)
                    .addComponent(btnNuevo))
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(this);
        this.setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(0, 18, Short.MAX_VALUE)
                .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap())
            .addGroup(layout.createSequentialGroup()
                .addGap(192, 192, 192)
                .addComponent(jPanel2, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, 193, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(jPanel2, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap())
        );
    }// </editor-fold>//GEN-END:initComponents

    private void txtNombreProveedorActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_txtNombreProveedorActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_txtNombreProveedorActionPerformed

    private void btnRegistrarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnRegistrarActionPerformed

        ControladorProveedor proveedor = new ControladorProveedor(txtNombreProveedor.getText(), txtApellidoProveedor.getText(), 
                txtCedulaProveedor.getText(), txtNumeroCuenta.getText(), txtDiasPlazo.getText(), txtTelefonoProveedor.getText(), 
                cbxRecibo.getSelectedItem().toString(),txtBanco.getText(),lblId.getText().toString());
        
        if(proveedor.verificacion(false).length()==0){
            JOptionPane.showMessageDialog(null, "Registrado con ??xito");
            limpiarCampos();
            cargarTabla();
        }else{
            lblMensaje.setText(proveedor.verificacion(false));
        }

    }//GEN-LAST:event_btnRegistrarActionPerformed

    private void txtApellidoProveedorActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_txtApellidoProveedorActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_txtApellidoProveedorActionPerformed

    private void btnCargarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnCargarActionPerformed
        
        cargarTabla();
        
        
    }//GEN-LAST:event_btnCargarActionPerformed

    private void tblPedidosMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_tblPedidosMouseClicked

        lblTituloPedido.setText("Modificar/Eliminar Proveedor");
        
        btnNuevo.setVisible(true);
        btnRegistrar.setVisible(false);
        btnModificar.setVisible(true);
        btnEliminar.setVisible(true);
        
        int id=0;
        
        
        PreparedStatement ps = null;
        ResultSet rs = null;
        try {
            Conexion conexion = new Conexion();
           

            int fila = tblPedidos.getSelectedRow();
            String cedula = tblPedidos.getValueAt(fila, 2).toString();

            ps = conexion.con.prepareStatement("SELECT idProveedor,nombreProveedor,apellidoProveedor,cedulaRucProveedor,numeroCuenta,diasPlazo,numeroTelefono,reciboProveedor,bancoProveedor FROM sistemamg.proveedor WHERE cedulaRucProveedor=?");
            ps.setString(1, cedula);
            rs = ps.executeQuery();

            while (rs.next()) {
                id=rs.getInt("idProveedor");
                lblId.setText(String.valueOf(id));
                txtNombreProveedor.setText(rs.getString("nombreProveedor"));
                txtApellidoProveedor.setText(rs.getString("apellidoProveedor"));
                txtCedulaProveedor.setText(rs.getString("cedulaRucProveedor"));
                txtNumeroCuenta.setText(rs.getString("numeroCuenta"));
                txtDiasPlazo.setText(rs.getString("diasPlazo"));
                txtTelefonoProveedor.setText(rs.getString("numeroTelefono"));
                txtBanco.setText(rs.getString("bancoProveedor"));
                cbxRecibo.setSelectedItem(rs.getString("reciboProveedor"));
            }
        } catch (SQLException ex) {
            System.out.println(ex.toString());
        }
            
        System.out.println(id);
        
        
        

    }//GEN-LAST:event_tblPedidosMouseClicked

    private void btnModificarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnModificarActionPerformed

        
        lblTituloPedido.setText("Registrar nuevo proveedor");
        
        ControladorProveedor proveedor = new ControladorProveedor(txtNombreProveedor.getText(), txtApellidoProveedor.getText(), 
                txtCedulaProveedor.getText(), txtNumeroCuenta.getText(), txtDiasPlazo.getText(), txtTelefonoProveedor.getText(), 
                cbxRecibo.getSelectedItem().toString(), txtBanco.getText(), lblId.getText().toString());
        
   
        if(proveedor.verificacion(true).length()==0){
            JOptionPane.showMessageDialog(null, "Modificado con ??xito");
            limpiarCampos();
            cargarTabla();
        }else{
            lblMensaje.setText(proveedor.verificacion(true));
        }

    }//GEN-LAST:event_btnModificarActionPerformed

    private void btnEliminarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnEliminarActionPerformed

        PreparedStatement ps = null;
        try {

            Conexion conexion = new Conexion();                    

            ps = conexion.con.prepareStatement("DELETE FROM sistemamg.proveedor WHERE idProveedor="+lblId.getText().toString());
            ps.execute();

            
            JOptionPane.showMessageDialog(null, "Proveedor Eliminado");
            cargarTabla();
            limpiarCampos();
            
            
        } catch (SQLException ex) {
            JOptionPane.showMessageDialog(null, "Error al Eliminar Proveedor");
            System.out.println(ex.toString());
        }


    }//GEN-LAST:event_btnEliminarActionPerformed

    private void btnNuevoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnNuevoActionPerformed
        
        limpiarCampos();
        btnNuevo.setVisible(true);
        btnRegistrar.setVisible(true);
        btnModificar.setVisible(false);
        btnEliminar.setVisible(false);
        
        
    }//GEN-LAST:event_btnNuevoActionPerformed

    
    private void cargarTabla(){
        try{
            
            DefaultTableModel modelo = new DefaultTableModel();
            tblPedidos.setModel(modelo);
            
            PreparedStatement ps = null;
            ResultSet rs = null;
            Conexion conexion = new Conexion();
            String sql ="SELECT nombreProveedor,apellidoProveedor,cedulaRucProveedor,numeroCuenta,diasPlazo,numeroTelefono,reciboProveedor, bancoProveedor FROM sistemamg.proveedor";
            ps = conexion.con.prepareStatement(sql);
            rs=ps.executeQuery();
            
            ResultSetMetaData rsMd = rs.getMetaData();
            int cantidadColumnas = rsMd.getColumnCount();
            
            modelo.addColumn("Nombre");
            modelo.addColumn("Apellido");
            modelo.addColumn("C??dula/RUC");
            modelo.addColumn("N??mero cuenta");
            modelo.addColumn("D??as plazo");
            modelo.addColumn("N??mero tel??fono");
            modelo.addColumn("Recibo");
            modelo.addColumn("Banco");
            
                   
            
            while(rs.next()){
                
                Object[] filas = new Object[cantidadColumnas];
                
                for(int i = 0; i<cantidadColumnas;i++){
                    filas[i] = rs.getObject(i+1);
                }
                
                modelo.addRow(filas);
                
            }
            
        }catch(SQLException ex){
            System.err.println(ex.toString());
        }
        
        
    }
    
    
    private void limpiarCampos(){
        
        lblTituloPedido.setText("Registrar nuevo proveedor");
        txtNombreProveedor.setText("");
        txtApellidoProveedor.setText("");
        txtCedulaProveedor.setText("");
        txtNumeroCuenta.setText("");
        txtDiasPlazo.setText("");
        txtTelefonoProveedor.setText("");
        cbxRecibo.setSelectedIndex(0);
        txtBanco.setText("");
        
        lblMensaje.setText("");
        lblMensaje.setForeground(Color.red);
        btnNuevo.setVisible(true);
        btnRegistrar.setVisible(true);
        btnModificar.setVisible(false);
        btnEliminar.setVisible(false);
        lblId.setText("");
        
    }
    

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton btnCargar;
    private javax.swing.JButton btnEliminar;
    private javax.swing.JButton btnModificar;
    private javax.swing.JButton btnNuevo;
    private javax.swing.JButton btnRegistrar;
    private javax.swing.JComboBox<String> cbxRecibo;
    private javax.swing.JLabel jLabel10;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JLabel jLabel5;
    private javax.swing.JLabel jLabel6;
    private javax.swing.JLabel jLabel7;
    private javax.swing.JLabel jLabel8;
    private javax.swing.JLabel jLabel9;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JPanel jPanel2;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JLabel lblBanco;
    private java.awt.Label lblId;
    private javax.swing.JLabel lblMensaje;
    private javax.swing.JLabel lblTituloPedido;
    private javax.swing.JLabel lblTituloPpedidos;
    private javax.swing.JTable tblPedidos;
    private javax.swing.JTextField txtApellidoProveedor;
    private javax.swing.JTextField txtBanco;
    private javax.swing.JTextField txtCedulaProveedor;
    private javax.swing.JTextField txtDiasPlazo;
    private javax.swing.JTextField txtNombreProveedor;
    private javax.swing.JTextField txtNumeroCuenta;
    private javax.swing.JTextField txtTelefonoProveedor;
    // End of variables declaration//GEN-END:variables
}
