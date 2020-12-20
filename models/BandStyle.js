module.exports = (sequelize, DataTypes) => {
    const BandStyle = sequelize.define(
        'band_styles',
        {
            boid: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            bname: {
                type: DataTypes.CHAR(20),
                allowNull: false,
            },
            sgname: {
                type: DataTypes.CHAR(20),
                allowNull: false,
            },
        },
        {}
    );

    return BandStyle;
};
