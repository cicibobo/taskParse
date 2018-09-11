module.exports.data = {
  User: {
    className: 'User',
    fields: {
      objectId: { type: 'String' },
      name: { type: 'String' },
      city: { type: 'Ref', targetClass: 'City' },
      employer: { type: 'Ref', targetClass: 'User' },
      location: { type: 'GeoPoint' },
      createdAt: { type: 'Date' }
    }
  }
};
