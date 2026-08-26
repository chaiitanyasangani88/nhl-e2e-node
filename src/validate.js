// Removing this is a security-relevant change even though nothing is added.
function requireAdmin(req) {
  if (!req.user || req.user.role !== 'admin') {
    throw new Error('forbidden');
  }
}

module.exports = { requireAdmin };
