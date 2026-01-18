import mysql from 'mysql2/promise'

const config = {
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT || '4000'),
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  ssl: {
    minVersion: 'TLSv1.2',
    rejectUnauthorized: true
  }
}

let pool: mysql.Pool | null = null

export const getPool = () => {
  if (!pool) {
    pool = mysql.createPool(config)
  }
  return pool
}

export const query = async (sql: string, params?: any[]) => {
  const connection = await getPool().getConnection()
  try {
    const [results] = await connection.execute(sql, params)
    return results
  } finally {
    connection.release()
  }
}
