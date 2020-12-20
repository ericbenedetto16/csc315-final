module.exports = (sequelize, DataTypes) => {
    const SubGenre = sequelize.define(
        'sub_genre',
        {
            sgid: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            gname: {
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

    return SubGenre;
};
