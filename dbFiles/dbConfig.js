const config = {
    user: 'root',
    password: 'SQLFish42@',
    server: 'Local instance MySQL80',
    database: 'mech-site',
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instancename: 'MySQL80'
    },
    port: 3306
}

module.exports = config;