module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define(
        'genre',
        {
            gid: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            gname: {
                type: DataTypes.CHAR(20),
                allowNull: false,
            },
        },
        {}
    );

    return Genre;
};
