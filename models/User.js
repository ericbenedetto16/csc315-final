module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'users',
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

    User.associate = (models) => {
        const { favorites } = models;

        User.hasMany(favorites, {
            foreignKey: 'id',
        });
    };

    return User;
};
