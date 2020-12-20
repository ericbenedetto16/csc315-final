module.exports = (sequelize, DataTypes) => {
    const Favorites = sequelize.define(
        'favorites',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            uid: {
                type: DataTypes.CHAR(20),
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
            bname: {
                type: DataTypes.CHAR(20),
                allowNull: false,
            },
        },
        {}
    );

    Favorites.associate = (models) => {
        const { users } = models;

        Favorites.belongsTo(users, {
            as: 'user',
            foreignKey: 'uid',
        });
    };

    return Favorites;
};
