const Item = require("./Item")
const mongoose = require('mongoose');

beforeAll(async () => {
    await mongoose
        .connect("mongodb://mongo:27017/docker-node-mongo", {
            useNewUrlParser: true,
        })
        .then(() => console.log("MongoDB Connected"))
        .catch((err) => console.log(err));
});

test('Persist', async () => {
    await Item.create({ name: 'Alexis', date: '2022-04-21' }, { name: 'Nicolas', date: '2022-04-22' });
});

test('Find all', async () => {
    const items = await Item.find()

    expect(items[0].name).toBe('Alexis');
    expect(items[0].date.toISOString()).toBe(new Date('2022-04-21').toISOString())

    expect(items[1].name).toBe('Nicolas');
    expect(items[1].date.toISOString()).toBe(new Date('2022-04-22').toISOString());
});

test('Update by name', async () => {
    await Item.findOneAndUpdate({ name: 'Alexis' }, { name: 'Alexis 2' })
});

test('Find one by name', async () => {
    const item = await Item.findOne({ name: 'Alexis 2' });
    expect(item.name).toBe('Alexis 2');
    expect(item.date.toISOString()).toBe(new Date('2022-04-21').toISOString())
});

test('Delete', async () => {
    await Item.findOneAndDelete({ name: 'Alexis' })

    const item = await Item.findOne({ name: 'Alexis' });
    expect(item).toBe(null);
});

afterAll(async () => {
    await Item.deleteMany({});
});
