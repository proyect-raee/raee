module.exports = (plugin) => {
  // Sobrescribir el controlador `me`
  plugin.controllers.user.me = async (ctx) => {
    const user = ctx.state.user;

    if (!user) {
      return ctx.unauthorized();
    }

    const userWithImg = await strapi
      .query("plugin::users-permissions.user")
      .findOne({
        where: { id: user.id },
        populate: ["imgUrl"],
      });

    ctx.body = userWithImg;
  };

  return plugin;
};
