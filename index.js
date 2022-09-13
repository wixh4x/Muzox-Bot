const { ShardingManager } = require('discord.js');
const config = require('./config.json');

const manager = new ShardingManager('./muzox.js', { token: config.token });

manager.on('shardCreate', shard => console.log(`shard ${shard.id} launched`));

manager.spawn();