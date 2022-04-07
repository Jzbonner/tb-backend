module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fba0e1cfca6b0b363cc48252f66c49ac'),
  },
});
