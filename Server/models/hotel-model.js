const Hotel = class {
    constructor (sequelize, Sequelize) {
        const Hotel = sequelize.define("hotel", {
          name: {
            type: Sequelize.STRING
          },
          description: {
            type: Sequelize.STRING
          },
          published: {
            type: Sequelize.BOOLEAN
          }
        });
      
        return Hotel;
    }
};

export default Hotel;

