const admin = require('firebase-admin');
const serviceAccount = require('../config/firebase-admin.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

async function createUsers() {
  try {
    // Create admin user
    await admin.auth().createUser({
      email: 'admin@teluguyash.com',
      password: 'admin123',
      emailVerified: true
    });

    // Create regular user
    await admin.auth().createUser({
      email: 'user@teluguyash.com',
      password: 'user123',
      emailVerified: true
    });

    console.log('Users created successfully');
  } catch (error) {
    console.error('Error creating users:', error);
  }
}

createUsers(); 