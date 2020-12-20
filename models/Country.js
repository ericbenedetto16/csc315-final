module.exports = (sequelize, DataTypes) => {
    const Country = sequelize.define(
        'country',
        {
            rid: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            rname: {
                type: DataTypes.CHAR(20),
                allowNull: false,
            },
            cname: {
                type: DataTypes.CHAR(20),
                allowNull: false,
            },
        },
        {}
    );

    return Country;
};
