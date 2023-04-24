const oracledb = require('oracledb');



async function run() {
    let connection;
  

  try {

    connection = await oracledb.getConnection({ 
        user: "DCAUSEY", 
        password: "Mtc8cCAgaTSItvq13kOnvl3e", 
        connectionString: "oracle.cise.ufl.edu:1521/orcl" });

    console.log("Successfully connected to Oracle Database");

    const result = await connection.execute(

      `WITH eulakes(country, province, lake, depth) AS
      (
        SELECT g_l.country, g_l.province, g_l.lake, l.depth
        FROM Lake l, geo_lake g_l, encompasses e
        WHERE e.continent = 'Europe' AND l.name = g_l.lake AND g_l.country = e.country
      ),
      provavg(province, avgd) AS
      (
          SELECT province, avg(depth)
          FROM eulakes WHERE depth IS NOT NULL 
          GROUP BY province
      )
      SELECT el.province, el.lake
      FROM eulakes el, Province p, provavg pa
      WHERE p.name = el.province AND pa.province = el.province AND (p.population / p.area) > 100
      AND pa.avgd < ( SELECT avg(depth) FROM eulakes )`
    );
    console.log(result.rows);

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
  }

  run();