import redis from 'redis';

const client = redis.createClient('3000', '127.0.0.1');

client.on('connect', function() {
  console.log('Connected to Redis...');
})

export default client;