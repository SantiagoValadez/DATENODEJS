require ('../listeners/emailListener');
require ('../listeners/statsListener');

const registerUser = require ('./userRegistration');

const user1 = {id: 1, email: 'user@example.com', name: 'john Doe' }
const user2 = {id: 2, email: 'user2@example.com', name: 'jane Doe' }

registerUser(user1);
registerUser(user2);
