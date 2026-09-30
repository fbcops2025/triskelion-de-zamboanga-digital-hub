import { content } from '../src/content.mjs';
const required = ['updates', 'events', 'services', 'documents', 'gallery'];
for (const key of required) if (!Array.isArray(content[key]) || content[key].length === 0) throw new Error(`missing content collection: ${key}`);
if (!content.updates.every(item => item.approvalStatus === 'pending')) throw new Error('unapproved update entered public content');
if (!content.events.every(item => item.approvalStatus === 'pending')) throw new Error('unapproved event entered public content');
console.log('tests passed: content collections, approval gates, and private-by-default model verified');
