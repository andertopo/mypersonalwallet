CREATE TABLE IF NOT EXISTS tbl_categorias(
  id_categoria INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT,
  icono TEXT,
  color TEXT,
  padre_categoria_id INTEGER,
  FOREIGN KEY (padre_categoria_id) REFERENCES tbl_categorias (id_categoria)
);

CREATE TABLE IF NOT EXISTS tbl_cuentas (
  id_cuenta INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT,
  icono TEXT,
  color TEXT
);

CREATE TABLE IF NOT EXISTS tbl_etiquetas (
  id_etiqueta INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT,
  icono TEXT,
  color TEXT
);

CREATE TABLE IF NOT EXISTS tbl_transacciones (
  id_transaccion INTEGER PRIMARY KEY AUTOINCREMENT,
  descripcion TEXT,
  valor INTEGER,
  fecha  INTEGER,
  fijo  INTEGER,
  realizado  INTEGER,
  repeticion INTEGER,
  observacion TEXT,
  ubicacion TEXT,
  categoria_id INTEGER,
  cuenta_id INTEGER,
  etiqueta_id INTEGER,
  FOREIGN KEY (categoria_id) REFERENCES tbl_categorias (id_categoria)
  FOREIGN KEY (cuenta_id) REFERENCES tbl_cuentas (id_cuenta)
  FOREIGN KEY (etiqueta_id) REFERENCES tbl_etiquetas (id_etiqueta)
);

CREATE TABLE IF NOT EXISTS tbl_metas (
  id_meta INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT,
  descripcion TEXT,
  valor TEXT,
  valor_inicial TEXT,
  fecha_deseada  INTEGER,
  color TEXT,
  icono TEXT
);

CREATE TABLE IF NOT EXISTS tbl_presupuestos (
  id_presupuesto INTEGER PRIMARY KEY AUTOINCREMENT,
  valor TEXT,
  tiene_alerta  INTEGER,
  alerta INTEGER,
  categoria_id INTEGER,
  FOREIGN KEY (categoria_id) REFERENCES tbl_categorias (id_categoria)
);