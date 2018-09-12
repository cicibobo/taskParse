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
  },
  Post: {
    className: "Post",
    fields: {
    objectId: { type: "String" },
    text: { type: "String" },
    author: { type: "Ref", targetClass: "User" },
    categories: { type: "Relation", targetClass: "Category" },
    createdAt: { type: "Date" }
    }
  },
  City: {
    className: "City",
    fields: {
      objectId: { type: "String" },
      country: { type: "Ref", targetClass: "Country"},
      name: { type: "String" },
      createdAt: { type: "Date" }
    }
  },
  Country: {
    className: "Country",
    fields: {
      objectId: { type: "String" },
      name: { type: "String" },
      createdAt: { type: "Date" }
    }
    },
  Category: {
    className: "Category",
    fields: {
      objectId: { type: "String" },
      name: { type: "String" },
      createdAt: { type: "Date" }
    }
  }
};
