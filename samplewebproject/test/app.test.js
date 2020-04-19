const assert = require('assert');
it('has a text input', async () => {
    const dom = await render('index.html');
    const input = dom.window.document.querySelector('input');

    assert(input);
});

it('shows a success message with a valid email', async () => {
    const dom = await render('index.html');
    const input = dom.window.document.querySelector('input');

    input.value = 'dlkjfaj@jdfasljk.com';
    dom.window.document
        .querySelector('form')
        .dispatchEvent(new dom.window.Event('submit'));

    const h1 = dom.window.document.querySelector('h1');
    assert.strictEqual(h1.innerHTML, 'looks good');
});

it('shows a failure message with an invalid email', async () => {
    const dom = await render('index.html');
    const input = dom.window.document.querySelector('input');
    input.value = 'aflskdjska';
    dom.window.document
        .querySelector('form')
        .dispatchEvent(new dom.window.Event('submit'));

    const h1 = dom.window.document.querySelector('h1');
    assert.strictEqual(h1.innerHTML, 'invalid email');
});
