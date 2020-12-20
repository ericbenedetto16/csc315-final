module.exports = (sequelize, DataTypes) => {
    const BandOrigin = sequelize.define(
        'band_origins',
        {
            boid: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            cname: {
                type: DataTypes.CHAR(20),
                allowNull: false,
            },
        },
        {}
    );

    return BandOrigin;
};
