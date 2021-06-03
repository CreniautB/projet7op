module.exports = (sequelize, Datatypes) => {
    const Message = sequelize.define('Message', {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            unique: true,
            allowNull: false,
            autoIncrement: true
        },
        content : {
            type: Datatypes.TEXT,
            allowNull: false
        }
    });
    Message.associate = (models) => {
        Message.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }, onDelete: 'CASCADE'
        })
        Message.hasMany(models.Comment)
    }
    return Message;
}