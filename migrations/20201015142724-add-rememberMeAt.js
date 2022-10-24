module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('task', 'rememberMeAt', {
      type: Sequelize.DataTypes.DATE
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('task', 'rememberMeAt')
  }
}
