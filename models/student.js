// Student.js

module.exports = function (sequelize, DataTypes) {
    var Student = sequelize.define("Student", {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        mainLanguage: DataTypes.STRING,
        subLanguage: DataTypes.STRING,
        school: DataTypes.STRING,
        email: DataTypes.STRING,
        school: DataTypes.STRING,
        linkedIn: DataTypes.STRING,
        gitHub: DataTypes.STRING,
        resume: DataTypes.STRING,
        description: DataTypes.TEXT,
        savedState: DataTypes.BOOLEAN,
    }, { // This is the options object
        timestamps: false,
    });

    Student.associate = function (models) {
        Student.belongsToMany(models.Language, {
            through: "StudentLanguage",
            foreignKey: "student_id",
            onDelete: "cascade"
        });
    };

    return Student;
};