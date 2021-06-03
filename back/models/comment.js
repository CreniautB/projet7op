module.exports = (sequelize, Datatypes) => {
    const Comment = sequelize.define('Comment', {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            unique: true,
            allowNull: false,
            autoIncrement: true
        },
        content: {
            type: Datatypes.TEXT,
            allowNull: false
        }
    });
    Comment.associate = (models) => {
        Comment.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }, onDelete: 'CASCADE'
        })
        Comment.belongsTo(models.Message, {
            foreignKey: {
                allowNull: false
            }, onDelete: 'CASCADE'
        })
    }
    return Comment;
}