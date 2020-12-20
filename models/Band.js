module.exports = (sequelize, DataTypes) => {
    const Band = sequelize.define(
        'bands',
        {
            bid: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            bname: {
                type: DataTypes.CHAR(20),
                allowNull: false,
            },
        },
        {}
    );

    return Band;
};
