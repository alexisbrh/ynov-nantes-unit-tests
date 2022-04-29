const Todo = require("../toDoModel")
const mongoose = require('mongoose');

beforeAll(async () => {
    await mongoose
        .connect("mongodb://mongo:27017/toDoApp", {
            useNewUrlParser: true,
        })
        .then(() => console.log("MongoDB Connected"))
        .catch((err) => console.log(err));
});

afterAll(async () => {
    await Todo.deleteMany({});
    await mongoose.connection.close();
});

test('Persist', async () => {
    await Todo.create({ text: 'Item 1', done: true }, { text: 'Item 2', done: false });
});

test('Find all', async () => {
    const Todos = await Todo.find()

    expect(Todos[0].text).toBe('Item 1');
    expect(Todos[0].done).toBeTruthy()

    expect(Todos[1].text).toBe('Item 2');
    expect(Todos[1].done).toBeFalsy()
});

test('Update by name', async () => {
    await Todo.findOneAndUpdate({ text: 'Item 1.1' }, { text: 'Item 2.2' })
});

test('Find one by name', async () => {
    const Todo = await Todo.findOne({ text: 'Item 2.2' });
    expect(Todo.text).toBe('Item 2.2');
    expect(Todo.done).toBeFalsy()
});

test('Delete', async () => {
    await Todo.findOneAndDelete({ name: 'Item 2.2' })

    const Todo = await Todo.findOne({ name: 'Item 2.2' });
    expect(Todo).toBe(null);
});
